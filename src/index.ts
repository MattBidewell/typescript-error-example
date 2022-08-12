import { AhError } from "./errors/AhError.js";
import { MattsAwesomeError } from "./errors/MattsAwesomeError.js";
import { MattsError } from "./errors/MattsError.js";
import { MattsLessAwesomeError } from "./errors/MattsLesssAwesomeError.js";
import { WhatHappenedHereError } from "./errors/WhatHappenedHereError.js";

try {
  const random = Math.floor(Math.random() * 10);
  console.log(random);
  if (random < 2) {
    throw new AhError();
  } else if (random < 4) {
    throw new WhatHappenedHereError();
  } else if (random < 6) {
    throw new MattsAwesomeError();
  } else if (random < 8) {
    throw new MattsLessAwesomeError();
  } else {
    throw new MattsError("Wow!");
  }
} catch (err) {
  if (err instanceof AhError) {
    console.log("😱");
  } else if (err instanceof MattsAwesomeError) {
    console.log("😎");
  } else if (err instanceof MattsError) {
    console.log("🍊");
  } else if (err instanceof MattsLessAwesomeError) {
    console.log("😢");
  } else if (err instanceof WhatHappenedHereError) {
    console.log("🤔");
  } else {
    console.log("💥");
  }
}
