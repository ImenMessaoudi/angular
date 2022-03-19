import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ProductService} from "../Service/product/product.service";

@Component({
  selector: 'app-detaille-product',
  templateUrl: './detaille-product.component.html',
  styleUrls: ['./detaille-product.component.css']
})
export class DetailleProductComponent implements OnInit {
  id:any;
  constructor(private ac:ActivatedRoute, private ps:ProductService) { }
  //ActivatedRoute: injection des dependance
  ngOnInit(): void {

    //console.log(this.route.snapshot.params.id)
    //this.id=this.ac.snapshot.params.id;
    this.ac.params.subscribe(
      (d)=>{
        this.id=d['id'];
        console.log(d['id']);
        this.ps.messageService();

      }
    );
  }




}
