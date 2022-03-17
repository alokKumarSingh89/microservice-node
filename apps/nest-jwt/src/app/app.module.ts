import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AtGuards } from './guards';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuards,
    },
  ],
})
export class AppModule {}
