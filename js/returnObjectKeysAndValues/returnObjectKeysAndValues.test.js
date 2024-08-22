import { returnObjectKeysAndValues } from './returnObjectKeysAndValues.js';
import { testData } from './mockData.js';

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
  test('Unit test 3', () => {
    const test3 = testData.test3;
    const sepKeysAndValues = returnObjectKeysAndValues(test3.obj);
    expect([['key1', 'key2', 'key3'], [true, false, undefined]]).toEqual(sepKeysAndValues);
  });
});
