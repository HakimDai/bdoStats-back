import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entity/zone.entity';

@Module({ imports: [TypeOrmModule.forFeature([Zone])] })
export class ZoneModule {}
