import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodosServiceService } from '../services/todos.service';
import { LoginService } from '../login/login.service';

import { Todo } from '../interfaces/todo';



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss'],
})

export class ListTodosComponent implements OnInit {
  public headElements = ['título', 'userid', 'completed', 'edit', 'borrar'];
  public elements: Todo[] = [];
  public opened: boolean = false;
  public idFilter: string = '';

  private elementSelected: Todo = {
    title: '',
    completed: false,
    userId: 0,
    id: 0,
  };

  constructor(
    private todoService: TodosServiceService,
    private _router: Router,
    private login: LoginService
    ) {}

  ngOnInit(): void {
    this.getTodoList();
  }

  private getTodoList() {
    this.todoService.getTodos().subscribe((x) => (this.elements = x));
  }

  public form(element: Todo) {
    console.log(this.login.user.userId );
    if (this.login.user.userId === element.userId) {
      this._router.navigate([`list/${element.id}`]);
    }

  }

  public openPopUp(element: Todo) {
    this.opened = true;
    this.elementSelected = element;
  }

  public onEvent(event: boolean) {
    if(event) {
      this.todoService.delete(this.elementSelected.id)
      this.elements = this.elements.filter((x: Todo) => x.id !== this.elementSelected.id)
    }
    this.opened = false;
  }

  public search() {
    this.todoService.getTodos(this.idFilter).subscribe((x) => (this.elements = x));
  }
}
