import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LootTable } from '../loot-table/loot-table.entity';

@Entity()
export class Loot {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 80 })
  name: string;

  @ManyToMany(() => LootTable, (lootTable) => lootTable.loots)
  lootTables: LootTable;
}
