# TypeScript Debugging Examples

Small TypeScript regression examples with Vitest coverage.

These examples are intentionally compact. They show the kind of bug reproduction and fix shape that makes pull requests easier to review.

## Examples

- CSV-style tag parsing with whitespace and empty values.
- Retry backoff calculation with capped exponential delays.
- Stable issue URL normalization for GitHub issue links.

## Usage

```bash
npm install
npm test
```

## Maintainer-Friendly Notes

- Each example starts with a behavior that can be asserted in a small test.
- Fixes are local and easy to review.
- The test names describe the regression instead of only the implementation.
