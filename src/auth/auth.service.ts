/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
// import { LoginUserInput } from './dto/login-user.input';
// import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcryptjs';
import { SignupUserInput } from './dto/signup-user..input';

//authService is used to validate if a user is in our db,
// if his login details are valid!

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      return new Error('Invalid username or password');
    }

    //if the user exists and password in the database is same with the password from the user
    const valid = await bcrypt.compare(password, user?.password);

    if (user && (valid || user?.password === password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user; //returning user details but the password
      return result;
    }
    return null;
  }

  async login(user: User) {
    // const user = await this.userService.findOne(loginUserInput.username);
    // const { ...result } = user;

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user,
    };
  }

  async signup(signupUserInput: SignupUserInput) {
    const user = await this.usersService.findOne(signupUserInput?.username);
    const { password, confirmPassword } = signupUserInput;

    if (user) {
      throw new Error('User already exists!');
    }

    if (password != confirmPassword) {
      throw new Error('Passwords do not match');
    }
    const securedPassword = await bcrypt.hash(signupUserInput?.password, 10);

    return this.usersService.create({
      ...signupUserInput,
      password: securedPassword,
    });
  }
}
