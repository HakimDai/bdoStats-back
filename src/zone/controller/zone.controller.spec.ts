import { Test, TestingModule } from '@nestjs/testing';
import { ZoneController } from './zone.controller';
import { ZoneService } from '../service/zone.service';
import { Zone } from '../entity/zone.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ZoneDto } from '../dto/zone.dto';
import { zoneToCreate } from '../test-mocks/zone.mock';
import { of } from 'rxjs';

describe('ZoneController', () => {
  let controller: ZoneController;
  let service: ZoneService;
  const zone: ZoneDto = zoneToCreate;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZoneController],
      providers: [
        ZoneService,
        { provide: getRepositoryToken(Zone), useClass: Repository },
      ],
    }).compile();

    controller = module.get<ZoneController>(ZoneController);
    service = module.get<ZoneService>(ZoneService);
  });

  describe('should be create a region', () => {
    it('should return the created region', async () => {
      jest
        .spyOn(service, 'createOne')
        .mockImplementation(() =>
          of({ id: 1, name: 'sulfur', region: { id: 1, name: 'Valencia' } }),
        );
      controller.createOne(zone).subscribe((value) => {
        expect(value).toBe({
          id: 1,
          name: 'sulfur',
          region: { id: 1, name: 'Valencia' },
        });
      });
    });
  });
});
