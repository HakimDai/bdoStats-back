import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Zone } from '../../zone/entity/zone.entity';
import { FarmSessionHasLoot } from '../../farm-session-has-loot/entity/farm-session-has-loot.entity';

@Entity()
export class FarmSession {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'tinyint', width: 4, nullable: false })
  duration: number;

  @ManyToOne(() => Zone)
  zone: Zone;
}
