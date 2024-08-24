import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { TodoComponent } from './app/components/todo/todo.component';

const bootstrap = () => bootstrapApplication(TodoComponent, config);

export default bootstrap;
