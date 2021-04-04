import { Body, Controller, Post } from '@nestjs/common';
import { FarmSessionHasLootService } from '../service/farm-session-has-loot.service';
import { FarmSessionHasLootDto } from '../dto/farm-session-has-loot.dto';
import { Observable } from 'rxjs';
import { FarmSessionHasLoot } from '../entity/farm-session-has-loot.entity';

@Controller('farm-session-has-loot')
export class FarmSessionHasLootController {
  constructor(private farmSessionHasLootService: FarmSessionHasLootService) {}

  @Post()
  createOne(
    @Body() farmSessionHasLoot: FarmSessionHasLootDto,
  ): Observable<FarmSessionHasLoot> {
    return this.farmSessionHasLootService.createOne(farmSessionHasLoot);
  }
}
