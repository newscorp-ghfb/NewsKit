import {formatSheetData, getCMSList} from '../utils';

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

describe('getCMSList', () => {
  it('should return an array of items starting with a key', () => {
    const values = [
      ['foo_li_1', 'foo1'],
      ['foo_li_2', 'foo2'],
      ['foo_li_3', 'foo3'],
      ['bar', 'bar'],
      ['baz', 'baz'],
    ];
    const content = formatSheetData(values);
    const result = getCMSList(content, 'foo_li');
    expect(result).toEqual([
      ['foo_li_1', 'foo1'],
      ['foo_li_2', 'foo2'],
      ['foo_li_3', 'foo3'],
    ]);
  });
});
