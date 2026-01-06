/**
 * Lightweight in-memory rate limiting utility for API routes.
 * @warning Not suitable for serverless environments. Use a distributed solution like Redis for production.
 */
const requestCounts = new Map<string, { count: number; expiresAt: number }>();

export const rateLimit = (
  key: string,
  limit: number,
  windowMs: number,
): { allowed: boolean; remaining: number } => {
  const now = Date.now();

  // Clean up expired entries to avoid unbounded growth of the map.
  for (const [storedKey, entry] of requestCounts) {
    if (entry.expiresAt < now) {
      requestCounts.delete(storedKey);
    }
  }

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
