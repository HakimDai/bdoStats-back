import { Test, TestingModule } from '@nestjs/testing';
import { FarmSessionHasLootService } from './farm-session-has-loot.service';
import { Repository } from 'typeorm';
import { FarmSessionHasLoot } from '../entity/farm-session-has-loot.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import {
  farmSessionHasLootCreated,
  farmSessionHasLootToCreate,
} from '../test/farm-session-has-loot.mock';

describe('FarmSessionHasLootService', () => {
  let service: FarmSessionHasLootService;
  let farmSessionHasLootRepositoryMock: Repository<FarmSessionHasLoot>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FarmSessionHasLootService,
        {
          provide: getRepositoryToken(FarmSessionHasLoot),
          useValue: {
            create: jest.fn().mockReturnValue(farmSessionHasLootToCreate),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FarmSessionHasLootService>(FarmSessionHasLootService);
    farmSessionHasLootRepositoryMock = module.get<
      Repository<FarmSessionHasLoot>
    >(getRepositoryToken(FarmSessionHasLoot));
  });

  describe('create a farm-session-has-loot entry', () => {
    it('should return the created session', async () => {
      jest
        .spyOn(farmSessionHasLootRepositoryMock, 'save')
        .mockReturnValue(
          new Promise((resolve) => resolve(farmSessionHasLootCreated)),
        );
      await service.createOne(farmSessionHasLootToCreate).subscribe();
      expect(farmSessionHasLootRepositoryMock.create).toBeCalledTimes(1);
      expect(farmSessionHasLootRepositoryMock.create).toBeCalledWith(
        farmSessionHasLootToCreate,
      );
      expect(farmSessionHasLootRepositoryMock.save).toBeCalledTimes(1);
    });
  });
});
