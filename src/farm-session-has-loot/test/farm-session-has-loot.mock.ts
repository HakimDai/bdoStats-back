import { FarmSessionHasLootDto } from '../dto/farm-session-has-loot.dto';
import { FarmSessionHasLoot } from '../entity/farm-session-has-loot.entity';

export const farmSessionHasLootToCreate: FarmSessionHasLootDto = {
  quantity: 6154,
  farmSessionId: 1,
  lootId: 1,
};

export const farmSessionHasLootCreated: FarmSessionHasLoot = {
  id: 1,
  quantity: 6154,
  farmSession: {
    id: 1,
    duration: 60,
    zone: {
      id: 1,
      name: 'Sulfur',
      region: { id: 1, name: 'Valencia' },
    },
  },
  loot: {
    id: 1,
    name: 'Token',
    price: 3000,
    zones: [],
  },
};
