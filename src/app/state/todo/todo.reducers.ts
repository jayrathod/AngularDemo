import { createReducer, on } from "@ngrx/store";
import { TodoState, TodoStatus, Todos } from "../../models/todo.model";
import { addTodoSuccess, getTodos, loadTodosError, loadTodosSuccess, removeTodoSuccess } from "./todo.actions";

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
    })),
    on(loadTodosError, (state, { error }) => ({
        ...state,
        success: { ...state.success },
        error: error,
        status: 'error' as TodoStatus,
        loading: false
    })),
    on(addTodoSuccess, (state, { todo }) => ({
        ...state,
        success: {
            ...state.success,
            todos: [
                ...state.success.todos, { id: todo.id, completed: todo.completed, todo: todo.todo, userId: todo.userId }]
        },
        error: null,
        status: 'success' as TodoStatus,
        loading: false
    })),
    on(removeTodoSuccess, (state, { todo }) => ({
        ...state,
        success: {
            ...state.success,
            todos: state.success.todos.filter((val) => val.id !== todo.id)
        },
        error: null,
        status: 'success' as TodoStatus,
        loading: false
    }))
);