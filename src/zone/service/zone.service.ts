import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from '../entity/zone.entity';
import { Repository } from 'typeorm';
import { ZoneDto } from '../dto/zone.dto';
import { from, Observable } from 'rxjs';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(Zone) private zoneRepository: Repository<Zone>,
  ) {}

  createOne(zone: ZoneDto): Observable<Zone> {
    const zoneToCreate = this.zoneRepository.create(zone);
    return from(this.zoneRepository.save(zoneToCreate));
  }
}
