import { formatFullNameForDoc } from './formatFullNameForDoc.js';

describe('formatFullNameForDoc', () => {
  test('Unit test 1', () => {
    const fullName = 'стёПан ИвАнович СемёНов';
    const formattedFullName = formatFullNameForDoc(fullName);
    expect('Степан Иванович Семенов').toEqual(formattedFullName);
  });
  test('Unit test 2', () => {
    const fullName = 'Степан ИванОвич';
    const formattedFullName = formatFullNameForDoc(fullName);
    expect('Степан Иванович').toEqual(formattedFullName);
  });
});
