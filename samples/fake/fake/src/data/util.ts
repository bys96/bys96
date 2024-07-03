export const makeArray = (length: number) => new Array(length).fill(null);
// [null, null, null, null ...]
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min);
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + max;

// 순서는 util > 나머지 > index
