export class FarmSessionDto {
  duration: number;
  zoneId: number;
  loots: { id: number; quantity: number }[];
}
