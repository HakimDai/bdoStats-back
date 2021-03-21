import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Zone } from '../../zone/entity/zone.entity';

@Entity()
export class FarmSession {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'tinyint', width: 4, nullable: false })
  duration: number;

  @ManyToOne(() => Zone)
  zone: Zone;
}
