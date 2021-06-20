import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FarmSessionHasLoot } from '../entity/farm-session-has-loot.entity';
import { Repository } from 'typeorm';
import { FarmSessionHasLootDto } from '../dto/farm-session-has-loot.dto';
import { from, Observable } from 'rxjs';

@Injectable()
export class FarmSessionHasLootService {
  constructor(
    @InjectRepository(FarmSessionHasLoot)
    private farmSessionHasLootRepository: Repository<FarmSessionHasLoot>,
  ) {}

  createOne(
    farmSessionHasLoot: FarmSessionHasLootDto,
  ): Observable<FarmSessionHasLoot> {
    const farmSessionHasLootToCreate = this.farmSessionHasLootRepository.create(
      farmSessionHasLoot,
    );
    return from(
      this.farmSessionHasLootRepository.save(farmSessionHasLootToCreate),
    );
  }
}
