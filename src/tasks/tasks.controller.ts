import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { createTaskDTO } from './dtos/create-task.dto';
import { getTaskFilterDTO } from './dtos/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private TaskService: TasksService) {}

  @Get()
  getTasks(@Query() filter: getTaskFilterDTO): Task[] {
    if (!filter) return this.TaskService.getAllTasks();

    return this.TaskService.getTasksWithFilter(filter);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.TaskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() body: createTaskDTO): Task {
    return this.TaskService.createTask(body);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.TaskService.deleteTask(id);
  }

  @Patch('/:id/status')
  patchTaskStatus(@Param('id') id, @Body() status: TaskStatus) {
    this.TaskService.updateTaskStatus(id, status);
  }
}
