import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Zone } from '../../zone/entity/zone.entity';
import { Loot } from '../../loot/loot.entity';
import { FarmSessionHasLoot } from '../../farmSession-has-loot/farmSessionHasLoot.entity';

@Entity()
export class FarmSession {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'tinyint', width: 4, nullable: false })
  duration: number;

  @ManyToOne(() => Zone, { cascade: true })
  zone: Zone;

  @OneToMany(
    () => FarmSessionHasLoot,
    (farmSessionHasLoot) => farmSessionHasLoot.farmSession,
  )
  farmSessionHasLoots: FarmSessionHasLoot[];
}
