import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://docker:123456@localhost:4321/nest-jwt?schema=public',
        },
      },
    });
  }

  onModuleInit() {
    this.$connect();
  }

  onModuleDestroy() {
    this.$disconnect();
  }
}
