import slugify from '../slugify';

describe('Site helper slugify', () => {
  test('replaces spaces with dash', () => {
    const slugified = slugify('test case');
    expect(slugified).toEqual('test-case');
  });

  test('replace multiple — with single -', () => {
    const slugified = slugify('test-----case');
    expect(slugified).toEqual('test-case');
  });

  test('replaces special characters with dash', () => {
    const slugified = slugify('c·h/a_r,s:s;s');
    expect(slugified).toEqual('c-h-a-r-s-s-s');
  });

  test('replaces & with "-and-"', () => {
    const slugified = slugify('test&case');
    expect(slugified).toEqual('test-and-case');
  });

  test('Trim from start of text', () => {
    const slugified = slugify('     test');
    expect(slugified).toEqual('test');
  });

  test('Trim from end of text', () => {
    const slugified = slugify('test     ');
    expect(slugified).toEqual('test');
  });
});
