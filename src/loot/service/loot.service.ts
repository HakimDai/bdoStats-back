import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loot } from '../entity/loot.entity';
import { Repository } from 'typeorm';
import { LootDto } from '../dto/loot.dto';
import { from, Observable } from 'rxjs';

@Injectable()
export class LootService {
  constructor(
    @InjectRepository(Loot) private lootRepository: Repository<Loot>,
  ) {}

  createOne(loot: LootDto): Observable<Loot> {
    const lootToCreate = this.lootRepository.create(loot);
    return from(this.lootRepository.save(lootToCreate));
  }
}
