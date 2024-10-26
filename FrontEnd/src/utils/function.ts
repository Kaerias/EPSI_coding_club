export function call(fn: string, params: string[]) {
  const p = params.join(",");
  return eval(`${fn}(${p})`);
}
