import {formatSheetData} from '../utils';

describe('formatSheetData', () => {
  it('should convert google sheet data to an object', () => {
    const values = [
      ['HeroCardTitle', 'Latest Blog'],
      ['', 'NewsKit'],
    ];
    const result = formatSheetData(values);
    expect(result).toEqual({
      herocardtitle: 'Latest Blog',
      '': 'NewsKit',
    });
  });
  it('should remove the item whose value is undefined', () => {
    const values = [['HeroCardTitle', 'Latest Blog'], ['NewsKit']];
    const result = formatSheetData(values);
    expect(result).toEqual({
      herocardtitle: 'Latest Blog',
    });
  });
});
