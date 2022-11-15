import {getValueFromCMS, formatSheetData} from '../utils';

describe('formatSheetData', () => {
  it('should convert google sheet data to an object', async () => {
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
  it('should remove the item whose value is undefined', async () => {
    const values = [['HeroCardTitle', 'Latest Blog'], ['NewsKit']];
    const result = formatSheetData(values);
    expect(result).toEqual({
      herocardtitle: 'Latest Blog',
    });
  });
});

describe('getValueFromCMS', () => {
  const content = {
    herocardtitle: 'Latest Blog',
    herocarddescription:
      "How an audio player component tells the story of NewsKit Design System's changing strategy",
    '': 'NewsKit',
  };
  it('should return the correct content', async () => {
    const result = getValueFromCMS(content, 'HeroCardTitle', 'NewsKit');
    expect(result).toEqual(content.herocardtitle);
  });
  it('should return feedback content if key is not found', async () => {
    const result = getValueFromCMS(content, 'LatestBlog', 'NewsKit');
    expect(result).toEqual('NewsKit');
  });
  it('should still return the correct content when case is not the same', async () => {
    const result = getValueFromCMS(content, 'Herocardtitle', 'NewsKit');
    expect(result).toEqual(content.herocardtitle);
  });
});
