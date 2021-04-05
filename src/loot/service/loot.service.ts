import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loot } from '../entity/loot.entity';
import { Repository } from 'typeorm';
import { LootDto } from '../dto/loot.dto';
import { from, Observable } from 'rxjs';
import { ZoneService } from '../../zone/service/zone.service';

@Injectable()
export class LootService {
  constructor(
    @InjectRepository(Loot) private lootRepository: Repository<Loot>,
    private zoneService: ZoneService,
  ) {}

  createOne(loot: LootDto): Observable<Loot> {
    const lootToSave = new Loot();
    lootToSave.name = loot.name;
    lootToSave.price = loot.price;
    lootToSave.zones = [];
    loot.zones.forEach((zone) => {
      this.zoneService.findOne(zone.id).subscribe((zoneFound) => {
        lootToSave.zones.push(zoneFound);
      });
    });
    return from(this.lootRepository.save(lootToSave));
  }

  findOne(id: number) {
    return from(this.lootRepository.findOne(id));
  }
}
