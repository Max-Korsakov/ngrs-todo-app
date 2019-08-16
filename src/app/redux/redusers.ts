
import { Action } from '@ngrx/store'
import { ITodoItem, ITodoState } from './models/models'
import * as TodoActions from './actions/actions'


const initialState: ITodoState = {
  todos: [{
    name: "data from store 1",
    description: "aaa",
    complete: false,
    created: '2019-08-12',
 },
    {
      name: "data from store 2",
      description: "rrrrr",
      complete: true,
      created: '2019-08-12'
    }],
  loading: false,
   error:  null
}


export function reducer(state: ITodoState = initialState, action: TodoActions.Actions): ITodoState {
  switch (action.type) {

    case TodoActions.LOAD_TODO:

      return {
        ...state,
        loading: true,
        error: null
      };

    case TodoActions.LOAD_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null
      };
   
    case TodoActions.ADD_TODO:
      const newTodo = {
        name: action.payload.name,
        description: action.payload.description,
        complete: false,
        created: new Date
      }

      return {
        ...state,
        todos: [...state.todos, newTodo],
        loading: false,
        error: null
      };

    case TodoActions.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo !== action.payload)],
        loading: false,
        error: null
      };

    case TodoActions.COMPLETE_TODO:
      action.payload.complete = !action.payload.complete
      return {
        ...state,
        todos: [...state.todos],
        loading: false,
        error: null
      };
    default:
      return state;

  }
}
