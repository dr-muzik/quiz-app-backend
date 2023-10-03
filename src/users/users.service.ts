import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
// import { UpdateUserInput } from './dto/update-user.input';

//CRUD operations
@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'drmuzik',
      password: 'not-secure',
      phone: '08163423203',
      courses: ['Cos', 'C.R.S', 'HIS'],
    },
    {
      id: 2,
      username: 'wisdom',
      password: 'not-secure',
      phone: '0906345823',
      courses: ['Phy', 'Bio', 'Chem'],
    },
  ];

  //CREATE
  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };
    this.users.push(user);

    console.log(this.users);
    return user;
  }

  //READ
  //read all
  findAll() {
    return this.users;
  }

  //read one
  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
