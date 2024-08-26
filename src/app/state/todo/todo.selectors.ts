import { createSelector } from "@ngrx/store";
import { TodoState } from "../../models/todo.model";
import AppState from "../app.state";

export const selectTodos = (state: AppState) => state.todo;
export const selectAllTodos = createSelector(selectTodos, (state: TodoState) => state.success.todos);
export const loadingStatus = createSelector(selectTodos, (state: TodoState) => state.loading);
export const apiStatus = createSelector(selectTodos, (state: TodoState) => state.status);
export const errorStatus = createSelector(selectTodos, (state: TodoState) => state.error);