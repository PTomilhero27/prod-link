import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(email: string, password: string) {
    // Encontre o cliente pelo e-mail
    const client = await this.prisma.client.findUnique({
      where: { email },
      include: { products: true }, // Inclua os produtos relacionados
    });

    if (!client || !(await bcrypt.compare(password, client.password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Retorne o cliente (sem a senha) e seus produtos
    const { password: _, ...result } = client;
    return result;
  }
}
