import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from 'rxjs';
import { Todo, Todos } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { addTodo, addTodoError, addTodoSuccess, getTodos, loadTodosError, loadTodosSuccess, removeTodo, removeTodoError, removeTodoSuccess } from './todo.actions';


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
                    of(loadTodosError({ error: JSON.stringify(error) })))
            ))
        )
    );

    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTodo),
            switchMap((action) => this.todoService.addTodo(action.todo).pipe(
                map((post) =>
                    addTodoSuccess({ todo: post as Todo })
                ),
                catchError((error) =>
                    of(addTodoError({ error: error.message })))
            ))
        )
    );

    removeTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(removeTodo),
            switchMap((action) => this.todoService.removeTodo(action.id).pipe(
                map((post) => removeTodoSuccess({ todo: post as Todo })),
                catchError((error) => of(removeTodoError({ error: error.message }))
                ))
            )
        )
    )

    constructor(private todoService: TodoService, @Inject(PLATFORM_ID) private platformId: Object) { }
}