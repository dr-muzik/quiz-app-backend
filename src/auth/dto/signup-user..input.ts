/* eslint-disable prettier/prettier */

import { Field, InputType } from '@nestjs/graphql';

@InputType() //it's an InputType because it's going to be an input for our login query
export class SignupUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  confirmPassword: string;

  @Field(() => [String])
  courses: [string, string, string];

  @Field()
  phone: string;

  @Field()
  ocupation: string;

  @Field()
  email: string;

  @Field()
  fullName: string;
}
