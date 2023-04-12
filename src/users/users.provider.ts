import { USERS_REPOSITORY } from 'src/utils/constants';
import { Users } from './users.entity';

export const usersProvider = [{ provide: USERS_REPOSITORY, useValue: Users }];
