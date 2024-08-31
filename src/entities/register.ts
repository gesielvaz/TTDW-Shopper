import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Base } from "./base";

@Entity()
export class Register extends Base{
    @PrimaryGeneratedColumn('uuid')
  id!: string;

    @Column()
  image!: string;

    @Column()
  customer_code!: string;

    @Column({ type: 'datetime' })
  measure_datetime!: Date;

    @Column()
  measure_type!: 'WATER' | 'GAS';

    @Column('decimal')
  reading_value!: number;

    @Column()
  guid!: string;
}
