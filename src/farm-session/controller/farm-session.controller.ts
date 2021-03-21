import { Body, Controller, Get, Post } from '@nestjs/common';
import { FarmSessionService } from '../service/farm-session.service';
import { Observable } from 'rxjs';
import { FarmSession } from '../entity/farm-session.entity';
import { FarmSessionInterface } from '../interface/farm-session.interface';

@Controller('farm-session')
export class FarmSessionController {
  constructor(private farmSessionService: FarmSessionService) {}
  @Get()
  findAll(): Observable<FarmSession[]> {
    return this.farmSessionService.findAll();
  }

  @Post()
  createOne(
    @Body()
    farmSession: FarmSessionInterface,
  ): Observable<FarmSessionInterface> {
    return this.farmSessionService.createOne(farmSession);
  }
}
