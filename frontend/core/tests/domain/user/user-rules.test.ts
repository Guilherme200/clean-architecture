import {UserRules} from "@/domain/user/user-rules";
import {UserInterface} from "@/domain/user/user-interface";

describe('UserRules', () => {
  it('should error validation with fields null in user rules object', () => {
    const fields: string[] = ['name', 'email', 'password'];

    const userData: UserInterface = {
      name: 'John Doe',
      email: 'john@example.com',
      password: '12345678'
    };

    fields.forEach((field: string): void => {
      expect(() => {
        new UserRules({...userData, [field]: null})
      }).toThrow(`The ${field} field is required.`);
    })
  });

  it('should error validation with email invalid in user rules object', () => {
    const userData: UserInterface = {
      name: 'John Doe',
      email: 'johnexample.com',
      password: '12345678'
    };

    expect(() => {
      new UserRules(userData)
    }).toThrow(`The email must be a valid email address.`);
  });

  it('should error validation fields length in user rules object', () => {
    const userData: UserInterface = {
      name: 'John Doe',
      email: 'john@example.com',
      password: '12345678'
    };

    expect(() => {
      new UserRules({...userData, name: 'test'})
    }).toThrow(`The name must be at least 5 characters.`);

    expect(() => {
      new UserRules({...userData, name: 'testttttttttttttttttttttttttttttttttttttttttttttttttttt'})
    }).toThrow(`The name may not be greater than 50 characters.`);

    expect(() => {
      new UserRules({...userData, email: 't@e.com'})
    }).toThrow(`The email must be at least 10 characters.`);

    expect(() => {
      new UserRules({...userData, email: 'testttttttttttttttttttttttttttttttttttttttttttttttttttt@email.com'})
    }).toThrow(`The email may not be greater than 50 characters.`);

    expect(() => {
      new UserRules({...userData, password: '123456'})
    }).toThrow(`The password must be at least 8 characters.`);

    expect(() => {
      new UserRules({...userData, password: '1234567890123456789012345678901234567890123456789012345'})
    }).toThrow(`The password may not be greater than 50 characters.`);
  });
});