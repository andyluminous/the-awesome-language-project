import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { RegisterUseCase } from '../../application';
import { createUserDto } from '../../domain/dto/createUser.dto';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(
    private readonly registerUseCase: RegisterUseCase
  ) {}

  @Post()
  logIn(): string {
    return 'success';
  }

  @Post('register')
  async register(
    @Body() userInfo: createUserDto,
  ) {
    return await this.registerUseCase.execute(userInfo);
  }
}
