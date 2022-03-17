import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { GetCurrentUser, GetCurrentUserId } from '../decorators';
import { AuthDto } from '../dto';
import { AtGuards, RtGuards } from '../guards';
import { Tokens } from '../types';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('local/signup')
  signUpLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signUpLocal(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('local/signin')
  signInLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signInLocal(dto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AtGuards)
  @Post('logout')
  logout(@GetCurrentUserId() userid: number) {
    return this.authService.logout(userid);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(RtGuards)
  @Post('refresh')
  refreshToken(
    @GetCurrentUserId() userid: number,
    @GetCurrentUser('refreshToken') refreshToken: string
  ) {
    return this.authService.refreshToken(userid, refreshToken);
  }
}
