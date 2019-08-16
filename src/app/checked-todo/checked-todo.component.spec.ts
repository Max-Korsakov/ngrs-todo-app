import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedTodoComponent } from './checked-todo.component';

describe('CheckedTodoComponent', () => {
  let component: CheckedTodoComponent;
  let fixture: ComponentFixture<CheckedTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
