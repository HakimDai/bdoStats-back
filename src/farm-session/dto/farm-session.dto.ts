import { Zone } from '../../zone/entity/zone.entity';

export interface FarmSessionDto {
  id: number;
  zone: Zone;
  duration: number;
}
