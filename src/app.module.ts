import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
// import cors from 'cors';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
      cors: {
        credentials: true,
        origin: true,
      },
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
