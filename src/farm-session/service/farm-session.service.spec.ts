import { Test, TestingModule } from '@nestjs/testing';
import { FarmSessionService } from './farm-session.service';
import { FarmSession } from '../entity/farm-session.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('FarmSessionService', () => {
  let service: FarmSessionService;
  let farmSessionRepositoryMock: Repository<FarmSession>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FarmSessionService,
        { provide: getRepositoryToken(FarmSession), useClass: Repository },
      ],
    }).compile();

    service = module.get<FarmSessionService>(FarmSessionService);
    farmSessionRepositoryMock = module.get<Repository<FarmSession>>(
      getRepositoryToken(FarmSession),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of farmSession', async () => {
      const results: FarmSession[] = [
        {
          id: 1,
          zone: {
            id: 1,
            name: 'sulfur',
            region: { id: 1, name: 'valencia' },
            lootTable: { id: 1, loots: [] },
          },
          duration: 60,
        },
      ];
      jest.spyOn(farmSessionRepositoryMock, 'find').mockReturnValue(
        new Promise((resolve) => {
          resolve(results);
        }),
      );
      await service.findAll().subscribe((result) => {
        expect(result).toBe(results);
      });
    });
  });

  describe('createOne', () => {
    it('should create an entry', (done) => {
      const farmSession: FarmSession = {
        id: 1,
        zone: {
          id: 1,
          name: 'sulfur',
          region: { id: 1, name: 'valencia' },
          lootTable: { id: 1, loots: [] },
        },
        duration: 60,
      };
      jest
        .spyOn(farmSessionRepositoryMock, 'save')
        .mockReturnValue(new Promise((resolve) => resolve(farmSession)));
      service.createOne(farmSession).subscribe((result) => {
        expect(result).toBe(farmSession);
        done();
      });
    });
  });
});
