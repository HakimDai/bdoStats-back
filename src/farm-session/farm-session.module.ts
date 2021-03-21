import { Module } from '@nestjs/common';
import { FarmSessionController } from './controller/farm-session.controller';
import { FarmSessionService } from 'src/farm-session/service/farm-session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSession } from './entity/farm-session.entity';

@Module({
  controllers: [FarmSessionController],
  providers: [FarmSessionService],
  imports: [TypeOrmModule.forFeature([FarmSession])],
})
export class FarmSessionModule {}
