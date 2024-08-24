import { createReducer, on } from "@ngrx/store";
import { TodoState, TodoStatus, Todos } from "../../models/todo.model";
import { getTodos, loadTodosSuccess } from "./todo.actions";

export const initialTodoState: TodoState = {
    success: {} as Todos,
    error: null,
    status: 'pending',
    loading: true
}

export const TodoReducer = createReducer(initialTodoState,
    on(getTodos, (state) => ({
        ...state,
        status: 'pending' as TodoStatus,
        loading: true
    })),
    on(loadTodosSuccess, (state, { success }) => ({
        ...state,
        success: success,
        error: null,
        status: 'success' as TodoStatus,
        loading: false
    }))
);