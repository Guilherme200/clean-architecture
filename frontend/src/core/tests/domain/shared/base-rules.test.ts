import {BaseRules} from "#/domain/shared/base-rules";

describe('BaseRules', () => {
  it('should validation required in base rules object', () => {
    const fields: any[] = [
      {key: 'title', value: null},
      {key: 'description', value: null},
      {key: 'age', value: null},
    ];

    fields.forEach((field) => {
      expect(() => {
        (new BaseRules({[field.key]: field.value})).required([field.key]);
      }).toThrow(`The ${field.key} field is required.`);
    })
  });

  it('should validation valid email in base rules object', () => {
    const fields: any[] = [
      'test-email',
      'test@email',
      'test-email.com'
    ];

    fields.forEach((field) => {
      expect(() => {
        (new BaseRules({email: field})).validateEmail(['email']);
      }).toThrow('The email must be a valid email address.');
    })
  });

  it('should validation length in fields base rules object', () => {
    expect(() => {
      (new BaseRules({field: 'test'})).length('field', 5, null);
    }).toThrow('The field must be at least 5 characters.');

    expect(() => {
      (new BaseRules({field: 'testtt'})).length('field', null, 5);
    }).toThrow('The field may not be greater than 5 characters.');
  });

  it('should validation enum in fields base rules object', () => {
    enum BaseEnum {
      VALUE_ONE = 'value_one',
      VALUE_TWO = 'value_two',
      VALUE_THREE = 'value_three',
    }

    expect(() => {
      (new BaseRules({field: 'testtt'})).enum('field', BaseEnum);
    }).toThrow('The selected field is invalid.');
  });

  it('should validation unique ID in base rules object', () => {

    expect(() => {
      (new BaseRules({field: 'testtt'})).uniqueId(['field']);
    }).toThrow('The field must be a valid ID.');
  });

  it('should validation field date in base rules object', () => {

    expect(() => {
      const date: Date = new Date('invalid_date_string');
      (new BaseRules({field: date})).date(['field']);
    }).toThrow('The field must be a valid date.');
  });
});