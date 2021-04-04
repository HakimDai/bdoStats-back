import { ZoneDto } from '../dto/zone.dto';
import { Zone } from '../entity/zone.entity';

export const zoneToCreate: ZoneDto = {
  name: 'sulfur',
  region: { id: 1, name: 'Valencia' },
};

export const zoneCreated: Zone = {
  id: 1,
  name: 'sulfur',
  region: { id: 1, name: 'Valencia' },
};
