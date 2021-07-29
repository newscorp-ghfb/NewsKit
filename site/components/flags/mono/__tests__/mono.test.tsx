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
          \\"className\\": \\"css-yct6su\\"
        }"
            data-testid="Flag"
          >
            Child Text
          </div>
        </DocumentFragment>
      `);
    });
  });
  describe('minimal', () => {
    it('should render as expected', () => {
      const fragment = renderToFragmentWithTheme(Mono, {
        minimal: true,
        children: 'Child Text',
      });
      expect(fragment).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-comp="NewsKit TextBlock"
            data-props="{
          \\"noCrop\\": true,
          \\"stylePreset\\": \\"flagMinimalNeutral\\",
          \\"typographyPreset\\": \\"utilityCode020\\"
        }"
            data-testid="TextBlock"
          >
            Child Text
          </div>
        </DocumentFragment>
      `);
    });
  });
});
