import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entity/zone.entity';
import { ZoneController } from './controller/zone.controller';
import { ZoneService } from './service/zone.service';
import { RegionModule } from '../region/region.module';

@Module({
  imports: [TypeOrmModule.forFeature([Zone]), RegionModule],
  controllers: [ZoneController],
  providers: [ZoneService],
  exports: [ZoneService],
})
export class ZoneModule {}
