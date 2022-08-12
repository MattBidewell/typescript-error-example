export class MattsLessAwesomeError extends Error {
  type = "myEnumType";
  constructor(message?: string) {
    super(message);
    // Object.setPrototypeOf(this, MattsLessAwesomeError.prototype);
  }
}
