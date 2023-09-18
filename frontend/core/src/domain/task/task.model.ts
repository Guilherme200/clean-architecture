import {BaseModel} from "@/domain/shared/base-model";
import {TaskInterface} from "@/domain/task/task-interface";
import {TaskRules} from "@/domain/task/task-rules";

export class TaskModel extends BaseModel<TaskInterface> {
  validate(): void {
    new TaskRules(this.props)
  }
}

