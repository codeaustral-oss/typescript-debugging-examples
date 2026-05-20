import { describe, expect, it } from "vitest";
import { cappedExponentialBackoff } from "../src/backoff.js";

describe("cappedExponentialBackoff", () => {
  it("doubles the delay for each retry attempt", () => {
    expect(cappedExponentialBackoff(0)).toBe(100);
    expect(cappedExponentialBackoff(1)).toBe(200);
    expect(cappedExponentialBackoff(3)).toBe(800);
  });

  it("caps large retry delays", () => {
    expect(cappedExponentialBackoff(10, 100, 1000)).toBe(1000);
  });

  it("rejects negative attempts", () => {
    expect(() => cappedExponentialBackoff(-1)).toThrow(RangeError);
  });
});
