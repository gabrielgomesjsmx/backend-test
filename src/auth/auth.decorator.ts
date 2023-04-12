import { applyDecorators, SetMetadata } from '@nestjs/common';
import { NO_AUTH_ROUTE } from 'src/utils/constants';

export function NoAuth() {
  return applyDecorators(SetMetadata(NO_AUTH_ROUTE, true));
}
