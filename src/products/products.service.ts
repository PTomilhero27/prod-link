import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    if (typeof createProductDto.clientId !== 'number') {
      throw new Error('clientId must be a number');
    }

    await this.prisma.product.create({
      data: {
        name: createProductDto.name,
        isActive: createProductDto.isActive,
        client: {
          connect: { id: createProductDto.clientId },
        },
      },
    });

    const client = await this.prisma.client.findUnique({
      where: { id: createProductDto.clientId },
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
      throw new NotFoundException(
        `Client with ID ${createProductDto.clientId} not found`,
      );
    }

    return client;
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product: UpdateProductDto = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });

    const client = await this.prisma.client.findUnique({
      where: { id: product.clientId },
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
      throw new NotFoundException(
        `Client with ID ${product.clientId} not found`,
      );
    }

    return client;
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
