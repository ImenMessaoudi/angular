import { Component, OnInit } from '@angular/core';
import {formatNumber} from "@angular/common";
import {ProductService} from "../Service/product/product.service";
import {CalculService} from "../Service/Calcul/calcul.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  priceMax:any;

  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
    {id: 4, title: "T-shirt 4", price: 88, quantity: 0, like: 0},
    {id: 5, title: "T-shirt 5", price: 11, quantity: 10, like: 0},
    {id: 6, title: "T-shirt 6", price: 14, quantity: 11, like: 0},
      ];

  constructor(private ps: ProductService, private cs : CalculService) { }
  alerteStock:any;
  ngOnInit(): void {


  }
  buyProduct(i:number){
    this.listProdcut[i].quantity--;
  }
  likeplus(i:number){
    this.listProdcut[i].like++;
  }

  testService(){
    this.ps.messageService();
  }

 getAlerteStock(){
    this.alerteStock= this.cs.getNumberOf(this.listProdcut, 'quantity', '0');
 }
}
