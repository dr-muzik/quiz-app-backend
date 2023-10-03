/* eslint-disable prettier/prettier */

import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { LoginResponse } from './dto/login-response';
import { GqlAuthGuard } from './gql-auth.guard';
import { UseGuards } from '@nestjs/common';
// import { User } from 'src/users/entities/user.entity';
// import { CreateUserInput } from 'src/users/dto/create-user.input';
import { SignupUserInput } from './dto/signup-user..input';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  signup(@Args('signupUserInput') signupUserInput: SignupUserInput) {
    return this.authService.signup(signupUserInput);
  }
}
