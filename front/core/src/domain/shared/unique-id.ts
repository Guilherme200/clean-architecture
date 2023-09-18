import {v4 as uuidv4, validate as uuidValidate} from 'uuid'

export default class UniqueId {
  constructor(public readonly id?: string) {
    this.id = id || uuidv4();
    this.validate();
  }

  private validate() {
    const isValid = uuidValidate(this.id);
    if (!isValid) {
      throw new Error("ID must be a valid UUID");
    }
  }
}