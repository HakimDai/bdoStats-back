import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmSession } from '../entity/farm-session.entity';
import { from, Observable } from 'rxjs';
import { FarmSessionInterface } from '../interface/farm-session.interface';

@Injectable()
export class FarmSessionService {
  constructor(
    @InjectRepository(FarmSession)
    private farmSessionRepository: Repository<FarmSession>,
  ) {}
  findAll(): Observable<FarmSession[]> {
    return from(this.farmSessionRepository.find());
  }
  createOne(
    farmSession: FarmSessionInterface,
  ): Observable<FarmSessionInterface> {
    return from(this.farmSessionRepository.save(farmSession));
  }
}
