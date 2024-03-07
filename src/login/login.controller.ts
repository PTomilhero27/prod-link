import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './login.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './Dto/login-dto';

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
