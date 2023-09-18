import {BaseModel} from "#/domain/shared/base-model";

describe('BaseModel', () => {
  it('should create a base model object', () => {
    const data: any = {
      title: 'My title',
      description: 'My description'
    };

    const baseModel: BaseModel<any> = new BaseModel(data);
    expect(baseModel.props).toEqual(data);
    expect(baseModel.id).not.toBeNull();
  });
});