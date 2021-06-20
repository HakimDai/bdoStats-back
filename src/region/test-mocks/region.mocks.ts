import { RegionDto } from '../dto/region.dto';
import { Region } from '../entity/region.entity';

export const regionMock: RegionDto = {
  name: 'Valencia',
};

export const regionCreatedMock: Region = { id: 1, name: 'Valencia' };
