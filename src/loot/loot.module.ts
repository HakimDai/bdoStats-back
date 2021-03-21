import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loot } from './loot.entity';

@Module({ imports: [TypeOrmModule.forFeature([Loot])] })
export class LootModule {}
