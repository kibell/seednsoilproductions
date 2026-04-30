export function formatLocalDate(dateString, options, locale = "en-US") {
  if (!dateString) return "";

  // Parse YYYY-MM-DD as a local calendar date to avoid UTC day shifting.
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);
  const parsed = match
    ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
    : new Date(dateString);

  if (Number.isNaN(parsed.getTime())) return dateString;

  return parsed.toLocaleDateString(locale, options);
}
