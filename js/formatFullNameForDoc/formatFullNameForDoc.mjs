/**
 * @function formatFullNameForDoc
 * @param {string} fullName стёПан ИвАнович СемёНов
 * @returns {string} Степан Иванович Семенов
 */

export const formatFullNameForDoc = (fullName) => {
  const str = fullName.toLowerCase().replaceAll('ё', 'е')

  return str.split(' ')
  .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
  .join(' ');
};
