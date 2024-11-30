import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, NgFor],
  template: `
    <div class="task-list">
      <app-task
        *ngFor="let task of tasks; let i = index"
        [task]="task"
        (deleteTaskEvent)="taskDeleted.emit(i)"
      ></app-task>
    </div>
  `,
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks!: { title: string; description: string; completed: boolean }[];
  @Output() taskDeleted = new EventEmitter<number>();
}
