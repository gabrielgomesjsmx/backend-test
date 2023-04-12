import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Post } from 'src/users/users.entity';

@Table({ tableName: 'post_types' })
export class PostType extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ allowNull: false })
  id: number;

  @Column({ allowNull: false })
  type: string;

  @ForeignKey(() => Post)
  post: Post;
}
