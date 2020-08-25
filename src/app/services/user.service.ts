import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../model/user.model';
import { BASE_API } from './base.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${BASE_API}/api/auth`, user);
  }

  createOrUpdate(user: User) {
    if(user.id != null && user.id != ''){
      return this.http.put(`${BASE_API}/api/user`, user);
    } else {
      user.id = null;
      return this.http.post(`${BASE_API}/api/user`, user);
    }
  }

  findAll(page:number, count:number) {
    return this.http.get(`${BASE_API}/api/user/${page}/${count}`);
  }

  findById(id:string){
    return this.http.get(`${BASE_API}/api/user/${id}`);
  }

  delete(id:string){
    return this.http.delete(`${BASE_API}/api/user/${id}`);
  }
}
