import { Test, TestingModule } from '@nestjs/testing';
import { ZoneService } from './zone.service';
import { Repository } from 'typeorm';
import { Zone } from '../entity/zone.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { zoneCreated, zoneToCreate } from '../test-mocks/zone.mock';

describe('ZoneService', () => {
  let service: ZoneService;
  let zoneRepositoryMock: Repository<Zone>;
  const zoneMock = zoneToCreate;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ZoneService,
        {
          provide: getRepositoryToken(Zone),
          useValue: {
            create: jest.fn().mockReturnValue(zoneMock),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ZoneService>(ZoneService);
    zoneRepositoryMock = module.get<Repository<Zone>>(getRepositoryToken(Zone));
  });

  describe('create a zone', () => {
    it('should return the created zone', async () => {
      jest
        .spyOn(zoneRepositoryMock, 'save')
        .mockReturnValue(new Promise((resolve) => resolve(zoneCreated)));
      await service.createOne(zoneMock).subscribe();
      expect(zoneRepositoryMock.create).toBeCalledTimes(1);
      expect(zoneRepositoryMock.create).toBeCalledWith(zoneMock);
      expect(zoneRepositoryMock.save).toBeCalledTimes(1);
    });
  });
});
