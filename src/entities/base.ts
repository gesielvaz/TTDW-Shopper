import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Base extends BaseEntity {
  @Column({ default: true })
  status_active!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @Column({ default: 0 })
  created_by!: number;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ default: 0 })
  updated_by!: number;

  @DeleteDateColumn()
  deleted_at!: Date;

  @Column({ default: 0 })
  deleted_by!: number;
}
