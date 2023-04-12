import { Body, Controller, Get, Post } from '@nestjs/common/decorators';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  async getPosts() {
    return await this.postsService.getAllPosts();
  }

  @Post()
  async addPost(@Body() createPost) {
    return await this.postsService.addPost(
      createPost.userId,
      createPost.post_type_id,
    );
  }
}
