import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FarmSession } from '../../farm-session/entity/farm-session.entity';
import { Loot } from '../../loot/entity/loot.entity';

@Entity('farmSession_has_loot')
export class FarmSessionHasLoot {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => FarmSession)
  farmSession: FarmSession;

  @ManyToOne(() => Loot)
  loot: Loot;
}
