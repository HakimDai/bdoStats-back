import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entity/zone.entity';
import { ZoneController } from './controller/zone.controller';
import { ZoneService } from './service/zone.service';

@Module({
  imports: [TypeOrmModule.forFeature([Zone])],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
