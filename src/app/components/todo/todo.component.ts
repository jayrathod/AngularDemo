import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import AppState from '../../state/app.state';
import { addTodo, getTodos, removeTodo } from '../../state/todo/todo.actions';
import { apiStatus, errorStatus, loadingStatus, selectAllTodos } from '../../state/todo/todo.selectors';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatIconModule, MatGridListModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public todoDescriptionText = '';
  public apiStatus$: Observable<string>;
  public allTodos$: Observable<Todo[]>;
  public loading$: Observable<boolean>;
  public errorMsg$: Observable<string | null>;

  constructor(private store: Store<AppState>) {
    this.allTodos$ = this.store.select(selectAllTodos);
    this.apiStatus$ = this.store.select(apiStatus);
    this.loading$ = this.store.select(loadingStatus);
    this.errorMsg$ = this.store.select(errorStatus);
  }

  ngOnInit() {
    this.store.dispatch(getTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ todo: { id: 151, todo: this.todoDescriptionText, completed: false, userId: 5 } as Todo }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id: id }))
  }
}
