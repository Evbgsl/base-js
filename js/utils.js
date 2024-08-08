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

    /**
   * @function getAreaOfCountry
   * @description Returns the area of the country's proportion of the total world's landmass
   * @param {string} country
   * @returns {string}
   */
  
    const totalLandMass = 148940000;
    const countryAreasDictionary = {
      Russia: 17098242,
      USA: 9372610,
      Iran: 1648195,
    };
  
    export const getAreaOfCountry = (country) =>
      countryAreasDictionary[country]
        ? `${country} is ${((countryAreasDictionary[country] / totalLandMass) * 100).toFixed(2)}% of the total world's landmass`
        : `There is no country named ${country} on the map.`;
        