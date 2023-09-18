import {PriorityEnum, StatusEnum, TaskInterface} from "#/domain/task/task-interface";
import {TaskModel} from "#/domain/task/task.model";

describe('TaskModel', () => {
  it('should create a task model object', () => {
    const now: Date = new Date();
    const taskData: TaskInterface = {
      title: 'My task',
      description: 'My task description',
      status: StatusEnum.COMPLETED,
      priority: PriorityEnum.HIGH,
      created_at: now,
      deleted_at: new Date(now.getDate() + 1),
    };

    const taskModel = new TaskModel(taskData);
    expect(taskModel.props).toEqual(taskData);
  });
});