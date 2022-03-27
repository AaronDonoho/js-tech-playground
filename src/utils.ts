export function pad(pad: unknown, val: number) {
  return pad ? String(val).padStart(2, '0') : val;
}