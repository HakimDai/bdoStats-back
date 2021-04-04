import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmSession } from '../entity/farm-session.entity';
import { from, Observable } from 'rxjs';
import { FarmSessionDto } from '../dto/farm-session.dto';

@Injectable()
export class FarmSessionService {
  constructor(
    @InjectRepository(FarmSession)
    private farmSessionRepository: Repository<FarmSession>,
  ) {}

  createOne(farmSession: FarmSessionDto): Observable<FarmSession> {
    const newSessionEntity = this.farmSessionRepository.create(farmSession);
    return from(this.farmSessionRepository.save(newSessionEntity));
  }
}
