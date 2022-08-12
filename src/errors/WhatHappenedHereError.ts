export class WhatHappenedHereError extends Error {
  type = "myEnumType";
  constructor(message?: string) {
    super(message);
    // Object.setPrototypeOf(this, WhatHappenedHereError.prototype);
  }
}
