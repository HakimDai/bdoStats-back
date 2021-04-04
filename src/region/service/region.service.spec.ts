import { Test, TestingModule } from '@nestjs/testing';
import { RegionService } from './region.service';
import { Repository } from 'typeorm';
import { Region } from '../entity/region.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Observable, of } from 'rxjs';
import { regionCreated, regionMock } from '../test-mocks/region.mocks';

describe('RegionService', () => {
  let service: RegionService;
  let regionRepositoryMock: Repository<Region>;
  const region = regionMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegionService,
        {
          provide: getRepositoryToken(Region),
          useValue: {
            create: jest.fn().mockReturnValue(region),
            save: jest.fn(),
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
      await service.createOne(region).subscribe();
      expect(regionRepositoryMock.create).toBeCalledTimes(1);
      expect(regionRepositoryMock.create).toBeCalledWith(region);
      expect(regionRepositoryMock.save).toBeCalledTimes(1);
    });
  });
});
