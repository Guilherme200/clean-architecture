import {validate as uuidValidate} from "uuid";
import UniqueId from "@/domain/shared/unique-id";

function spyValidateMethod() {
  return jest.spyOn(UniqueId.prototype as any, 'validate');
}

describe("Unit Test UniqueEntityId", () => {
  const validateSpy = jest.spyOn(UniqueId.prototype as any, 'validate');

  it("should throw error when uuid is invalid", () => {
    expect(() => new UniqueId('fake id')).toThrow(new Error("ID must be a valid UUID"));
    expect(validateSpy).toHaveBeenCalled();
  })

  it("should accept a uuid passed in constructor", () => {
    const uuid: string = '0cf89566-9031-4980-814c-41cad64cb4f4';
    const vo: UniqueId = new UniqueId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  })

  it("should accept a uuid generator in constructor", () => {
    const vo: UniqueId = new UniqueId();
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  })
})