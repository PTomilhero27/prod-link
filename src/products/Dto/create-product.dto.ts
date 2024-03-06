import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsBoolean, IsInt } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Gaming Laptop',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Whether the product is active', example: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'The ID of the associated client', example: 1 })
  @IsInt()
  clientId: number;
}
