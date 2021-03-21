import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Region } from '../../region/region.entity';
import { LootTable } from '../../loot-table/loot-table.entity';

@Entity()
export class Zone {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 60 })
  name: string;

  @ManyToOne(() => Region)
  region: Region;

  @OneToOne(() => LootTable)
  @JoinColumn()
  lootTable: LootTable;
}
