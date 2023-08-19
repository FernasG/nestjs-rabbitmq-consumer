import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, Users } from './users.interface';

@Injectable()
export class UsersService {
  private users: Users[];

  constructor() {
    this.users = new Array();
  }

  create(createUserDto: CreateUserDto) {
    const id = this.users.length + 1;
    const user = { id, ...createUserDto };
    this.users.push(user);
    return { message: 'User created.', user };
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id == id);
    return { user };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find(user => user.id == id);

    const { username, birthdate } = updateUserDto;

    if (username) user.username = username;
    if (birthdate) user.birthdate = birthdate;

    return { message: 'User updated.', user };
  }

  remove(id: number) {
    this.users = this.users.filter(user => user.id != id);
    return { message: 'User removed.' };
  }
}
