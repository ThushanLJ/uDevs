import { Component, OnInit } from '@angular/core';
import { AuthCompetitonService, CompetitionObject } from '../auth-competiton.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent implements OnInit {

  credentials:CompetitionObject={
    id:0,
    competition_name:'',
    winning_price:''
  }

  constructor(private authCom: AuthCompetitonService, private router: Router) { }

  ngOnInit() {
  }

  AddCompetition(){
    console.log(this.credentials)
    this.authCom.addCompetition(this.credentials).subscribe(
      data=>{

      }
    )
  }

}
