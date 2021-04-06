import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from '../entity/zone.entity';
import { Repository } from 'typeorm';
import { ZoneDto } from '../dto/zone.dto';
import { from, Observable, of } from 'rxjs';
import { RegionService } from '../../region/service/region.service';
import { finalize, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(Zone) private zoneRepository: Repository<Zone>,
    private regionService: RegionService,
  ) {}

  createOne(zone: ZoneDto): Observable<Zone> {
    const zoneToSave = new Zone();
    zoneToSave.name = zone.name;
    return this.regionService.findOne(zone.regionId).pipe(
      tap((regionFound) => {
        zoneToSave.region = regionFound;
      }),
      switchMap(() => {
        return from(this.zoneRepository.save(zoneToSave));
      }),
    );
  }

  findOne(id): Observable<Zone> {
    return from(this.zoneRepository.findOne(id));
  }

  findZone(id: number) {
    return this.zoneRepository
      .createQueryBuilder('zone')
      .leftJoinAndSelect('zone.region', 'region')
      .where('zone.id = :id', { id: id })
      .getOne();
  }
}
