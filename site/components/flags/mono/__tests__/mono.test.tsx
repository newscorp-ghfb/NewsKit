import React from 'react';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {Mono} from '..';

jest.mock('newskit', () => ({
  ...(jest.requireActual('newskit') as any),
  Flag: ({children, ...props}: any) => (
    <span data-name="Flag" data-props={JSON.stringify(props, null, 2)}>
      {children}
    </span>
  ),
  TextBlock: (props: any) =>
    `TextBlock - props: ${JSON.stringify(props, null, 2)}`,
}));

describe('Mono', () => {
  describe('default', () => {
    it('should render as expected', () => {
      const fragment = renderToFragmentWithTheme(Mono, {
        children: 'Child Text',
      });
      expect(fragment).toMatchInlineSnapshot(`
        <DocumentFragment>
          <span
            data-name="Flag"
            data-props="{
          \\"overrides\\": {
            \\"typographyPreset\\": \\"utilityCode020\\",
            \\"stylePreset\\": \\"flagSolidNeutral\\"
          },
          \\"size\\": \\"medium\\",
          \\"className\\": \\"css-yct6su\\"
        }"
          >
            Child Text
          </span>
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
          TextBlock - props: {
          "noCrop": true,
          "stylePreset": "flagMinimalNeutral",
          "typographyPreset": "utilityCode020",
          "children": "Child Text"
        }
        </DocumentFragment>
      `);
    });
  });
});
