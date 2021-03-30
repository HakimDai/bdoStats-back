import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {InsertResult, Repository} from 'typeorm';
import { FarmSession } from '../entity/farm-session.entity';
import { from, Observable } from 'rxjs';
import { FarmSessionDto } from '../dto/farm-session.dto';

@Injectable()
export class FarmSessionService {
  constructor(
    @InjectRepository(FarmSession)
    private farmSessionRepository: Repository<FarmSession>,
  ) {}

  createOne(farmSession: FarmSessionDto): Observable<InsertResult> {
    return from(this.farmSessionRepository.insert(farmSession));
  }

  findAll(): Observable<FarmSession[]> {
    return from(this.farmSessionRepository.find());
  }

  findOne(id: number): Observable<FarmSession> {
    return from(this.farmSessionRepository.findOne(id));
  }

  update(farmSession: FarmSessionDto): Observable<FarmSession> {
    return from(this.farmSessionRepository.save(farmSession));
  }

  delete(id: number) {
    return from(this.farmSessionRepository.delete(id));
  }
}
