import { Module } from '@nestjs/common/decorators';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { postsProvider } from './posts.provider';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProvider],
})
export class PostsModule {}
