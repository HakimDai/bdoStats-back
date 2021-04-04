import { RegionDto } from '../dto/region.dto';
import { Region } from '../entity/region.entity';

export const regionMock: RegionDto = {
  name: 'Valencia',
};

export const regionCreated: Region = { id: 1, name: 'Valencia' };
