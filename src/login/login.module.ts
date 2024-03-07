import { Module } from '@nestjs/common';
import { AuthService } from './login.service';
import { AuthController } from './login.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class LoginModule {}
