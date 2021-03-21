import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LootTable } from './loot-table.entity';

@Module({ imports: [TypeOrmModule.forFeature([LootTable])] })
export class LootTableModule {}
