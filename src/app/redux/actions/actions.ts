import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ITodoItem } from './../models/models'


export const LOAD_TODO = '[TODO] Load_Todo';

export const LOAD_TODO_SUCCESS = '[TODO] Load_Todo_Success';

export const ADD_TODO = '[TODO] Add';

export const REMOVE_TODO = '[TODO] Remove';

export const COMPLETE_TODO = '[TODO] Complete';

export const TODOS_ERROR = '[TODO] Error';



export class LoadTodo implements Action {
  readonly type = LOAD_TODO

  constructor() { }
}

export class LoadTodoSuccess implements Action {
  readonly type = LOAD_TODO_SUCCESS

  constructor(public payload:Array<ITodoItem>) { }
}

export class AddTodo implements Action {
  readonly type = ADD_TODO

  constructor(public payload: ITodoItem){}
}



export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO

  constructor(public payload: ITodoItem){}
}




export class CompleteTodo implements Action {
  readonly type = COMPLETE_TODO

  constructor(public payload: ITodoItem){}
}



export class TodosError implements Action {
  readonly type = TODOS_ERROR

  constructor(public payload: any){}
}



export type Actions = LoadTodo| LoadTodoSuccess | AddTodo  | RemoveTodo | CompleteTodo  | TodosError
