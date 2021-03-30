import { Test, TestingModule } from '@nestjs/testing';
import { FarmSessionController } from './farm-session.controller';
import { FarmSessionService } from '../service/farm-session.service';
import { FarmSession } from '../entity/farm-session.entity';
import { of } from 'rxjs';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmSessionDto } from '../dto/farm-session.dto';

describe('FarmSessionController', () => {
  let controller: FarmSessionController;
  let service: FarmSessionService;
  const entry: FarmSessionDto = {
    duration: 60,
    zone: {
      id: 1,
      name: 'sulfur',
      region: { id: 1, name: 'valencia' },
      lootTable: { id: 1, loots: [] },
    },
  };
  const result: FarmSession[] = [
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmSessionController],
      providers: [
        FarmSessionService,
        { provide: getRepositoryToken(FarmSession), useClass: Repository },
      ],
    }).compile();
    controller = module.get<FarmSessionController>(FarmSessionController);
    service = module.get<FarmSessionService>(FarmSessionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array with test', async () => {
      jest.spyOn(service, 'findAll').mockImplementation(() => of(result));
      controller.findAll().subscribe((value) => {
        expect(value).toBe(result);
      });
    });
  });

  describe('createOne', () => {
    it('should create one entry', async () => {
      jest.spyOn(service, 'createOne').mockImplementation(() => of(entry));
      controller.createOne(entry).subscribe((value) => {
        expect(value).toBe(entry);
      });
    });
  });

  describe('update', () => {
    it('should update one entry', async () => {
      jest.spyOn(service, 'update').mockImplementation(() => of(entry));
    })
  })
});
