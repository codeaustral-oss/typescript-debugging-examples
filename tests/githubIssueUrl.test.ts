import { describe, expect, it } from "vitest";
import { normalizeGitHubIssueUrl } from "../src/githubIssueUrl.js";

describe("normalizeGitHubIssueUrl", () => {
  it("normalizes trailing slash and whitespace without dropping the path", () => {
    expect(normalizeGitHubIssueUrl(" https://github.com/org/repo/issues/42/ ")).toEqual({
      owner: "org",
      repo: "repo",
      number: 42,
      canonicalUrl: "https://github.com/org/repo/issues/42",
    });
  });

  it("rejects pull request URLs", () => {
    expect(() => normalizeGitHubIssueUrl("https://github.com/org/repo/pull/42")).toThrow(
      "expected a GitHub issue URL",
    );
  });
});
