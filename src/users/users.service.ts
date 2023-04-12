import { Inject, Injectable } from '@nestjs/common/decorators';
import { Post, Users } from './users.entity';
import { compareSha256, convertToSha256Hex } from 'src/utils/functions';
import { AuthService } from 'src/auth/auth.service';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';
import { PostType } from 'src/posts/post-type.entity';
import { USERS_REPOSITORY } from 'src/utils/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY) private usersRepo: typeof Users,
    private authService: AuthService,
  ) {}

  async create(user) {
    const hashedPw = convertToSha256Hex(user.password);
    const usercreated = await this.usersRepo.create({
      name: user.name,
      email: user.email,
      password: hashedPw,
    });

    return usercreated;
  }

  async login(email: string, password: string) {
    const foundUser = await this.usersRepo.findOne({ where: { email } });
    if (!foundUser) {
      throw new UnauthorizedException('Login inválido');
    }
    const isLoginValid = compareSha256(password, foundUser.password);
    if (!isLoginValid) {
      throw new UnauthorizedException('Login inválido');
    }
    return this.authService.generateToken(email, password);
  }

  async getById(user) {
    return await this.usersRepo.findByPk(user, {
      include: [
        {
          model: Post,
          include: [{ model: PostType }],
        },
      ],
    });
  }

  async getAll() {
    const user = await this.usersRepo.findAll({
      include: [{ model: Post, include: [{ model: PostType }] }],
      order: [['id', 'ASC']],
    });
    return user;
  }
}
