import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSessionHasLoot } from './entity/farm-session-has-loot.entity';
import { FarmSessionHasLootController } from './controller/farm-session-has-loot.controller';
import { FarmSessionHasLootService } from './service/farm-session-has-loot.service';

@Module({
  imports: [TypeOrmModule.forFeature([FarmSessionHasLoot])],
  controllers: [FarmSessionHasLootController],
  providers: [FarmSessionHasLootService],
})
export class FarmSessionHasLootModule {}
