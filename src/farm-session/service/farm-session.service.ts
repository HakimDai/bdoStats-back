import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmSession } from '../entity/farm-session.entity';
import { FarmSessionDto } from '../dto/farm-session.dto';
import { FarmSessionHasLootService } from '../../farm-session-has-loot/service/farm-session-has-loot.service';
import { ZoneService } from '../../zone/service/zone.service';
import { LootService } from '../../loot/service/loot.service';
import { FarmSessionHasLootDto } from '../../farm-session-has-loot/dto/farm-session-has-loot.dto';

@Injectable()
export class FarmSessionService {
  constructor(
    @InjectRepository(FarmSession)
    private farmSessionRepository: Repository<FarmSession>,
    private farmSessionHasLootService: FarmSessionHasLootService,
    private zoneService: ZoneService,
    private lootService: LootService,
  ) {}

  async createOne(farmSession: FarmSessionDto) {
    const sessionToSave = new FarmSession();
    sessionToSave.duration = farmSession.duration;
    await this.zoneService.findZone(farmSession.zoneId).then((zone) => {
      sessionToSave.zone = zone;
    });
    const sessionSaved = await this.farmSessionRepository.save(sessionToSave);
    for (const loot of farmSession.loots) {
      const farmSessionHasLootToSave: FarmSessionHasLootDto = {
        quantity: loot.quantity,
        farmSession: sessionSaved,
        loot: undefined,
      };
      await this.lootService
        .findOne(loot.id)
        .toPromise()
        .then((foundLoot) => (farmSessionHasLootToSave.loot = foundLoot));
      await this.farmSessionHasLootService.createOne(farmSessionHasLootToSave);
    }
    return sessionSaved;
  }
}
