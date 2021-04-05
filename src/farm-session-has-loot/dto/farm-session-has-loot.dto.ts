import { FarmSession } from '../../farm-session/entity/farm-session.entity';
import { Loot } from '../../loot/entity/loot.entity';

export class FarmSessionHasLootDto {
  quantity: number;
  farmSession: FarmSession;
  loot: Loot;
}
