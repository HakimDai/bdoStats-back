import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loot } from './entity/loot.entity';
import { LootController } from './controller/loot.controller';
import { LootService } from './service/loot.service';
import { ZoneModule } from '../zone/zone.module';

@Module({
  imports: [TypeOrmModule.forFeature([Loot]), ZoneModule],
  controllers: [LootController],
  providers: [LootService],
  exports: [LootService],
})
export class LootModule {}
