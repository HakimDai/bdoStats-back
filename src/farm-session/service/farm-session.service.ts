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
  findAll(): Observable<FarmSession[]> {
    return from(this.farmSessionRepository.find());
  }
  createOne(farmSession: FarmSessionDto): Observable<FarmSessionDto> {
    return from(this.farmSessionRepository.save(farmSession));
  }
}
