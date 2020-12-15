import * as newskit from '..';

describe('index exports', () => {
  test('all expected functions and components are exported', () => {
    expect(
      // Exclude icons as these will change between local and CI builds.
      Object.keys(newskit).filter(
        exportKey => !exportKey.match(/^Icon(?!Button)/),
      ),
    ).toMatchSnapshot();
  });

  test('no styled components are exported', () => {
    expect(
      // We should be prefixing all our internal styled comps with Styled - and these should not be exported.
      Object.keys(newskit).filter(exportKey => exportKey.startsWith('Styled')),
    ).toEqual([]);
  });
});
