import { returnObjectKeysAndValues } from './returnObjectKeysAndValues.js';

const testData = {
  test1: {
    obj: { a: 1, b: 2, c: 3 },
    expectedArr: [['a', 'b', 'c'], [1, 2, 3]],
  },
  test2: {
    obj: { a: 'Apple', c: 'Microsoft', b: 'Google' },
    expectedArr: [['a', 'b', 'c'], ['Apple', 'Google', 'Microsoft']],
  },
};

describe('returnObjectKeysAndValues', () => {
  test('Unit test 1', () => {
    const test1 = testData.test1;
    const sepKeysAndValues = returnObjectKeysAndValues(test1.obj);
    expect([['a', 'b', 'c'], [1, 2, 3]]).toEqual(sepKeysAndValues);
  });
  test('Unit test 2', () => {
    const test2 = testData.test2;
    const sepKeysAndValues = returnObjectKeysAndValues(test2.obj);
    expect([['a', 'b', 'c'], ['Apple', 'Google', 'Microsoft']]).toEqual(sepKeysAndValues);
  });
});
