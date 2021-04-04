import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Region } from '../../region/entity/region.entity';

@Entity()
export class Zone {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', width: 60, unique: true })
  name: string;

  @ManyToOne(() => Region)
  region: Region;
}
