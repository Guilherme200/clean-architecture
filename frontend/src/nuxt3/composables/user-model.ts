import {UserModel} from "@core/domain/user/user-model";
export function useUserModel() {
  return (new UserModel({name: 'Test', email: 'test@email.com', password: '12345678'}))
}