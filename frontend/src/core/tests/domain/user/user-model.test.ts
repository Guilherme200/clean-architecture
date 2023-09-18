import {UserModel} from "#/domain/user/user-model";
import {UserInterface} from "#/domain/user/user-interface";

describe('UserModel', () => {
  it('should create a user model object', () => {
    const userData: UserInterface = {
      name: 'John Doe',
      email: 'john@example.com',
      password: '12345678'
    };

    const userModel = new UserModel(userData);
    expect(userModel.props).toEqual(userData);
  });
});