import { Inject, UnprocessableEntityException } from '@nestjs/common';
import { CanActivate } from '@nestjs/common/interfaces/features/can-activate.interface';
import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';
import { Reflector } from '@nestjs/core/services/reflector.service';
import { AUTH_SERVICE, NO_AUTH_ROUTE, REFLECTOR } from 'src/utils/constants';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate {
  constructor(
    @Inject(REFLECTOR) private reflector: Reflector,
    @Inject(AUTH_SERVICE) private authService: AuthService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isRouteNotAuthenticated = this.reflector.get<string[]>(
      NO_AUTH_ROUTE,
      context.getHandler(),
    );

    if (isRouteNotAuthenticated) return true;

    const request = context.switchToHttp().getRequest<Request>();

    const auth = request.headers['authorization'];

    if (!auth || !auth.startsWith('Bearer'))
      throw new UnprocessableEntityException('Token não fornecido');

    const isTokenValid = await this.authService.checkForToken(
      auth.replace('Bearer', '').trim(),
    );

    if (isTokenValid.error)
      throw new UnprocessableEntityException('Token inválido');

    return true;
  }
}
