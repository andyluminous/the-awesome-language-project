import { Inject } from "@nestjs/common";
import { UserService } from "../../infrastructure/services/user.service";
import { User } from "../../infrastructure/schemas/user.schema";

export class GetUsersUseCase {
  constructor(
    @Inject()
    private readonly userService: UserService,
  ) {}

  async execute(email: string, password: string): Promise<User[]> {
    return this.userService.get();
  }
}