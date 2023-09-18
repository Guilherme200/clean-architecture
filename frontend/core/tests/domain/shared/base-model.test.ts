import {BaseModel} from "@/domain/shared/base-model";

describe('BaseModel', () => {
  it('should create a base model object', () => {
    const data: any = {
      title: 'My title',
      description: 'My description'
    };

    const baseModel: BaseModel<any> = new BaseModel(data, null, false);
    expect(baseModel.props).toEqual(data);
    expect(baseModel.id).not.toBeNull();
  });

  it('should validate a base model object', () => {
    const data: any = {
      title: 'My title',
      description: 'My description'
    };

    expect(() => {
      new BaseModel(data, null, true);
    }).toThrow(`Validation not found`);
  });
});