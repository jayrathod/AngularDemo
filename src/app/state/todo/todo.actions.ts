import { createAction, props } from "@ngrx/store";
import { Todo, Todos } from "../../models/todo.model";

export const getTodos = createAction('[Todo Component] Get Todos')
export const loadTodosSuccess = createAction('[Todo API] Success Loading Todos', props<{ success: Todos }>());
export const loadTodosError = createAction('[Todo API] Error Loading Todos', props<{ error: string }>());

export const addTodo = createAction('[Todo Component] Add Todo', props<{todo: Todo}>());
export const addTodoSuccess = createAction('[Todo API] Success Adding Todo', props<{todo: Todo}>());
export const addTodoError = createAction('[Todo API] Error Adding Todo', props<{error: string}>());

export const removeTodo = createAction('[Todo Component] Remove Todo', props<{id: number}>());
export const removeTodoSuccess = createAction('[Todo API] Success Removing Todo', props<{todo: Todo}>());
export const removeTodoError = createAction('[Todo API] Error Removing Todo', props<{error: string}>());