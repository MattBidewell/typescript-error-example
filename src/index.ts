import { AhError } from "./errors/AhError";
import { MattsAwesomeError } from "./errors/MattsAwesomeError";
import { MattsError } from "./errors/MattsError";
import { MattsLessAwesomeError } from "./errors/MattsLesssAwesomeError";
import { WhatHappenedHereError } from "./errors/WhatHappenedHereError";

try {
  const random = Math.random() * 100;
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
    console.log("🧡");
  } else if (err instanceof MattsLessAwesomeError) {
    console.log("😢");
  } else if (err instanceof WhatHappenedHereError) {
    console.log("🤔");
  } else {
    console.log("💥");
  }
}
