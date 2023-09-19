import {v4 as uuidv4, validate as uuidValidate} from 'uuid'

export default class UniqueId {
  public readonly id: string;

  constructor(id?: string) {
    this.id = id || uuidv4();
    this.validate();
  }

  private validate() {
    if (!uuidValidate(this.id)) {
      throw new Error("ID must be a valid UUID");
    }
  }
}