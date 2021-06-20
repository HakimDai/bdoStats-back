import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Zone } from '../../zone/entity/zone.entity';

@Entity()
export class Loot {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 80 })
  name: string;

  @Column({ type: 'int' })
  price: number;

  @ManyToMany(() => Zone)
  @JoinTable()
  zones: Zone[];
}
