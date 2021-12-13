import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  version = String(Math.random());
  taskText = 'Just type new task here';
  tasks: string[] = [];

  addTask() {
    this.tasks.push(this.taskText);
    this.taskText = '';
  }

  deleteTask = (ind: number) => {
    this.tasks = [
      ...this.tasks.slice(0, ind),
      ...this.tasks.slice(ind + 1, this.tasks.length),
    ];
  };
}
