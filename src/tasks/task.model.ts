export interface ITask {
  id: string;
  description: string;
  status: TaskStatus;
  title: string;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
