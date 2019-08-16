import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { ITodoItem, ITodoState } from '../redux/models/models';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodoItem[]> {
    return this.http.get<ITodoItem[]>(`http://localhost:3000/posts`)
  
  }

  addTodo(data): Observable<ITodoItem> {
    var json = JSON.stringify(data);
    return this.http.post<ITodoItem>(`http://localhost:3000/posts`, json, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    })
  }

  changeWithTodoStatus(data): Observable<ITodoItem> {
    var json = JSON.stringify(data);
    return this.http.put<ITodoItem>(`http://localhost:3000/posts/${data.id}`, json, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    })
  }

  deleteTodo(data): Observable<ITodoItem> {
    
    return this.http.delete<ITodoItem>(`http://localhost:3000/posts/` + data.id)
  }
}
