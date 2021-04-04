import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Zone } from '../../zone/entity/zone.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 60 })
  name: string;
}
