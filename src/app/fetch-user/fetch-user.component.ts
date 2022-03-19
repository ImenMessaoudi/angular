import { Component, OnInit } from '@angular/core';
import {UserService} from "../Service/User/user.service";

@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrls: ['./fetch-user.component.css']
})
export class FetchUserComponent implements OnInit {
  users!:any;
  constructor(private us : UserService) { }

  ngOnInit(): void {
  this.us.getUsers().subscribe(
    (data)=>{
      this.users=data;

    }
  )
  }


}
