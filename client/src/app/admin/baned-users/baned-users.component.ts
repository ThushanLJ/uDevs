import { Component, OnInit } from '@angular/core';
import { UserDetails, AuthenticationService,userID } from '../../user/authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { AuthAdminService } from '../auth-admin.service'

@Component({
  selector: 'app-baned-users',
  templateUrl: './baned-users.component.html',
  styleUrls: ['./baned-users.component.css']
})

export class BanedUsersComponent implements OnInit {
  details
  banedDetails={
    banedEmail:''
  }
  
  constructor(private auth: AuthenticationService, private router: Router,private http: HttpClient, private authAdm: AuthAdminService) { }

  ngOnInit() {
    if(localStorage.getItem('usertoken'))
    {
      this.authAdm.allUsers().subscribe(
        users=>{
          this.details = users
        }
      )
      this.router.navigateByUrl('/admin/baned_users')



    }
    else{
      this.router.navigateByUrl('/')
  }



}
banedUser(banedEmail:string){
  this.banedDetails.banedEmail=banedEmail
  
  this.authAdm.banedUser(this.banedDetails).subscribe(
    () => {
       
    },
  )
 
}

}
