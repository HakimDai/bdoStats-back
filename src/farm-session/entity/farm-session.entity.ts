import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Zone} from '../../zone/entity/zone.entity';
import {Loot} from "../../loot/loot.entity";

@Entity()
export class FarmSession {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'tinyint', width: 4, nullable: false })
  duration: number;

  @ManyToOne(() => Zone, { cascade: true })
  zone: Zone;

  @ManyToMany(() => Loot, (loot) => loot.farmSessions)
  @JoinTable()
  loots: Loot;
}
