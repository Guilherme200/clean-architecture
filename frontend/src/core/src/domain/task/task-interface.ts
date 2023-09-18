export enum StatusEnum {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export enum PriorityEnum {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface TaskInterface {
  title: string;
  status: StatusEnum;
  priority: PriorityEnum;
  created_at: Date;
  deleted_at?: Date;
  description?: string;
}