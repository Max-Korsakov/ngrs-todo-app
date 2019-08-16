import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store, Action  } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import * as TodoActions from '../redux/actions/actions'
import { HttpService} from '../services/httpservice';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private httpService: HttpService) { }
  
  @Effect()
  loadTodos$: any = this.actions$.pipe(ofType(TodoActions.LOAD_TODO),
      switchMap(() => {
        return this.httpService
        .getTodos()
        .pipe(
          map(todos => new TodoActions.LoadTodoSuccess(todos)),
          catchError(error => of(new TodoActions.TodosError(error)))
        );
    })
  );

  @Effect()
  addTodos$:any = this.actions$.pipe(ofType(TodoActions.ADD_TODO),
      switchMap((action: TodoActions.AddTodo) => {
      return this.httpService
        .addTodo(action.payload)
        .pipe(
        map(() => new TodoActions.LoadTodo()),
        catchError(error => of(new TodoActions.LoadTodo))
        );
    })
  );

  @Effect()
  anyChangeWithTodoStatus$: any = this.actions$.pipe(ofType(TodoActions.COMPLETE_TODO),
      switchMap((action: TodoActions.CompleteTodo) => {
      return this.httpService
        .changeWithTodoStatus(action.payload)
        .pipe(
          map(() => new TodoActions.LoadTodo()),
          catchError(error => of(new TodoActions.LoadTodo))
        );
    })
  );



  @Effect()
  deleteTodo$: any = this.actions$.pipe(ofType(TodoActions.REMOVE_TODO),
      switchMap((action: TodoActions.RemoveTodo) => {
      return this.httpService
        .deleteTodo(action.payload)
        .pipe(
           map(() => new TodoActions.LoadTodo()),
          catchError(error => of(new TodoActions.LoadTodo))
        );
    })
  );

}
