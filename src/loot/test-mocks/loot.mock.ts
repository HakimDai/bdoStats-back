import { LootDto } from '../dto/loot.dto';
import { Loot } from '../entity/loot.entity';

export const lootToCreate: LootDto = {
  name: 'token',
  price: 3000,
  zones: [{ zoneId: 1 }],
};

export const lootCreated: Loot = {
  id: 1,
  name: 'token',
  price: 3000,
  zones: [{ id: 1, name: 'sulfur', region: { id: 1, name: 'Valencia' } }],
};
