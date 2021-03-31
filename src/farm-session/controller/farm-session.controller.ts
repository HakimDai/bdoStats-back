import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FarmSessionService } from '../service/farm-session.service';
import { Observable } from 'rxjs';
import { FarmSession } from '../entity/farm-session.entity';
import { FarmSessionDto } from '../dto/farm-session.dto';
import { InsertResult } from 'typeorm';

@Controller('farm-session')
export class FarmSessionController {
  constructor(private farmSessionService: FarmSessionService) {}

  @Post()
  createOne(
    @Body()
    farmSession: FarmSessionDto,
  ): Observable<FarmSession> {
    return this.farmSessionService.createOne(farmSession);
  }

  @Get()
  findAll(): Observable<FarmSession[]> {
    return this.farmSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.farmSessionService.findOne(id);
  }

  @Put()
  update(@Body() farmSession: FarmSessionDto): Observable<FarmSession> {
    return this.farmSessionService.update(farmSession);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.farmSessionService.delete(id);
  }
}
