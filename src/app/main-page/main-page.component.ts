import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoItem, ITodoState } from '../redux/models/models';
import { AppState } from '../redux/app.state';
import { Observable } from 'rxjs';
import * as TodoActions from '../redux/actions/actions'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  todos$: Observable<ITodoState>;
  todosState: ITodoState;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todos$ = this.store.select('todo');
    this.store.dispatch({ type: TodoActions.LOAD_TODO})
 }

  onAdd($event: any): void {
    this.store.dispatch({ type: TodoActions.ADD_TODO, payload: $event })
  }


  onComplete($event: any): void {  
    this.store.dispatch({ type: TodoActions.COMPLETE_TODO, payload: $event })
  }

  onDelete($event) {
    this.store.dispatch({ type: TodoActions.REMOVE_TODO, payload: $event })
  }

}
