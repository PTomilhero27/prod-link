import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsOptional, IsBoolean } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ description: 'Full name of the client', example: 'Jane Doe' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Identification document number',
    example: '1234567890',
  })
  @IsNotEmpty()
  document: string;

  @ApiProperty({
    description: 'Phone number',
    required: false,
    example: '+1-202-555-0173',
  })
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Email address',
    required: false,
    example: 'jane.doe@example.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Whether the client is active', example: true })
  isActive: boolean = true;
}
