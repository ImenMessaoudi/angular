import { Component, OnInit } from '@angular/core';
import {UserService} from "../Service/User/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  constructor(private us: UserService, private ac: ActivatedRoute) { }
  id !: any;
  ngOnInit(): void {
    this.id=this.ac.snapshot. params['id'];
    this.us.getUsersByID(this.id).subscribe(
      (d)=>{
        console.log(d)
      }
    );
  }

}
