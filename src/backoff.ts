export function cappedExponentialBackoff(attempt: number, baseMs = 100, capMs = 5000): number {
  if (!Number.isInteger(attempt) || attempt < 0) {
    throw new RangeError("attempt must be a non-negative integer");
  }

  return Math.min(baseMs * 2 ** attempt, capMs);
}
