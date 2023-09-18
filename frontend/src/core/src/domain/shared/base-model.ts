import UniqueId from "#/domain/shared/unique-id";

export interface IBaseModel<T> {
  id?: UniqueId;
  props: T;

  validate(active: boolean): void;
}

export class BaseModel<T> implements IBaseModel<T> {
  public readonly id: UniqueId;

  constructor(public readonly props: T, id: UniqueId = new UniqueId()) {
    this.id = id;
    this.props = props;
    this.validate();
  }

  validate(): void {

  }
}