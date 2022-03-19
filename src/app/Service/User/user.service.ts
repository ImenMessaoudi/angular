import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HTTP: HttpClient) { }

  getUsers(){
    return this.HTTP.get('http://localhost:3000/user');
  }
  getUsersByID(id: any){
    return this.HTTP.get('http://localhost:3000/user'+'id');
  }
}
