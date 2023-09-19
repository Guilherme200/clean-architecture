import UniqueId from "#/domain/shared/unique-id";

export interface IBaseModel<T> {
  id?: string;
  props: T;

  validate(active: boolean): void;
}

export class BaseModel<T> implements IBaseModel<T> {
  public readonly id: string;

  constructor(public readonly props: T, id?: string) {
    this.id = id || (new UniqueId()).id;
    this.props = props;
    this.validate();
  }

  validate(): void {

  }
}