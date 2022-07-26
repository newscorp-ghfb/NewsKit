import * as newskit from '..';

describe('index exports', () => {
  test('all expected functions and components are exported', () => {
    expect(Object.keys(newskit).sort()).toMatchSnapshot();
  });

  test('no styled components are exported', () => {
    expect(
      // We should be prefixing all our internal styled comps with Styled - and these should not be exported.
      Object.keys(newskit)
        .sort()
        .filter(exportKey => exportKey.startsWith('Styled')),
    ).toEqual([]);
  });
});
