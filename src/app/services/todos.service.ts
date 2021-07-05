import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  constructor(private http: HttpClient) {}

  private _url = 'https://jsonplaceholder.typicode.com/posts';

  public getTodos(id?: string): Observable<Todo[]> {
    console.log(id);
    let params = new HttpParams();
    if (id) {
      params = params.set('userId', id);
    }
    console.log(params);
    return this.http.get<Todo[]>(this._url, { params: params });
  }

  public getTodoById(id: number) : Observable<Todo> {
    return this.http.get<Todo>(`${this._url}/${id}`);
  }

  public postTodos(todoItem: Todo) {
    fetch(this._url, {
      method: 'POST',
      body: JSON.stringify({
        todoItem
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }


  public delete(id: number) {
    return this.http.delete<Todo>(`${this._url}/${id}`);
  }

}
