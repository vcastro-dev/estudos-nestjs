import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { createTaskDTO } from './dtos/create-task.dto';
import { getTaskFilterDTO } from './dtos/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(createTaskDTO: createTaskDTO): Task {
    const { description, title } = createTaskDTO;

    const task: Task = {
      id: `${this.tasks.length + 1}`,
      description,
      status: TaskStatus.OPEN,
      title,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  getTasksWithFilter(filter: getTaskFilterDTO): Task[] {
    return this.tasks.filter((task) => task.status === filter.status);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;

    return task;
  }
}
