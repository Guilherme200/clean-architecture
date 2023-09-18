import UniqueId from "@/domain/shared/unique-id";

export interface IBaseModel<T> {
  id?: UniqueId;
  props: T;

  validate(active: boolean): void;
}

export class BaseModel<T> implements IBaseModel<T> {
  public readonly id: UniqueId;

  constructor(public readonly props: T, id?: UniqueId, validate: boolean = true) {
    this.id = id || new UniqueId();
    this.props = props;
    this.validate(validate);
  }

  validate(active: boolean): void {
    if (active) {
      throw new Error('Validation not found');
    }
  }
}