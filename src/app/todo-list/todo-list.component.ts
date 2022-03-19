import { Component, OnInit } from '@angular/core';
import {CalculService} from "../Service/Calcul/calcul.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  count: any;
  listToDo=[
    {userId: 1, id: 1, title: 'task1', completed: "true"},
    {userId: 1, id: 2, title: 'task2', completed:"true"},
    {userId: 1, id: 3, title: 'task13', completed: "false"},
    {userId: 1, id: 3, title: 'task11', completed: "false"},

  ];

  constructor(private calculserv: CalculService) { }

  ngOnInit(): void {

  }

  getStat(){
    this.count = this.calculserv.getNumberOf(this.listToDo,'completed','true');
  }
}
