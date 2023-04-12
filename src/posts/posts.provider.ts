import { POSTS_REPOSITORY } from 'src/utils/constants';
import { Post } from '../users/users.entity';

export const postsProvider = [{ provide: POSTS_REPOSITORY, useValue: Post }];
