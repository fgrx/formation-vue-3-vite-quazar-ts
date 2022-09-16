import { describe, it, expect } from "vitest";
import { addNumbers } from "../index";

describe(">>>>>>addNumbers", () => {
  it("should return sum of two numbers", () => {
    const a = 5;
    const b = 7;

    const expected = 12;
    expect(addNumbers(a, b)).toBe(expected);
  });
});
