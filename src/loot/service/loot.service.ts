import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loot } from '../entity/loot.entity';
import { Repository } from 'typeorm';
import { LootDto } from '../dto/loot.dto';
import { concat, forkJoin, from, Observable, of } from 'rxjs';
import { ZoneService } from '../../zone/service/zone.service';
import { Zone } from '../../zone/entity/zone.entity';
import { finalize, mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class LootService {
  constructor(
    @InjectRepository(Loot) private lootRepository: Repository<Loot>,
    private zoneService: ZoneService,
  ) {}

  createOne(loot: LootDto): Observable<Loot> {
    const lootToSave = new Loot();
    let savedLoot = new Loot();
    lootToSave.name = loot.name;
    lootToSave.price = loot.price;
    const findZones: Observable<Zone>[] = [];
    loot.zones.forEach((zone) => {
      findZones.push(this.zoneService.findZone(zone.id));
    });
    forkJoin(findZones).pipe(
      tap((results: Zone[]) => {
        lootToSave.zones = results;
      }),
      tap(() => {
        from(this.lootRepository.save(lootToSave)).subscribe(
          (result) => (savedLoot = result),
        );
      }),
    );
    return of(savedLoot);
  }

  findOne(id: number) {
    return from(this.lootRepository.findOne(id));
  }
}
