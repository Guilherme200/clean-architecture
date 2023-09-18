import {PriorityEnum, StatusEnum, TaskInterface} from "@/domain/task/task-interface";
import {TaskRules} from "@/domain/task/task-rules";

const now: Date = new Date();
const taskData: TaskInterface = {
  title: 'My task',
  description: 'My task description',
  status: StatusEnum.COMPLETED,
  priority: PriorityEnum.HIGH,
  created_at: now,
  deleted_at: new Date(now.getDate() + 1),
};

describe('TaskRules', () => {
  it('should error required in task rules object', () => {
    const fields: string[] = [
      'title',
      'status',
      'priority',
      'created_at'
    ];

    fields.forEach((field: string): void => {
      expect(() => {
        new TaskRules({...taskData, [field]: null})
      }).toThrow(`The ${field} field is required.`);
    })
  });

  it('should error validation title length in task rules object', () => {
    expect(() => {
      new TaskRules({...taskData, title: 'test'})
    }).toThrow(`The title must be at least 5 characters.`);

    expect(() => {
      new TaskRules({...taskData, title: 'testtttttttttttttttttttttttt'})
    }).toThrow(`The title may not be greater than 25 characters.`);
  });

  it('should error validation description length in task rules object', () => {
    expect(() => {
      new TaskRules({...taskData, description: 'test'})
    }).toThrow(`The description must be at least 5 characters.`);

    expect(() => {
      new TaskRules({...taskData, description: 'testttttttttttttttttttttttttttttttttttttttttttttttttttt'})
    }).toThrow(`The description may not be greater than 50 characters.`);
  });
});