import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { Todos } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { getTodos, loadTodosError, loadTodosSuccess } from './todo.actions';


@Injectable({ providedIn: 'root' })
export class TodoEffect {
    actions$ = inject(Actions);
    getTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getTodos),
            switchMap(() => this.todoService.getAllTodo().pipe(
                map((posts) =>
                    loadTodosSuccess({ success: posts as Todos })
                ),
                catchError((error) =>
                    of(loadTodosError({ error: error.message })))
            ))
        )
    );

    constructor(private todoService: TodoService, @Inject(PLATFORM_ID) private platformId: Object) { }
}