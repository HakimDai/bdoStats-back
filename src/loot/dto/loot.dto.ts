import { Zone } from '../../zone/entity/zone.entity';

export class LootDto {
  name: string;
  price: number;
  zones: Zone[];
}
