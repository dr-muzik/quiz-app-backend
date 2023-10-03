import { ObjectType, Field, Int } from '@nestjs/graphql';

//create the fields for the users

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

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

  //we don't want our password to show in our api
}
