import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Base } from './base';

@Entity('uploadImg')
export class UploadImg extends Base  {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'text' })
  image!: string;

  @Column({ type: 'varchar', length: 255 })
  customer_code!: string;

  @Column({ type: 'timestamp' })
  measure_datetime!: Date;

  @Column({ type: 'enum', enum: ['WATER', 'GAS'] })
  measure_type!: 'WATER' | 'GAS';

  @Column({ type: 'boolean', default: false })
  has_confirmed!: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image_url?: string;
}
