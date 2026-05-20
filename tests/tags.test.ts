import { describe, expect, it } from "vitest";
import { parseTags } from "../src/tags.js";

describe("parseTags", () => {
  it("trims whitespace around comma-separated values", () => {
    expect(parseTags("bug, docs, tests")).toEqual(["bug", "docs", "tests"]);
  });

  it("drops empty values without changing order", () => {
    expect(parseTags("bug,, docs, ,tests")).toEqual(["bug", "docs", "tests"]);
  });
});
