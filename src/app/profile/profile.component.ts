import { Component, OnInit } from '@angular/core';
import { ProfService } from '../prof.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  prof:any[];
  repos:any[];
  data:any=[];
  username:string
  constructor(private profService: ProfService ) {

}
 findProf(){
this.profService.updateProf(this.username);
this.profService.getProfInfo().subscribe(prof => {
  console.log(prof)
  this.prof = prof;
});

this.profService.getProfRepos().subscribe(repos => {
  console.log(repos);
  this.repos = repos;

});


  }
  ngOnInit(){
  }

}
