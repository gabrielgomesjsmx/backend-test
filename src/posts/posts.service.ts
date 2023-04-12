import { UnprocessableEntityException } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Sequelize } from 'sequelize';
import { Post } from 'src/users/users.entity';
import {
  POSTS_REPOSITORY,
  SEQUELIZE_CONSTRAINT_ERROR,
} from 'src/utils/constants';

@Injectable()
export class PostsService {
  constructor(@Inject(POSTS_REPOSITORY) private postsRepository: typeof Post) {}

  async getAllPosts() {
    return await this.postsRepository.findAll();
  }

  async addPost(userId: number, post_type: number) {
    try {
      const creation = await this.postsRepository.create({
        title: 'a',
        userId: userId,
        post_type_id: post_type,
      });
      return creation;
    } catch (e) {
      if (e.name === SEQUELIZE_CONSTRAINT_ERROR)
        throw new NotFoundException('Não encontrado');
      throw new UnprocessableEntityException('Erro ao adicionar post');
    }
  }
}
