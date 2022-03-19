import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from "@angular/router";
import { DetailleProductComponent } from './detaille-product/detaille-product.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoListComponent } from './todo-list/todo-list.component';
import { FetchUserComponent } from './fetch-user/fetch-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    NotFoundComponent,
    DetailleProductComponent,
    LoginComponent,
    TodoListComponent,
    FetchUserComponent,
    DetailUserComponent,
    ChildComponent,
    ParentComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
