
/**
 * @function toCapitalize
 * @param {string} str
 * @returns {string}
 */

export const toCapitalize = (str) => str
  ? `${str[0].toUpperCase()}${str.slice(1)}`
  : '';

  /**
 * @function formatUserName
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */

export const formatUserName = (firstName, lastName) => {
  const formatName = (name) => {
    const formattedName = name.toLowerCase().replace(/ё/g, 'е');
    return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
  };
  return `${formatName(firstName)} ${formatName(lastName)}`;
}

