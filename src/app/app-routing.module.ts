import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from "./add-product/add-product.component";
import {ProductsComponent} from "./products/products.component";
import {DetailleProductComponent} from "./detaille-product/detaille-product.component";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FetchUserComponent} from "./fetch-user/fetch-user.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";

const ROUTES:Routes =[
  {path:'products',component: ProductsComponent},
  {path: 'productForm',component:AddProductComponent },
  {path:'products/:id',component:DetailleProductComponent},
  {path:'login',component:LoginComponent },
  {path:'user',component: FetchUserComponent},
  {path:'userDetail/:id',component: DetailUserComponent},





  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
