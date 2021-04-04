import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loot } from './entity/loot.entity';
import { LootController } from './controller/loot.controller';
import { LootService } from './service/loot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Loot])],
  controllers: [LootController],
  providers: [LootService],
})
export class LootModule {}
