import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {CircleFlag} from '..';

jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Flag'),
);

describe('CircleFlag', () => {
  it('should render as expected', () => {
    const fragment = renderToFragmentWithTheme(CircleFlag, {});
    expect(fragment).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-comp="NewsKit Flag"
          data-props="{
        \\"overrides\\": {
          \\"paddingBlock\\": \\"space000\\",
          \\"paddingInline\\": \\"space000\\",
          \\"width\\": \\"sizing050\\",
          \\"height\\": \\"sizing050\\"
        },
        \\"size\\": \\"medium\\"
      }"
          data-testid="Flag"
        />
      </DocumentFragment>
    `);
  });
});
