export interface Todo {
    id: number;
    todo: string;
    userId: number;
    completed: boolean;
}

export interface Todos {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number;
}
export type TodoStatus = "pending" | "loading" | "success" | "error";

export interface TodoState {
    success: Todos;
    error: null;
    status: TodoStatus;
    loading: boolean;
}