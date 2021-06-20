import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Region } from '../entity/region.entity';
import { RegionDto } from '../dto/region.dto';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region) private regionRepository: Repository<Region>,
  ) {}

  createOne(region: RegionDto): Observable<Region> {
    const regionCreated = this.regionRepository.create(region);
    return from(this.regionRepository.save(regionCreated));
  }

  findOneRegion(id: number): Observable<Region> {
    return from(this.regionRepository.findOne(id));
  }

  findAll(): Observable<Region[]> {
    return from(this.regionRepository.find({ select: ['id', 'name'] }));
  }
}
