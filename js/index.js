import { toCapitalize } from './utils.js';
import { toCapitalizeNames } from './utils.js';
import { isPalindrome } from './utils.js';
import { formatFullNameForDoc } from './utils.js';
import { toStationList } from './utils.js';
import { getAreaOfCountry } from './utils.js';

console.log(toCapitalize('строка для проверки'));
console.log(toCapitalizeNames(['лонДон', 'МанЧЕСТёр', 'БиРминГЕМ', 'лиВЕРпуЛЬ']));
console.log(isPalindrome('testtset'));
console.log(formatFullNameForDoc('стёПан ИвАнович СемёНов'));
console.log(toStationList([
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield']));
console.log(getAreaOfCountry('Russia'));