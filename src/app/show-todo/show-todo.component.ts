import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { ITodoItem, ITodoState } from '../redux/models/models';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {
  @Input() todos$: Observable<ITodoState>;
  @Output() onComplete = new EventEmitter<ITodoItem>();
  @Output() onDelete = new EventEmitter<ITodoItem>();

  unCheckedTodos: any;
  
  constructor() {
   
  }

  ngOnInit() {
    this.todos$.subscribe(data => { this.unCheckedTodos = data.todos.filter(todo => todo.complete === false) })
   
  }
 

  completeTodo(todo: ITodoItem) {
    var that = this;
    setTimeout(function () { that.onComplete.emit(todo) }, 500);
    }


deleteTodo(todo: ITodoItem) {
    this.onDelete.emit(todo);
  }

}
