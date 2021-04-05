import { Module } from '@nestjs/common';
import { FarmSessionController } from './controller/farm-session.controller';
import { FarmSessionService } from 'src/farm-session/service/farm-session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSession } from './entity/farm-session.entity';
import { FarmSessionHasLootModule } from '../farm-session-has-loot/farm-session-has-loot.module';
import { ZoneModule } from '../zone/zone.module';
import { LootModule } from '../loot/loot.module';

@Module({
  controllers: [FarmSessionController],
  providers: [FarmSessionService],
  imports: [
    TypeOrmModule.forFeature([FarmSession]),
    FarmSessionHasLootModule,
    ZoneModule,
    LootModule,
  ],
})
export class FarmSessionModule {}
