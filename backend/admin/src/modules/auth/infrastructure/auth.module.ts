import { Module, Provider } from '@nestjs/common';
import { AuthController } from './controllers';
import { RegisterUseCase } from '../application';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './services/user.service';

const serviceProviders: Provider[] = [
  UserService,
];

const useCaseProviders: Provider[] = [
  {
    provide: RegisterUseCase,
    useFactory: (userService: UserService): RegisterUseCase => new RegisterUseCase(userService),
    inject: [UserService],
  },
];


@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [
    ...serviceProviders,
    ...useCaseProviders,
  ]
})
export class AuthModule {}
