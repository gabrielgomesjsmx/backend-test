import { Sequelize } from 'sequelize';
import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'states' })
export class States extends Model {
  @PrimaryKey
  @Default(Sequelize.fn('gen_random_uuid'))
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.STRING })
  name: string;
}
