import { FarmSessionDto } from '../dto/farm-session.dto';
import { FarmSession } from '../entity/farm-session.entity';

export const farmSessionToCreate: FarmSessionDto = {
  duration: 60,
  zoneId: 1,
  loots: [{ id: 1, quantity: 6542 }],
};

export const farmSessionCreated: FarmSession = {
  id: 1,
  duration: 60,
  zone: { id: 1, name: 'Sulfur', region: { id: 1, name: 'Valencia' } },
};
