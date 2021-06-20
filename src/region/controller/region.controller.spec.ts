import { Test, TestingModule } from '@nestjs/testing';
import { RegionController } from './region.controller';
import { RegionService } from '../service/region.service';
import { RegionDto } from '../dto/region.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Region } from '../entity/region.entity';
import { Repository } from 'typeorm';
import { of } from 'rxjs';
import { regionCreatedMock, regionMock } from '../test-mocks/region.mocks';

describe('RegionController', () => {
  let controller: RegionController;
  let service: RegionService;
  const region: RegionDto = regionMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegionController],
      providers: [
        RegionService,
        { provide: getRepositoryToken(Region), useClass: Repository },
      ],
    }).compile();

    controller = module.get<RegionController>(RegionController);
    service = module.get<RegionService>(RegionService);
  });

  describe('Create a region', () => {
    it('should return the same name of the entry', async () => {
      jest
        .spyOn(service, 'createOne')
        .mockImplementation(() => of(regionCreatedMock));
      controller.createOne(region).subscribe((value) => {
        expect(value.name).toEqual(regionCreatedMock.name);
      });
    });
  });
});
