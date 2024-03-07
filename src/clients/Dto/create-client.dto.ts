import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsBoolean,
  MinLength,
  IsString,
  Matches,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ description: 'Full name of the client', example: 'Jane Doe' })
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must be a string.' })
  name: string;

  @ApiProperty({
    description: 'Identification document number',
    example: '1234567890',
  })
  @IsNotEmpty({ message: 'Document is required.' })
  @Matches(/^\d+$/, { message: 'Document must contain only numbers.' })
  document: string;

  @ApiProperty({
    description: 'Phone number',
    required: true,
    example: '+55941780315',
  })
  @IsNotEmpty({ message: 'Phone is required.' })
  @IsString({ message: 'Phone must be a string.' })
  phone: string;

  @ApiProperty({
    description: 'Email address',
    required: true,
    example: 'jane.doe@example.com',
  })
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be a valid email address.' })
  email?: string;

  @ApiProperty({ description: 'Whether the client is active', example: true })
  @IsBoolean({ message: 'IsActive must be a boolean.' })
  isActive: boolean = true;

  @ApiProperty({
    description: "The client's password",
    example: 'strongPassword123',
  })
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(6, {
    message: 'Password is too short. It must be at least 6 characters long.',
  })
  password: string;
}
