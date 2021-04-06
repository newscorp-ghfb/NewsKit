import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {CircleFlag} from '..';

jest.mock('newskit', () => ({
  ...(jest.requireActual('newskit') as any),
  Flag: (props: any) => `Flag - props: ${JSON.stringify(props, null, 2)}`,
}));

describe('CircleFlag', () => {
  it('should render as expected', () => {
    const fragment = renderToFragmentWithTheme(CircleFlag, {});
    expect(fragment).toMatchInlineSnapshot(`
      <DocumentFragment>
        Flag - props: {
        "overrides": {
          "spaceInset": "space000",
          "width": "sizing050",
          "height": "sizing050"
        },
        "size": "medium"
      }
      </DocumentFragment>
    `);
  });
});
