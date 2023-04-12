import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { JwtService } from '@nestjs/jwt';

@Controller('/auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}
}
