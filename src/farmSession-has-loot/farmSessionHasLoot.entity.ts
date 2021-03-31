import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FarmSession } from '../farm-session/entity/farm-session.entity';
import { Loot } from '../loot/loot.entity';

@Entity('farmSession_has_loot')
export class FarmSessionHasLoot {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ManyToOne(
    () => FarmSession,
    (farmSession) => farmSession.farmSessionHasLoots,
  )
  farmSession: FarmSession;

  @ManyToOne(() => Loot, (loot) => loot.farmSessionHasLoots)
  loot: Loot;

  @Column({ type: 'int' })
  quantity: number;
}
