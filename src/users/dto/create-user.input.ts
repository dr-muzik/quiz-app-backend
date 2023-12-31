import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  // Fields we want to save in our database

  // @Field(() => Int)
  // id: number;

  @Field()
  username: string;

  @Field()
  password: string;

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
