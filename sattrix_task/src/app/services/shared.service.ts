import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const initialRegisterUsers = [
  { id:1, first_name: 'Mark', last_name: 'Otto', username: 'markotto@gmail.com', password:'abcd@1441' },
  { id:2, first_name: 'Jacob', last_name: 'Thornton', username: 'jacob@gmail.com', password:'abcd@1441' },
  { id:3, first_name: 'John', last_name: 'Doe', username: 'johndoe@gmail.com', password:'abcd@1441' },
  { id:4, first_name: 'Emily', last_name: 'Stone', username: 'emilystone@gmail.com', password:'abcd@1441' },
  { id:5, first_name: 'Sophia', last_name: 'Johnson', username: 'sjohnson@gmail.com', password:'abcd@1441' },
  { id:6, first_name: 'Michael', last_name: 'Brown', username: 'mbrown@gmail.com', password:'abcd@1441' },
  { id:7, first_name: 'David', last_name: 'Clark', username: 'dclark@gmail.com', password:'abcd@1441' },
  { id:8, first_name: 'Emma', last_name: 'Watson', username: 'emmaw@gmail.com', password:'abcd@1441' },
  { id:9, first_name: 'Daniel', last_name: 'Lee', username: 'dlee@gmail.com', password:'abcd@1441' },
  { id:10, first_name: 'Olivia', last_name: 'Martinez', username: 'oliviam@gmail.com', password:'abcd@1441' },
];
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


   private usersSubject = new BehaviorSubject(initialRegisterUsers);
  users$ = this.usersSubject.asObservable();

  getUsers() {
    return this.usersSubject.getValue();
  }

  updateUser(updatedUser: any) {
    const users = this.getUsers().map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.usersSubject.next(users);
  }

  deleteUser(id: number) {
    const users = this.getUsers().filter(user => user.id !== id);
    this.usersSubject.next(users);
  }

  addUser(newUser: any) {
    const users = [...this.getUsers(), newUser];
    this.usersSubject.next(users);
  }

  getUserById(id: number) {
    return this.getUsers().find(user => user.id === id);
  }
}
