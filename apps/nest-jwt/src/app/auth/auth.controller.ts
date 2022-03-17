import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from '../dto';
import { Tokens } from '../types';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/signup')
  signUpLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signUpLocal(dto);
  }

  @Post('local/signin')
  signInLocal() {
    return this.authService.signInLocal();
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }

  @Post('refresh')
  refreshToken() {
    return this.authService.refreshToken();
  }
}
