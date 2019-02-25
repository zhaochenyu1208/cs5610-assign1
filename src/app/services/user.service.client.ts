import {User} from '../models/user.model';
import {Subject} from 'rxjs';


export class UserService {

  userChanged = new Subject<User[]>();
  users: User[] = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];


  createUser(user: User) {
    user._id = String(Math.random());
    this.users.push(user);
    this.userChanged.next(this.users.slice());
  }

  findUserById(userId: string) {
    for (let user of this.users) {
      if (user._id === userId) {
        return user;
      }
    }
  }


  findUserByUsername(username: string) {
    for (let user of this.users) {
      if (user.username === username) {
        return user;
      }
    }
  }

  findUserByCredentials(username: string, password: string) {
    for (let user of this.users) {
      if (user.username === username && user.password === password) {
        return user;
      }
    }
  }

  updateUser(userId: string, newUser: User) {
    for (let user of this.users) {
      if (user._id === userId) {
        user.username = newUser.username;
        user.password = newUser.password;
        user.firstName = newUser.firstName;
        user.lastName = newUser.lastName;
      }
    }
    this.userChanged.next(this.users.slice());
  }

  deleteUser(userId: string) {
    this.users.forEach((user, index) => {
      if (user._id === userId) {
        this.users.splice(index, 1);
      }
    });
    this.userChanged.next(this.users.slice());
  }
}
