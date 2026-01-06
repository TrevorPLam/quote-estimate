/**
 * Lightweight in-memory rate limiting utility for API routes.
 */
const requestCounts = new Map<string, { count: number; expiresAt: number }>();

export const rateLimit = (
  key: string,
  limit: number,
  windowMs: number,
): { allowed: boolean; remaining: number } => {
  const now = Date.now();
  const existing = requestCounts.get(key);

  if (!existing || existing.expiresAt < now) {
    requestCounts.set(key, { count: 1, expiresAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  existing.count += 1;
  requestCounts.set(key, existing);
  return { allowed: true, remaining: limit - existing.count };
};
