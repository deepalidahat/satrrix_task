import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const initialRegisterUsers = [
  { id:1, name: 'Mark', email:'markotto@gmail.com', phone:'8764545327' ,city:'nagpur' },
  { id:2, name: 'Jacob', email: 'jacob@gmail.com',phone:'8764545327',city:'nashik' },
  { id:3, name: 'John',email: 'johndoe@gmail.com', phone:'8764545327',city:'pune' },
  { id:4,name: 'Emily', email: 'emilystone@gmail.com',phone:'8764545327',city:'mumbai' },
  { id:5, name: 'Sophia',  email: 'sjohnson@gmail.com',phone:'8764545327',city:'gondia' },
  { id:6, name: 'Michael',  email: 'mbrown@gmail.com', phone:'8764545327',city:'kalhpur' },
  { id:7, name: 'David',  email: 'dclark@gmail.com',phone:'8764545327',city:'satara' },
  { id:8, name: 'Emma',  email: 'emmaw@gmail.com',phone:'8764545327',city:'sangli' },
  { id:9, name: 'Daniel', email: 'dlee@gmail.com',phone:'8764545327',city:'ratnagiri' },
  { id:10, name: 'Olivia',  email: 'oliviam@gmail.com',phone:'8764545327',city:'thane'},
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
