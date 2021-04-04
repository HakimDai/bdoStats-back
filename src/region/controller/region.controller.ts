import { Body, Controller, Post } from '@nestjs/common';
import { RegionDto } from '../dto/region.dto';
import { Observable } from 'rxjs';
import { RegionService } from '../service/region.service';
import { Region } from '../entity/region.entity';

@Controller('region')
export class RegionController {
  constructor(private regionService: RegionService) {}

  @Post()
  createOne(@Body() region: RegionDto): Observable<Region> {
    return this.regionService.createOne(region);
  }
}
