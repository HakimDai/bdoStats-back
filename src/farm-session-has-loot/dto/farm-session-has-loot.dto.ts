import { FarmSession } from '../../farm-session/entity/farm-session.entity';
import { Loot } from '../../loot/entity/loot.entity';

export class FarmSessionHasLootDto {
  id?: number;
  quantity: number;
  farmSessionId: number;
  lootId: number;
}
