import { TaskStatus } from './task.dto';

export class GetTaskFilterDto {
  status?: TaskStatus;
  search?: string;
}
