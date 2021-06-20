import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegionDto } from '../dto/region.dto';
import { Observable } from 'rxjs';
import { RegionService } from '../service/region.service';
import { Region } from '../entity/region.entity';

@Controller('regions')
export class RegionController {
  constructor(private regionService: RegionService) {}

  @Post()
  createOne(@Body() region: RegionDto): Observable<Region> {
    return this.regionService.createOne(region);
  }

  @Get()
  findAll(): Observable<Region[]> {
    return this.regionService.findAll();
  }
}
