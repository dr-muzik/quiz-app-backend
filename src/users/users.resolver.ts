import { Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
// import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @Mutation(() => User)
  // createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.usersService.create(createUserInput);
  // }

  @Query(() => [User], { name: 'users' })
  @UseGuards(JWTAuthGuard) //middleware
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('username') username: string) {
    return this.usersService.findOne(username);
  }

  //   @Mutation(() => User)
  //   updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //     return this.usersService.update(updateUserInput.id, updateUserInput);
  //   }

  //   @Mutation(() => User)
  //   removeUser(@Args('id', { type: () => Int }) id: number) {
  //     return this.usersService.remove(id);
  //   }
}
