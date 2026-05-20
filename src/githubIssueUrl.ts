const ISSUE_RE = /^https:\/\/github\.com\/([^/\s]+)\/([^/\s]+)\/issues\/(\d+)\/?$/;

export type GitHubIssueRef = {
  owner: string;
  repo: string;
  number: number;
  canonicalUrl: string;
};

export function normalizeGitHubIssueUrl(input: string): GitHubIssueRef {
  const trimmed = input.trim();
  const match = ISSUE_RE.exec(trimmed);

  if (!match) {
    throw new Error("expected a GitHub issue URL");
  }

  const owner = match[1]!;
  const repo = match[2]!;
  const number = match[3]!;
  return {
    owner,
    repo,
    number: Number(number),
    canonicalUrl: `https://github.com/${owner}/${repo}/issues/${number}`,
  };
}
