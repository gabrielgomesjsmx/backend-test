import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { PostType } from 'src/posts/post-type.entity';

@Table({ tableName: 'users' })
export class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column({ allowNull: false })
  email: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  password: string;

  @HasMany(() => Post)
  posts: Post[];
}

@Table({ tableName: 'posts' })
export class Post extends Model {
  @Column
  title: string;

  @ForeignKey(() => Users)
  @Column
  userId: number;

  @ForeignKey(() => PostType)
  @Column
  post_type_id: number;

  @BelongsTo(() => Users)
  user: Users;

  @BelongsTo(() => PostType)
  post_type: PostType;
}
