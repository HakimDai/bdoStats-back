import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmSession } from '../entity/farm-session.entity';
import { from, Observable, of } from 'rxjs';
import { FarmSessionDto } from '../dto/farm-session.dto';
import { FarmSessionHasLootService } from '../../farm-session-has-loot/service/farm-session-has-loot.service';
import { ZoneService } from '../../zone/service/zone.service';
import { tap } from 'rxjs/operators';
import { FarmSessionHasLoot } from '../../farm-session-has-loot/entity/farm-session-has-loot.entity';
import { LootService } from '../../loot/service/loot.service';

@Injectable()
export class FarmSessionService {
  constructor(
    @InjectRepository(FarmSession)
    private farmSessionRepository: Repository<FarmSession>,
    private farmSessionHasLootService: FarmSessionHasLootService,
    private zoneService: ZoneService,
    private lootService: LootService,
  ) {}

  createOne(farmSession: FarmSessionDto): Observable<FarmSession> {
    const sessionToSave = new FarmSession();
    sessionToSave.duration = farmSession.duration;
    this.zoneService.findOne(farmSession.zoneId).subscribe((zone) => {
      sessionToSave.zone = zone;
      from(this.farmSessionRepository.save(sessionToSave)).pipe(
        tap((sessionSaved) => {
          farmSession.loots.forEach((loot) => {
            const farmSessionHasLootToSave = new FarmSessionHasLoot();
            farmSessionHasLootToSave.farmSession = sessionSaved;
            farmSessionHasLootToSave.quantity = loot.quantity;
            this.lootService.findOne(loot.id).subscribe((lootFound) => {
              farmSessionHasLootToSave.loot = lootFound;
              this.farmSessionHasLootService.createOne(
                farmSessionHasLootToSave,
              );
            });
          });
        }),
      );
    });
    return of(sessionToSave);
  }
}
