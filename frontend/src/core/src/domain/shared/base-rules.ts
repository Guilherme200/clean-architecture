import {validate as uuidValidate} from "uuid";

export class BaseRules {

  private readonly props: any;

  constructor(props: any) {
    this.props = props;
  }

  date(fields: string[]): this {
    fields.forEach((field) => {
      const date: any = this.props[field];
      if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error(`The ${field} must be a valid date.`);
      }
    });

    return this;
  }

  uniqueId(fields: string[]): this {
    fields.forEach((field) => {
      if (!uuidValidate(this.props[field]?.id)) {
        throw new Error(`The ${field} must be a valid ID.`);
      }
    })

    return this;
  }

  enum(field: string, objectEnum: object): this {
    if (!Object.values(objectEnum).includes(this.props[field])) {
      throw new Error(`The selected ${field} is invalid.`);
    }

    return this
  }

  length(field: string, min: number | null = null, max: number | null = null): this {
    if (!!min && this.props[field]?.length < min) {
      throw new Error(`The ${field} must be at least ${min} characters.`);
    }

    if (!!max && this.props[field]?.length > max) {
      throw new Error(`The ${field} may not be greater than ${max} characters.`);
    }

    return this
  }

  validateEmail(fields: string[]): this {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    fields.forEach((field) => {
      if (!emailRegex.test(this.props[field])) {
        throw new Error(`The ${field} must be a valid email address.`);
      }
    })

    return this
  }

  required(fields: string[]): this {
    fields.forEach((field: string) => {
      if (!this.props[field]) {
        throw new Error(`The ${field} field is required.`);
      }
    })

    return this;
  }
}