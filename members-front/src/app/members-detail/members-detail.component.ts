import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(
     private route: ActivatedRoute,
     private api:ApiService, 
     private router: Router,
     private appComponent: AppComponent) { }
  selected_member = {id:'',name:'', surname:'',phone:'',photo:''};
  selected_id;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
    })
   
  }

  loadMember(id){

    this.api.getMember(id).subscribe(
      data => {
        
        this.selected_member = data;
      },
      error => {
        console.log("error");
      }      
    );
  }
  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log("error");
      }      
    );

  };
  newMember(){
    this.router.navigate(['new-member']);

  }
  delete(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((e , i) =>{
          if(e.id == this.selected_id)
            index = i; 
        });

        this.appComponent.members.splice(index,1);
      },
      error => {
        console.log("error");
      }      
    );
    
  }
}
