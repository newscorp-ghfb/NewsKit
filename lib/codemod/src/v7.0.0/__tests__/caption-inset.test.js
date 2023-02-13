const jscodeshift = require('jscodeshift');
const captionInsetTransform = require('../caption-inset');
const dedent = require('dedent-js');

describe('caption-inset', () => {
  let source;
  let expected;
  let actual;

  test('replace caption-inset with caption with overrides and space-inset', () => {
    source = dedent`
        import { CaptionInset, Button } from 'newskit';
        
        <CaptionInset
            overrides={{
                typographyPreset: 'editorialCaption010', 
                spaceInset: {
                    xs: 'spaceInset010',
                    md: 'spaceInset020',
                }
        }} />
    `;

    expected = dedent`
    import { Caption, Button } from 'newskit';
    
    <Caption
        overrides={{
            typographyPreset: "editorialCaption010",
    
            paddingBlock: {
                md: "space020",
                xs: "space010"
            },
    
            paddingInline: {
                md: "space020",
                xs: "space010"
            }
        }} />
    `;

    actual = captionInsetTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });
  test('replace caption-inset with caption with overrides without space-inset', () => {
    source = dedent`
        import { CaptionInset, Button } from 'newskit';
        
        <CaptionInset
            overrides={{
                typographyPreset: 'editorialCaption010', 
                anotherThing: 'hello',
                stylePreset: 'mono'
        }} />
    `;

    expected = dedent`
    import { Caption, Button } from 'newskit';
    
    <Caption
        overrides={{
            typographyPreset: "editorialCaption010",
            anotherThing: "hello",
            stylePreset: "mono",
            paddingBlock: "space020",
            paddingInline: "space020"
        }} />
    `;

    actual = captionInsetTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('replace caption-inset with caption without overrides', () => {
    source = dedent`
          import { CaptionInset, Button } from 'newskit';
          <CaptionInset />
      `;

    expected = dedent`
    import { Caption, Button } from 'newskit';
    <Caption
      overrides={{
        paddingBlock: "space020",
        paddingInline: "space020"
      }} />
      `;
    actual = captionInsetTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('replace caption-inset does not affect other components ', () => {
    source = dedent`
          import { Button } from 'newskit';
          <Button overrides={{spaceInset: "space020"}} />
      `;

    actual = captionInsetTransform({source}, {jscodeshift});
    expect(actual).toEqual(source);
  });
});
