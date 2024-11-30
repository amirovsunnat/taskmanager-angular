import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, FormsModule],
  template: `
    <div class="app">
      <h1>Task Tracker</h1>
      <form (ngSubmit)="addTask()" class="add-task-form">
        <input [(ngModel)]="newTask.title" name="title" placeholder="Task Title" required />
        <textarea [(ngModel)]="newTask.description" name="description" placeholder="Task Description"></textarea>
        <button type="submit">Add Task</button>
      </form>
      <app-task-list [tasks]="tasks" (taskDeleted)="deleteTask($event)"></app-task-list>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks = [
    { title: 'Task 1', description: 'Description 1', completed: false },
    { title: 'Task 2', description: 'Description 2', completed: false },
  ];

  newTask = { title: '', description: '' };

  addTask() {
    if (this.newTask.title.trim()) {
      this.tasks.push({ ...this.newTask, completed: false });
      this.newTask = { title: '', description: '' }; // Clear the form
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
