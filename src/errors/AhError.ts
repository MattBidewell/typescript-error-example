export class AhError extends Error {
  type = "myEnumType";
  constructor(message?: string) {
    super(message);
    // Object.setPrototypeOf(this, AhError.prototype);
  }
}
