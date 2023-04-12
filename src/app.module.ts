import { Module } from '@nestjs/common/decorators';
import { Reflector } from '@nestjs/core';
import { APP_GUARD } from '@nestjs/core/constants';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { AUTH_SERVICE, REFLECTOR } from './utils/constants';
import { PostsModule } from './posts/posts.module';
import { CitiesModule } from './cities/cities.module';
import { StatesModule } from './states/states.module';

@Module({
  imports: [UsersModule, PostsModule, CitiesModule, StatesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: REFLECTOR,
      useClass: Reflector,
    },
    {
      provide: AUTH_SERVICE,
      useClass: AuthService,
    },
  ],
})
export class AppModule {}
