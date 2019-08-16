import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoItem, ITodoState } from '../redux/models/models';
import { AppState } from '../redux/app.state';
import { Observable } from 'rxjs';
import * as TodoActions from '../redux/actions/actions'

@Component({
  selector: 'app-checked-todo',
  templateUrl: './checked-todo.component.html',
  styleUrls: ['./checked-todo.component.css']
})
export class CheckedTodoComponent implements OnInit {

  
  @Input() todos$: Observable<ITodoState>;
  @Output() onComplete = new EventEmitter<ITodoItem>();
  @Output() onDelete = new EventEmitter<ITodoItem>();

  checkedTodos: Array<ITodoItem>;

  constructor() {

  }

  ngOnInit() {
    this.todos$.subscribe(data => { this.checkedTodos = data.todos.filter(todo => todo.complete === true) })
   }

  completeTodo(todo: ITodoItem) {
    
    this.onComplete.emit(todo);
  }


  deleteTodo(todo: ITodoItem) {
   this.onDelete.emit(todo);
  }
 }
