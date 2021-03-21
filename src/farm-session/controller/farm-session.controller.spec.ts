import { Test, TestingModule } from '@nestjs/testing';
import { FarmSessionController } from './farm-session.controller';
import { FarmSessionService } from '../service/farm-session.service';

describe('FarmSessionController', () => {
  let controller: FarmSessionController;
  let service: FarmSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmSessionController],
      providers: [FarmSessionService],
    }).compile();

    controller = module.get<FarmSessionController>(FarmSessionController);
    service = module.get<FarmSessionService>(FarmSessionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array with test', async () => {
      const result = ['test'];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });
});
