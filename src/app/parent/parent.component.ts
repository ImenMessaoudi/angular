import { Component, OnInit } from '@angular/core';
import {UserService} from "../Service/User/user.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  users:any;
  constructor(private  us:UserService) { }

  ngOnInit(): void {
    this.us.getUsers().subscribe(
      (d)=>{
        this.users=d;
        console.log(this.users);
      }
    );
  }

}
