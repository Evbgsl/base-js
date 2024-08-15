/**
 * @function returnObjectKeysAndValues
 * @param {Object} inputObject { a: 1, b: 2, c: 3 }
 * @returns {Array} [["a", "b", "c"], [1, 2, 3]]
 */

export const returnObjectKeysAndValues = (inputObject) => {
  const sortedKeys = Object.keys(inputObject).sort();
  const sortedValues = sortedKeys.map((key) => inputObject[key]);
  return [sortedKeys, sortedValues];
};
