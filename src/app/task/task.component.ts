import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="task" [class.completed]="task.completed">
      <input [(ngModel)]="task.title" class="task-title" placeholder="Task Title" />
      <textarea [(ngModel)]="task.description" class="task-desc" placeholder="Task Description"></textarea>
      <div class="task-actions">
        <button (click)="markCompleted()" [disabled]="task.completed">Complete</button>
        <button (click)="onDeleteTask()">Delete</button>
      </div>
    </div>
  `,
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: { title: string; description: string; completed: boolean };
  @Output() deleteTaskEvent = new EventEmitter<void>();

  markCompleted() {
    this.task.completed = true;
  }

  onDeleteTask() {
    this.deleteTaskEvent.emit();
  }
}
