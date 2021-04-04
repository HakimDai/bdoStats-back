import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entity/region.entity';
import { RegionController } from './controller/region.controller';
import { RegionService } from './service/region.service';

@Module({
  controllers: [RegionController],
  providers: [RegionService],
  imports: [TypeOrmModule.forFeature([Region])],
})
export class RegionModule {}
