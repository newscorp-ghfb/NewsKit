import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {Mono} from '..';

jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents(
    'Flag',
    'TextBlock',
  ),
);

describe('Mono', () => {
  describe('default', () => {
    it('should render as expected', () => {
      const fragment = renderToFragmentWithTheme(Mono, {
        children: 'Child Text',
      });
      expect(fragment).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-comp="NewsKit Flag"
            data-props="{
          \\"overrides\\": {
            \\"typographyPreset\\": \\"utilityCode020\\",
            \\"stylePreset\\": \\"flagSolidNeutral\\"
          },
          \\"size\\": \\"small\\",
          \\"as\\": \\"span\\"
        }"
            data-testid="Flag"
          >
            Child Text
          </div>
        </DocumentFragment>
      `);
    });
  });
});
