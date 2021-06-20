import { Body, Controller, Post } from '@nestjs/common';
import { FarmSessionService } from '../service/farm-session.service';
import { Observable } from 'rxjs';
import { FarmSession } from '../entity/farm-session.entity';
import { FarmSessionDto } from '../dto/farm-session.dto';

@Controller('farm-sessions')
export class FarmSessionController {
  constructor(private farmSessionService: FarmSessionService) {}

  @Post()
  createOne(
    @Body()
    farmSession: FarmSessionDto,
  ): Observable<FarmSession> {
    return this.farmSessionService.createOne(farmSession);
  }
}
