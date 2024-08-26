export interface Todo {
    id: number;
    todo: string;
    userId: number;
    completed: boolean;
}

export interface Todos {
    todos: Array<Todo>;
    total: number;
    skip: number;
    limit: number;
}
export type TodoStatus = "pending" | "loading" | "success" | "error";

export interface TodoState {
    success: Todos;
    error: string | null;
    status: TodoStatus;
    loading: boolean;
}