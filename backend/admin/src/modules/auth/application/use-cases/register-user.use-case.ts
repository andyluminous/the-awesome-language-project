import { Inject } from "@nestjs/common";
import { UserService } from "../../infrastructure/services/user.service";
import { User } from "../../infrastructure/schemas/user.schema";

export class RegisterUseCase {
  constructor(
    @Inject()
    private readonly userService: UserService,
  ) {}

  async execute(createUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }
}