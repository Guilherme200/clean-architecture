import {UserInterface} from "@/domain/user/user-interface";
import {BaseRules} from "@/domain/shared/base-rules";

export class UserRules {
  constructor(props: UserInterface) {
    this.rules(props);
  }

  private rules(props: UserInterface): any {
    new BaseRules(props)
      .required(['name', 'email', 'password'])
      .validateEmail(['email'])
      .length('name', 5, 50)
      .length('email', 10, 50)
      .length('password', 8, 50);
  }
}
