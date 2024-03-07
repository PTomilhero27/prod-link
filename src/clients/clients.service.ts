import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    const hashedPassword = await bcrypt.hash(createClientDto.password, 10);
    const clientData = { ...createClientDto, password: hashedPassword };

    return this.prisma.client.create({
      data: clientData,
    });
  }

  async findAll() {
    return this.prisma.client.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        document: true,
        phone: true,
        email: true,
        isActive: true,
        products: true,
      },
    });
  }

  async findOne(id: number) {
    const client = await this.prisma.client.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        document: true,
        phone: true,
        email: true,
        isActive: true,
        products: true,
      },
    });

    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }

    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });
  }

  async softDelete(id: number) {
    return this.prisma.client.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
