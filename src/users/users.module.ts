import { Module } from '@nestjs/common/decorators';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProvider } from './users.provider';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UsersController],
  providers: [AuthService, UsersService, ...usersProvider],
})
export class UsersModule {}
