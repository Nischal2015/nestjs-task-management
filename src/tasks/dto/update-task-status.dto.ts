import { IsEnum } from 'class-validator';
import { TaskStatus } from './task.dto';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
