import {BaseModel} from "@/domain/shared/base-model";
import {UserInterface} from "@/domain/user/user-interface";
import {UserRules} from "@/domain/user/user-rules";

export class UserModel extends BaseModel<UserInterface> {
  validate(): void {
    new UserRules(this.props)
  }
}
