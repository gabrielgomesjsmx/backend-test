import { Body, Controller, Get, Param, Post } from '@nestjs/common/decorators';
import { NoAuth } from 'src/auth/auth.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/')
  @NoAuth()
  async createUser(@Body() req) {
    const creation = await this.usersService.create(req);
    return creation;
  }

  @Get('/')
  @NoAuth()
  async getUser() {
    return await this.usersService.getAll();
  }

  @Post('/login')
  @NoAuth()
  async login(@Body() req) {
    return await this.usersService.login(req.email, req.password);
  }

  @Get('/:id')
  @NoAuth()
  async getUserById(@Param('id') id) {
    return (await this.usersService.getById(id)) || {};
  }
}
