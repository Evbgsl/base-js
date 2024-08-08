/**
 * @function toCapitalize
 * @param {string} str
 * @returns {string}
 */

export const toCapitalize = (str) => str
  ? `${str[0].toUpperCase()}${str.slice(1)}`
  : '';

/**
 * @function toCapitalizeNames
 * @param {string[]} names
 * @returns {string[]}
 */

export const toCapitalizeNames = (names) => 
  names.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);

/**
 * @function isPalindrome
 * @param {string} str 
 * @returns {boolean}
 */

export const isPalindrome = (str) => 
  str === str.split('').reverse().join('');

/**
 * @function formatFullNameForDoc
 * @param {string} fullName стёПан ИвАнович СемёНов
 * @returns {string} Степан Иванович Семенов
 */

export const formatFullNameForDoc = (fullName) => {
  const str = fullName.toLowerCase().split('ё').join('е');
  return str.split(' ').map((word) => 
    `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
};

/**
 * @function toStationList
 * @description Concatenates the first 3 characters 
 * (station abbr) and all characters after ';' (station name) using ': '
 * @param {string[]} stationListRawData
 * @returns {string[]}
 */

export const toStationList = (stationListRawData) => 
  stationListRawData.map((station) => {
    const [abbr, name] = station.split(';');
    return `${abbr.slice(0, 3)}: ${name}`;
  });
