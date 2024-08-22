export const testData = {
  test1: {
    obj: { a: 1, b: 2, c: 3 },
    expectedArr: [['a', 'b', 'c'], [1, 2, 3]],
  },
  test2: {
    obj: { a: 'Apple', c: 'Microsoft', b: 'Google' },
    expectedArr: [['a', 'b', 'c'], ['Apple', 'Google', 'Microsoft']],
  },
  test3: {
    obj: { key1: true, key2: false, key3: undefined },
    expectedArr: [['key1', 'key2', 'key3'], [true, false, undefined]],
  },
};
