import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FarmSession } from '../farm-session/entity/farm-session.entity';
import { FarmSessionHasLoot } from '../farmSession-has-loot/farmSessionHasLoot.entity';

@Entity()
export class Loot {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 80 })
  name: string;

  @OneToMany(
    () => FarmSessionHasLoot,
    (farmSessionHasLoot) => farmSessionHasLoot.loot,
  )
  farmSessionHasLoots: FarmSessionHasLoot[];
}
