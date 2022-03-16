import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuards } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  protectedUrl(@Request() req): any {
    return req.user;
  }

  @UseGuards(JwtAuthGuards)
  @Get('token')
  protectedbyToken(@Request() req): any {
    return req.user;
  }
}
