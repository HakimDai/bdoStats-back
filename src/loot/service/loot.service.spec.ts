import { Test, TestingModule } from '@nestjs/testing';
import { LootService } from './loot.service';
import { Repository } from 'typeorm';
import { Loot } from '../entity/loot.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { lootCreated, lootToCreate } from '../test-mocks/loot.mock';

describe('LootService', () => {
  let service: LootService;
  let lootRepositoryMock: Repository<Loot>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LootService,
        {
          provide: getRepositoryToken(Loot),
          useValue: {
            create: jest.fn().mockReturnValue(lootToCreate),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<LootService>(LootService);
    lootRepositoryMock = module.get<Repository<Loot>>(getRepositoryToken(Loot));
  });

  describe('create a loot', () => {
    it('should return the created loot', async () => {
      jest
        .spyOn(lootRepositoryMock, 'save')
        .mockReturnValue(new Promise((resolve) => resolve(lootCreated)));
      await service.createOne(lootToCreate).subscribe();
      expect(lootRepositoryMock.create).toBeCalledTimes(1);
      expect(lootRepositoryMock.create).toBeCalledWith(lootToCreate);
      expect(lootRepositoryMock.save).toBeCalledTimes(1);
    });
  });
});
