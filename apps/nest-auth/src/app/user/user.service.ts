import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};
@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'alok kumar singh',
      username: 'alok',
      password: 'alok',
    },
    {
      id: 2,
      name: 'Monika Kumar Singh',
      username: 'monika',
      password: 'password',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
