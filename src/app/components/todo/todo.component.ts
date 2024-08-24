import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import AppState from '../../state/app.state';
import { getTodos } from '../../state/todo/todo.actions';
import { apiStatus, loadingStatus, selectAllTodos } from '../../state/todo/todo.selectors';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public apiStatus$: Observable<string>;
  public allTodos$: Observable<Todo[]>;
  public loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.allTodos$ = this.store.select(selectAllTodos);
    this.apiStatus$ = this.store.select(apiStatus);
    this.loading$ = this.store.select(loadingStatus);
  }

  ngOnInit() {
    this.store.dispatch(getTodos());
  }
}
