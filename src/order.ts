export function order(source: string) {
  const s: Set<string> = new Set(source.split(' '));
  let result: [] = [];
  for (const str of s) {
    if (str) {
      let r = str.match(/^[a-zA-z]*([1-9])[a-zA-z]*$/);
      if (!r) {
        throw new Error('Wrong string format');
      }
      result[r[1]] = r[0];
    }

  }
  return result.filter(a => !!a).join(' ');
}
