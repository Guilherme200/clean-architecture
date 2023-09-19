import {BaseModel} from "#/domain/shared/base-model";
import {validate} from "uuid";

describe('BaseModel', () => {
  it('should create a base model object', () => {
    const data: any = {
      title: 'My title',
      description: 'My description'
    };

    const baseModel: BaseModel<any> = new BaseModel(data);
    expect(baseModel.props).toEqual(data);
    expect(baseModel.id).not.toBeNull();
    expect(validate(baseModel.id)).toBe(true)
  });
});