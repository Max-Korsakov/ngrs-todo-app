import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ITodoItem, ITodoState } from '../redux/models/models';
import * as TodoActions from '../redux/actions/actions'


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  @Output() onAdd = new EventEmitter<ITodoItem>();

  public todoForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<ITodoState>) {
    this.initTodoForm();}

  ngOnInit() {
  }

  initTodoForm() {
    return this.todoForm = this.fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'description': [null],
      'complete': false,
      'created': [new Date()]
    })
  }


  addTodo() {
    this.onAdd.emit(this.todoForm.value);
    this.todoForm.reset()
  }


}
