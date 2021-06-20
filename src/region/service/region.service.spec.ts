import { Test, TestingModule } from '@nestjs/testing';
import { RegionService } from './region.service';
import { Repository } from 'typeorm';
import { Region } from '../entity/region.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { regionCreatedMock, regionMock } from '../test-mocks/region.mocks';

describe('RegionService', () => {
  let service: RegionService;
  let regionRepositoryMock: Repository<Region>;
  const region = regionMock;
  const regionCreated = regionCreatedMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegionService,
        {
          provide: getRepositoryToken(Region),
          useValue: {
            create: jest.fn().mockReturnValue(region),
            save: jest.fn(),
            findOne: jest.fn().mockReturnValue(regionCreated),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RegionService>(RegionService);
    regionRepositoryMock = module.get<Repository<Region>>(
      getRepositoryToken(Region),
    );
  });

  describe('create a region', () => {
    it('should return the created region', async () => {
      jest
        .spyOn(regionRepositoryMock, 'save')
        .mockReturnValue(new Promise((resolve) => resolve(regionCreated)));
      service.createOne(region).subscribe();
      expect(regionRepositoryMock.create).toBeCalledTimes(1);
      expect(regionRepositoryMock.create).toBeCalledWith(region);
      expect(regionRepositoryMock.save).toBeCalledTimes(1);
    });
  });

  describe('should find a region', () => {
    it('should return the region with the right id', async () => {
      jest
        .spyOn(regionRepositoryMock, 'findOne')
        .mockReturnValue(new Promise((resolve) => resolve(regionCreated)));
      service.findOneRegion(1).subscribe();
      expect(regionRepositoryMock.findOne).toBeCalledTimes(1);
      expect(regionRepositoryMock.findOne).toBeCalledWith(1);
      regionRepositoryMock
        .findOne(1)
        .then((result) => expect(result).toEqual(regionCreated));
    });
  });
});
