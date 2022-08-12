export class MattsError extends Error {
  type = "myEnumType";
  constructor(message?: string) {
    super(message);
    // Object.setPrototypeOf(this, MattsError.prototype);
  }
}
