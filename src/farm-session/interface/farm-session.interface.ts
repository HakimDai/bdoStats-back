import { Loot } from '../../loot/loot.interface';

export interface FarmSessionInterface {
  id?: number;
  duration: number;
  zoneId: number;
  loots: Loot[];
}
