import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Loot } from '../loot/loot.entity';

@Entity()
export class LootTable {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ManyToMany(() => Loot, (loot) => loot.lootTables)
  @JoinTable()
  loots: Loot[];
}
