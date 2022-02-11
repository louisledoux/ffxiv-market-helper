/**
 * Convert a timestamps to a time counter humanly understandable
 * @param timestamps The timestamp we are working on
 * @returns The formatted timestamps
 */
export function convertTimestamps(timestamps: number) {
  const timestampsToDate = new Date(timestamps);
  const now = new Date();

  let timeElapsed = Math.abs(now.getTime() - timestampsToDate.getTime());
  timeElapsed /= 1000;

  if (timeElapsed > 86400) {
    return `~${Math.trunc(timeElapsed / 86400)} days`;
  } if (timeElapsed > 3600) {
    return `~${Math.trunc(timeElapsed / 3600)} hours`;
  }
  return `~${Math.trunc(timeElapsed / 60)} min`;
}
