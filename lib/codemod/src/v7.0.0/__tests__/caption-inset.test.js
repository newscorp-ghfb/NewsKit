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
  <Caption overrides={{
    paddingBlock: {
      xs: "space010",
      md: "space020"
    },

    paddingInline: {
      xs: "space010",
      md: "space020"
    },

    typographyPreset: "editorialCaption010"
  }} />
    `;
    //   test('replace caption-inset with caption with overrides', () => {
    //     source = dedent`
    //         import { CaptionInset, Button } from 'newskit';
    //         <CaptionInset overrides={{typographyPreset: 'editorialCaption010'}} />
    //     `;

    //     expected = dedent`
    // import { Caption, Button } from 'newskit';
    //   <Caption overrides={{
    //     paddingBlock: {
    //       xs: "space040",
    //       md: "space050"
    //     },

    //     paddingInline: {
    //       xs: "space040",
    //       md: "space050"
    //     },

    //     typographyPreset: "editorialCaption010"
    //   }} />
    //     `;

    actual = captionInsetTransform({source}, {jscodeshift});
    console.log(actual);
    expect(actual).toEqual(expected);
  });

  //   test('replace caption-inset with caption ', () => {
  //     source = dedent`
  //         import { CaptionInset, Button } from 'newskit';
  //         <CaptionInset />
  //     `;

  //     expected = dedent`
  //         import { Caption, Button } from 'newskit';
  //         <Caption />
  //     `;

  //     actual = captionInsetTransform({source}, {jscodeshift});
  //     expect(actual).toEqual(expected);
  //   });
});
