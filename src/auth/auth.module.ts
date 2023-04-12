import { Module } from '@nestjs/common/decorators/modules';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AUTH_SERVICE } from 'src/utils/constants';

@Module({
  imports: [
    JwtModule.register({
      secret: 'hello',
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [{ provide: AUTH_SERVICE, useClass: AuthService }],
  exports: [],
})
export class AuthModule {}
