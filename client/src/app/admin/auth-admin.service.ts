import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AuthenticationService } from '../user/authentication.service';

@Injectable()

export class AuthAdminService {

  constructor(private http: HttpClient, private router: Router) { }

  //send data to the backend

  public allUsers(){
    return this.http.get(`/users/admin/getusers`)
  }
  
   public countOfDev(){
     return this.http.get(`/users/admin/countOfDev`)
   }

   public countOfCli(){
    return this.http.get(`/users/admin/countOfCli`)
  }
  public banedUser(banedEmail){
    return this.http.get(`/users/admin/banedUser`,banedEmail)
  }
}
