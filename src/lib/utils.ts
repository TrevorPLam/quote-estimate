/**
 * Shared utility helpers for formatting and validation.
 */
export const sanitizeString = (value: unknown, maxLength = 500): string => {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return trimmed.slice(0, maxLength);
};

export const isValidEmail = (value: string): boolean => /.+@.+\..+/.test(value);

export const formatPhone = (value: string): string => value.replace(/[^\d+]/g, "");
