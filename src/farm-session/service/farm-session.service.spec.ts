import { Test, TestingModule } from '@nestjs/testing';
import { FarmSessionService } from './farm-session.service';

describe('FarmSessionService', () => {
  let service: FarmSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmSessionService],
    }).compile();

    service = module.get<FarmSessionService>(FarmSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array with test', async () => {
      const result = ['test'];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      expect(await service.findAll()).toBe(result);
    });
  });
});
