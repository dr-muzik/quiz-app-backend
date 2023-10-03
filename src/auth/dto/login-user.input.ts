/* eslint-disable prettier/prettier */

import { Field, InputType } from '@nestjs/graphql';

@InputType() //it's an InputType because it's going to be an input for our login query
export class LoginUserInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
