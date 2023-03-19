import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserUrl: string = "https://gorest.co.in/public/v2/users/";

  users: User[]= [];
  users$: BehaviorSubject<User[]>= new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {
    
  }


  getAllUsers(){
    return this.http.get<User[]>(this.UserUrl).subscribe(res =>{
      this.users= res;
      this.users$.next(this.users);
      console.log('this.users', this.users);
    });
  }

  getUserById(id: number){
    return this.http.get(this.UserUrl+id);
    
  }
  
  getPostsByUser(userId: number){
    return this.http.get<Post[]>(this.UserUrl+userId+'/posts');
  }

  addUser(User: User){
    return this.http.post<User>(this.UserUrl, User);
  }

  editUser(User: User){
    return this.http.put(this.UserUrl+User.id, User);
  }
  
  deleteUser(id: number){
    return this.http.delete(this.UserUrl+id);
  }

}
