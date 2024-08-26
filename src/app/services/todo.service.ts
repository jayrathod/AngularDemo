import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAllTodo() {
    return this.httpClient.get('https://dummyjson.com/todos');
  }

  addTodo(body: any) {
    return this.httpClient.post('https://dummyjson.com/todos/add', body);
  }

  removeTodo(id: any) {
    return this.httpClient.delete(`https://dummyjson.com/todos/${id}`);
  }
}
