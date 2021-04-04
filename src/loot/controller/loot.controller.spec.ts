import { Test, TestingModule } from '@nestjs/testing';
import { LootController } from './loot.controller';
import { LootService } from '../service/loot.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loot } from '../entity/loot.entity';
import { of } from 'rxjs';
import { lootCreated, lootToCreate } from '../test-mocks/loot.mock';

describe('LootController', () => {
  let controller: LootController;
  let service: LootService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LootController],
      providers: [
        LootService,
        { provide: getRepositoryToken(Loot), useClass: Repository },
      ],
    }).compile();

    controller = module.get<LootController>(LootController);
    service = module.get<LootService>(LootService);
  });

  describe('Create a loot', () => {
    it('should return the loot created', async () => {
      jest
        .spyOn(service, 'createOne')
        .mockImplementation(() => of(lootCreated));
      controller.createOne(lootToCreate).subscribe((value) => {
        expect(value.name).toEqual(lootCreated.name);
        expect(value.price).toEqual(lootCreated.price);
      });
    });
  });
});
