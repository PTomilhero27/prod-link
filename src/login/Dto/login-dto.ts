import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email address',
    required: true,
    example: 'jane.doe@example.com',
  })
  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Email must be a valid email address.' })
  email?: string;

  @ApiProperty({
    description: "The client's password",
    example: 'strongPassword123',
  })
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}
