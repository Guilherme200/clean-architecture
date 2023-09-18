import {BaseRules} from "#/domain/shared/base-rules";
import {PriorityEnum, StatusEnum, TaskInterface} from "#/domain/task/task-interface";

export class TaskRules {
  constructor(props: TaskInterface) {
    this.rules(props);
  }

  private rules(props: TaskInterface): any {
    new BaseRules(props)
      .required(['title', 'status', 'priority', 'created_at'])
      .length('title', 5, 25)
      .length('description', 5, 50)
      .enum('status', StatusEnum)
      .enum('priority', PriorityEnum)
      .date(['created_at', 'deleted_at'])
  }
}
