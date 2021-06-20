import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ZoneService } from '../service/zone.service';
import { Zone } from '../entity/zone.entity';
import { ZoneDto } from '../dto/zone.dto';
import { from, Observable } from 'rxjs';

@Controller('zones')
export class ZoneController {
  constructor(private zoneService: ZoneService) {}

  @Post()
  createOne(@Body() zone: ZoneDto): Observable<Zone> {
    return this.zoneService.createOne(zone);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return from(this.zoneService.findZone(+id));
  }
}
