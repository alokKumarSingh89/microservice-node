import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthDto } from '../dto';
import { PrismaService } from '../prisma/prisma.service';
import { Tokens } from '../types';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUpLocal(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);
    const newUser = this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
  }

  signInLocal() {}

  logout() {}

  refreshToken() {}

  hashData(data: string): string {
    return bcrypt.hash(data, 10);
  }
}
