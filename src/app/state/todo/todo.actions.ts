import { createAction, props } from "@ngrx/store";
import { Todos } from "../../models/todo.model";

export const getTodos = createAction('[Todo Component] Get Todos')

export const loadTodosSuccess = createAction('[Todo API] Success Loading Todos', props<{ success: Todos }>());

export const loadTodosError = createAction('[Todo API] Error Loading Todos', props<{ error: string }>());