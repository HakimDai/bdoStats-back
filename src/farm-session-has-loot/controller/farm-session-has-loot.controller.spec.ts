import { Test, TestingModule } from '@nestjs/testing';
import { FarmSessionHasLootController } from './farm-session-has-loot.controller';
import { FarmSessionHasLootService } from '../service/farm-session-has-loot.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FarmSessionHasLoot } from '../entity/farm-session-has-loot.entity';
import { Repository } from 'typeorm';
import { of } from 'rxjs';
import {
  farmSessionHasLootCreated,
  farmSessionHasLootToCreate,
} from '../test/farm-session-has-loot.mock';

describe('FarmSessionHasLootController', () => {
  let controller: FarmSessionHasLootController;
  let service: FarmSessionHasLootService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmSessionHasLootController],
      providers: [
        FarmSessionHasLootService,
        {
          provide: getRepositoryToken(FarmSessionHasLoot),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<FarmSessionHasLootController>(
      FarmSessionHasLootController,
    );
    service = module.get<FarmSessionHasLootService>(FarmSessionHasLootService);
  });

  describe('Create a farm-session-has-loot entry', () => {
    it('should return the loot quantity', async () => {
      jest
        .spyOn(service, 'createOne')
        .mockImplementation(() => of(farmSessionHasLootCreated));
      controller.createOne(farmSessionHasLootToCreate).subscribe((value) => {
        expect(value.quantity).toEqual(farmSessionHasLootCreated.quantity);
      });
    });
  });
});
