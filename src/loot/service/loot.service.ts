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

  async createOne(loot: LootDto): Promise<Loot> {
    const lootToSave = new Loot();
    lootToSave.name = loot.name;
    lootToSave.price = loot.price;
    lootToSave.zones = [];
    for (const lootZone of loot.zones) {
      let zone;
      await this.zoneService.findZone(lootZone.id).then((result) => {
        zone = result;
      });
      lootToSave.zones.push(zone);
    }
    return this.lootRepository.save(lootToSave);
  }

  findOne(id: number): Observable<Loot> {
    return from(this.lootRepository.findOne(id));
  }
}
