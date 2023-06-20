import { Injectable } from '@nestjs/common';
import { ITask, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  createTask({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): ITask {
    const task: ITask = {
      id: '',
      description,
      status: TaskStatus.OPEN,
      title,
    };

    this.tasks.push(task);

    return task;
  }
}
