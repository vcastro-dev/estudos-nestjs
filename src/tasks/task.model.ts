export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface TaskBase {
  description: string;
  status: TaskStatus;
  title: string;
}

export interface Task extends TaskBase {
  id: string;
}
