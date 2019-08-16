import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { ITodoItem, ITodoState } from '../redux/models/models';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodoItem[]> {
    return this.http
      .get<ITodoItem[]>(`http://localhost:3000/posts`)
  
  }

}
