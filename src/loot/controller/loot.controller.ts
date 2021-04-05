import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LootService } from '../service/loot.service';
import { LootDto } from '../dto/loot.dto';
import { Observable } from 'rxjs';
import { Loot } from '../entity/loot.entity';

@Controller('loot')
export class LootController {
  constructor(private lootService: LootService) {}

  @Post()
  createOne(@Body() loot: LootDto): Observable<Loot> {
    return this.lootService.createOne(loot);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lootService.findOne(+id);
  }
}
