export class MattsAwesomeError extends Error {
  type = "myEnumType";
  constructor(message?: string) {
    super(message);
    // Object.setPrototypeOf(this, MattsAwesomeError.prototype);
  }
}
