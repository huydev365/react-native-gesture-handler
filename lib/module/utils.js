export function toArray(object) {
  if (!Array.isArray(object)) {
    return [object];
  }

  return object;
}
export function withPrevAndCurrent(array, mapFn) {
  const previousArr = [null];
  const currentArr = [...array];
  const transformedArr = [];
  currentArr.forEach((current, i) => {
    const previous = previousArr[i];
    const transformed = mapFn(previous, current);
    previousArr.push(transformed);
    transformedArr.push(transformed);
  });
  return transformedArr;
}
export function hasProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}
export function isJestEnv() {
  return !!process.env.JEST_WORKER_ID;
}
//# sourceMappingURL=utils.js.map