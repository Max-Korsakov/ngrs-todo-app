

export interface ITodoItem {
    name: string,
    description: string,
    complete: boolean,
    created: any
}

export interface ITodoState {
  todos: Array<ITodoItem>,
  loading: boolean,
   error:  null
}
