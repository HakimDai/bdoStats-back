import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Region } from '../../region/region.entity';
import { Loot } from '../../loot/loot.entity';

@Entity()
export class Zone {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 60 })
  name: string;

  @ManyToOne(() => Region)
  region: Region;

  @ManyToMany(() => Loot)
  @JoinTable()
  loots: Loot[];
}
