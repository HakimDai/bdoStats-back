import { ZoneDto } from '../dto/zone.dto';
import { Zone } from '../entity/zone.entity';

export const zoneToCreate: ZoneDto = {
  name: 'sulfur',
  regionId: 1,
};

export const zoneCreated: Zone = {
  id: 1,
  name: 'sulfur',
  region: { id: 1, name: 'Valencia' },
};
