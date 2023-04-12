import { Module } from '@nestjs/common/decorators';
import { Sequelize } from 'sequelize-typescript';
import { Post, Users } from 'src/users/users.entity';
import { Cities } from 'src/cities/cities.entity';
import { States } from 'src/states/states.entity';
import { PostType } from 'src/posts/post-type.entity';

const databaseProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'teste123',
      database: 'postgres',
      define: {
        timestamps: false,
      },
      logging(sql, timing) {
        console.log(sql, timing);
      },
      models: [Users, Post, Cities, States, PostType],
    });
    return sequelize;
  },
};

@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}
