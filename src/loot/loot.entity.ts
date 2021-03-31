import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FarmSession } from '../farm-session/entity/farm-session.entity';

@Entity()
export class Loot {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 80 })
  name: string;

  @ManyToMany(() => FarmSession, (farmSession) => farmSession.loots)
  farmSessions: FarmSession;
}
