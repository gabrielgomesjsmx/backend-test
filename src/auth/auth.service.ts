import { Injectable } from '@nestjs/common/decorators/core';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(username: string, password: string): Promise<string> {
    return await this.jwtService.sign({ username, password });
  }

  async checkForToken(token: string) {
    try {
      const verifiedToken = await this.jwtService.verifyAsync(token);
      return verifiedToken;
    } catch (e) {
      return { error: true };
    }
  }
}
