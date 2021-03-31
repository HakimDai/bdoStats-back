import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSessionHasLoot } from './farmSessionHasLoot.entity';

@Module({ imports: [TypeOrmModule.forFeature([FarmSessionHasLoot])] })
export class FarmSessionHasLootModule {}
