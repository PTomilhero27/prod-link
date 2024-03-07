import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto): Promise<any> {
    // Verificar se já existe um cliente com o mesmo email
    const existingClient = await this.prisma.client.findUnique({
      where: {
        email: createClientDto.email,
      },
    });

    if (existingClient) {
      throw new ConflictException('Um cliente com este email já existe');
    }

    const hashedPassword = await bcrypt.hash(createClientDto.password, 10);
    const clientData = { ...createClientDto, password: hashedPassword };

    const { password, ...result } = await this.prisma.client.create({
      data: { ...clientData, isActive: true },
    });

    return result;
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
