import {formatSheetData, getValueFromCMS} from '../google-sheet';

describe('formatSheetData', () => {
  it('should convert google sheet data to an object', async () => {
    const values = [
      ['LatestBlogTitle', 'Latest Blog'],
      ['', 'NewsKit'],
    ];
    const result = formatSheetData(values);
    expect(result).toEqual({
      latestblogtitle: 'Latest Blog',
      '': 'NewsKit',
    });
  });
  it('should remove the item whose value is undefined', async () => {
    const values = [['LatestBlogTitle', 'Latest Blog'], ['NewsKit']];
    const result = formatSheetData(values);
    expect(result).toEqual({
      latestblogtitle: 'Latest Blog',
    });
  });
});

describe('getValueFromCMS', () => {
  const content = {
    latestblogtitle: 'Latest Blog',
    latestblogdescription:
      "How an audio player component tells the story of NewsKit Design System's changing strategy",
    '': 'NewsKit',
  };
  it('should return the correct content', async () => {
    const result = getValueFromCMS(content, 'LatestBlogTitle', 'NewsKit');
    expect(result).toEqual(content.latestblogtitle);
  });
  it('should return feedback content if key is not found', async () => {
    const result = getValueFromCMS(content, 'LatestBlog', 'NewsKit');
    expect(result).toEqual('NewsKit');
  });
  it('should still return the correct content when case is not the same', async () => {
    const result = getValueFromCMS(content, 'Latestblogtitle', 'NewsKit');
    expect(result).toEqual(content.latestblogtitle);
  });
});
