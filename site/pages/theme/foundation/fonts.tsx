import React from 'react';
import {
  InlineMessage,
  newskitLightTheme,
  toNewsKitIcon,
  UnorderedList,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentTertiary,
  ContentColSpan,
} from '../../../components/content-structure';
import {LayoutProps} from '../../../components/layout';
import {InlineCode} from '../../../components/markdown-elements';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {Code, CodeFromFile} from '../../../components/code';
import {MediaList} from '../../../components/media-list';
import {Link} from '../../../components/link';
import {
  getIllustrationComponent,
  Illustration,
} from '../../../components/illustrations/illustration-loader';
import {Table} from '../../../components/table';
import {getTokenType} from '../../../utils/get-token-type';
import {IconFilledCircle} from '../../../../src/icons';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

interface FontAttributesRow {
  tokenName: string;
  tokenValue: Record<string, string>;
}

const fontAttributes = (type: string) =>
  (getTokenType(newskitLightTheme.fonts, type) as FontAttributesRow[]).map(
    ({tokenName, tokenValue}) => ({
      [type]: tokenName,
      token: tokenName,
      value: tokenValue.toString(),
      fontFamily: tokenValue.fontFamily
        ?.split(',')[0]
        .replace('"', '')
        .replace('"', ''),
      classification: tokenValue.fontFamily?.split(',')[1],
    }),
  );

const additionalFontPropertiesRows = [
  {
    property: 'textAlign',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-align sets the horizontal position of text inside of a block',
  },
  {
    property: 'textDecoration',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-decoration sets the visual appearance of decorative lines on text',
  },
  {
    property: 'textOverflow',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-overflow sets how the user is informed of hidden overflow content',
  },
  {
    property: 'textTransform',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-transform specifies how elements of text are capitalised. e.g. uppercase, lowercase',
  },
  {
    property: 'whiteSpace',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'white-space sets how white space is collapsed and whether line are able to wrap at soft-wrap opportunities',
  },
  {
    property: 'wordBreak',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'word-break sets whether line breaks appear when the text would otherwise overflow the containing box ',
  },
];

const icon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const featureCardOverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardOverrides;

const EXAMPLE_CARDS = [
  {
    media: () => <Illustration path="theme/fonts/buttonnocrop" />,
    title: 'Button - before Text-crop',
    description:
      'Without the ability to crop text, the button text would be misaligned when changing font family or font size.',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="theme/fonts/buttoncropped" />,
    title: 'Button - after Text-crop',
    description:
      'With text-cropping applied the button label is consistently positioned correctly when changing the font family or font size.',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="theme/fonts/cardnocrop" />,
    title: 'Card - before Text-crop',
    description:
      'Without the ability to crop text, the layout of the card is unnecessarily elongated due to the misaligned spacing around the text blocks.',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="theme/fonts/cardcropped" />,
    title: 'Card - after Text-crop',
    description:
      ' With text cropping applied, the spacing in the card is aligned correctly to the text blocks and the overall size of the card is exactly as defined.',
    overrides: {
      title,
      description,
    },
  },
];

const Fonts = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Fonts',
      description:
        'Fonts form an important part of the interface, establishing styles for content such as headlines, sub-headlines or paragraphs, as well as more functional styles for items such as labels, tags and messaging.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Fonts',
      hero: {
        illustration: 'theme/fonts/hero',
      },
      introduction: `Fonts form an important part of the interface, establishing styles for content such as headlines, sub-headlines or paragraphs, as well as more functional styles for items such as labels, tags and messaging.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description={
            <>
              The NewsKit design system allows brands to define bespoke
              typography. Key characteristics such as font-family, font-weight,
              letter-spacing, line-height and font style are applied in a
              systematic way when creating a theme in Figma and{' '}
              <Link href="/theme/theming/creating-a-theme/">
                creating a theme in code
              </Link>
              . A combination of the key characteristics are grouped to form{' '}
              <Link href="/theme/presets/typography-presets">
                typography presets
              </Link>{' '}
              that are applied to text interface elements.
            </>
          }
          showSeparator
        >
          <Illustration path="theme/fonts/overview" />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="font attributes">
        <ContentPrimary
          id="fontattributes"
          toc="Font attributes"
          headline="Font attributes"
        />

        <ContentSecondary
          headline="Font family"
          description={
            <>
              Font family defines a set of characters of the same design. These
              characters include letters, numbers, punctuation marks, and
              symbols in various weights. Font families are mapped to design
              tokens. Font family can be applied to any text element using the{' '}
              <InlineCode>fontFamily</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                Typography Preset.
              </Link>
            </>
          }
        >
          <Table
            columns={['Token', 'Font family', 'Classification']}
            rows={fontAttributes('fontFamily')}
          />
        </ContentSecondary>

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            overrides={{stylePreset: 'inlineMessageInformative'}}
            icon={icon}
            role="region"
            aria-label="fallback font"
          >
            It is also important to consider a fallback font (web safe font)
            when defining a font family.{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
              target="_blank"
            >
              Learn more about web safe fonts.
            </Link>
          </InlineMessage>
        </ContentSecondary>

        <ContentSecondary
          headline="Font size"
          description={
            <>
              Font size defines how large the characters are displayed. Font
              sizes are mapped to a scale of design tokens. Font size can be
              applied to any text element using the{' '}
              <InlineCode>fontSize</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                Typography Preset.
              </Link>
            </>
          }
        >
          <Table
            columns={['Font size', 'Token', 'Value']}
            rows={fontAttributes('fontSize')}
          />
        </ContentSecondary>

        <ContentSecondary
          headline="Font weight"
          description={
            <>
              Font weight defines the thickness of the character stroke. Font
              weights are mapped to a scale of design tokens. Font weight can be
              applied to any text element using the{' '}
              <InlineCode>fontWeight</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                Typography Preset.
              </Link>
            </>
          }
        >
          <Table
            columns={['Font weight', 'Token', 'Value']}
            rows={fontAttributes('fontWeight')}
          />
        </ContentSecondary>

        <ContentSecondary
          headline="Font line-height"
          description={
            <>
              Font line-height defines the vertical space between lines of text
              and are mapped to a scale of design tokens. Font line-height can
              be applied to any text element using the{' '}
              <InlineCode>fontLineHeight</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                Typography Preset.
              </Link>
            </>
          }
        >
          <Table
            columns={['Font line height', 'Token', 'Value']}
            rows={fontAttributes('fontLineHeight')}
          />
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              To make sure your font styles round up or down to the nearest 4px
              value you need to use <InlineCode>getLineHeight</InlineCode> to
              acheive this, otherwise your fonts will not be aligned.
            </>
          }
        >
          <Code>
            lineHeight: getLineHeight(‘fontSize040’, ‘fontLineHeight020’)
          </Code>
        </ContentSecondary>

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            overrides={{stylePreset: 'inlineMessageInformative'}}
            icon={icon}
            role="region"
            aria-label="default base line"
          >
            The default baseline of NewsKit is 4px, and when calculating
            line-height for typographical styles we round either up or down to
            the nearest 4px value. This maintains a consistent visual approach
            when using typography across your UI designs.
          </InlineMessage>
        </ContentSecondary>

        <ContentSecondary
          headline="Font letter-spacing"
          description={
            <>
              Font letter-spacing defines the horizontal space between each
              character and are mapped to a scale of design tokens. Font
              letter-spacing can be applied to any text element using the{' '}
              <InlineCode>fontLetterSpacing</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                Typography Preset.
              </Link>
            </>
          }
        >
          <Table
            columns={['Font letter spacing', 'Token', 'Value']}
            rows={fontAttributes('fontLetterSpacing')}
          />
        </ContentSecondary>

        <ContentSecondary
          headline="Additional font properties"
          description={
            <>
              The following properties can be applied to typography. These can
              be defined as part of the{' '}
              <Link href="/theme/presets/style-presets/">Style Presets.</Link>{' '}
              Having these properties on Style Presets promotes greater reuse of
              tokens.
            </>
          }
        >
          <Table
            columns={['Property', 'Example', 'Description']}
            rows={additionalFontPropertiesRows}
          />
        </ContentSecondary>

        <ContentSecondary>
          <CodeFromFile path="examples/fonts/font-properties.tsx" />
        </ContentSecondary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            title="Font smooth"
            overrides={{stylePreset: 'inlineMessageInformative'}}
            icon={icon}
            role="region"
            aria-label="typography"
          >
            To ensure typography in components are rendered smooth and crisp
            (rounded to nearest pixel as opposed to the subpixel), apply{' '}
            <InlineCode>-webkit-font-smoothing: antialiased</InlineCode>.
            Emotion’s global style component can be used to set this as a
            default across your website.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="accessibility">
        <ContentPrimary
          id="accessibilityconsiderations"
          toc="Accessibility"
          headline="Accessibility Considerations"
          description={
            <>
              For accessibility considerations related to typography, please
              refer to the{' '}
              <Link href="/theme/presets/typography-presets">
                Typography Presets
              </Link>
              .
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="text crop">
        <ContentPrimary
          id="textcrop"
          toc="Text crop"
          headline="Text crop"
          description="To reduce ‘pixel-pushing' and to keep consistent and predictable spacing across multiple font families, text-cropping is applied to remove additional space (leading) around text. This utility also helps to maintain a 4px baseline; keeping interfaces ‘pixel-perfect’. "
        />

        <ContentSecondary
          headline="The benefits of text cropping"
          description={
            <>
              Text cropping (sometimes referred to as leading trim) is an
              important aspect when creating accurate layouts, allowing for a
              true representation of spacing and alignment when using{' '}
              <Link href="/components/text-block/">text blocks</Link>.
            </>
          }
        />

        <ContentSecondary
          headline="Text crop methods"
          description={
            <>
              Text-cropping works by cropping the bounding box of the text block
              component. The are several methods to crop both &apos;top&apos;
              and &apos;bottom&apos;, by default NewsKit uses a paring of
              &apos;Cap Height&apos; for the &apos;Top&apos; and
              &apos;Baseline&apos; for &apos;Bottom&apos;. This is achieved by
              configuring negative margins.
            </>
          }
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Cap height',
                description:
                  'This crops to the top of an uppercase letter in the typeface. An example would be the top of an uppercase T.',
                media: getIllustrationComponent('theme/fonts/cap-height'),
              },
              {
                title: 'Baseline',
                description:
                  'This crops to the baseline of all the lowercase letters in the typeface',
                media: getIllustrationComponent('theme/fonts/baseline'),
              },
            ]}
          />
        </ContentSecondary>

        <ContentSecondary
          headline="Configuring Text-cropping"
          description="Text-cropping can be configured in both the code base and Figma."
        />

        <ContentTertiary
          headline="Code"
          description={
            <>
              Text cropping is set up using font metrics, which allows for the
              easy generation of the code needed and takes into account the
              various nuances of each font used.
              <br />
              <br />
              You can generate the code needed using{' '}
              <Link href="https://seek-oss.github.io/capsize/" target="_blank">
                Capsize
              </Link>{' '}
              following the easy steps outlined on their website.
              <br />
              <br />
              <br />
              <UnorderedList
                markerAlign="start"
                listItemMarker={IconFilledCircle}
                overrides={{
                  spaceStack: 'space060',
                  paddingInline: 'space030',
                  content: {
                    typographyPreset: 'editorialParagraph030',
                  },
                }}
              >
                <>
                  Choose your font from Google Fonts, system, url or upload your
                  own unique font.
                </>
                <>
                  Edit and adjust the crop positions so that the letter H is
                  defining the cap height measurement. This is set by default
                  when you add your font, but you can fine tune this further if
                  needed.
                </>
                <>
                  Find the section where the crop data is displayed and then
                  copy this into your theme file for the font family you are
                  defining the text cropping data for.
                </>
              </UnorderedList>
              <br />
              When generating the font metrics for text cropping, we recommend
              that you only need to generate these for the 400 weight of your
              chosen font as this caters for most scenarios and weights. However
              you can provide different cropping data for other weights if you
              wanted these to be different, but the cropping data for the 400
              weight would always be used as a fallback if no additional data is
              provided.
            </>
          }
        >
          <CodeFromFile path="examples/fonts/configuring-text-cropping.tsx" />
        </ContentTertiary>

        <ContentTertiary
          headline="Design"
          description={
            <>
              When using a{' '}
              <Link href="/components/text-block/">Text Block</Link> in Figma,
              Text-crop is applied using the Text-crop plugin to crop the
              selected text-block or all text-block components on the page.
              Learn more about{' '}
              <Link
                href="https://www.figma.com/community/plugin/951930713294228024/Text-Crop"
                target="_blank"
              >
                Text-crop
              </Link>{' '}
              Figma plugin.
            </>
          }
        />

        <ContentSecondary
          headline="Applying Text-crop"
          description="Text-cropping can be configured in both the code base and Figma."
        />

        <ContentTertiary
          headline="Code"
          description={
            <>
              When using a{' '}
              <Link href="/components/text-block/">Text Block</Link> component
              in code, Text-crop is applied by default and can be removed by
              supplying a <InlineCode>noCrop</InlineCode>
            </>
          }
        >
          <Code>{`
  import React from 'react';
  import { TextBlock } from 'newskit';

  export default () => (
    <TextBlock noCrop>TextBlock Content</TextBlock>
  );
  `}</Code>
        </ContentTertiary>

        <ContentTertiary
          headline="Design"
          description={
            <>
              When using a{' '}
              <Link href="/components/text-block/">Text Block</Link> in Figma,
              Text-crop is applied using the Text-crop plugin to crop the
              selected text-block or all text-block components on the page.
              Learn more about{' '}
              <Link href="/components/text-block/">Text-crop</Link> Figma
            </>
          }
        />

        <ContentSecondary
          headline="Examples"
          description="Below are some examples of using Text-crop:"
          showSeparator
        >
          <MediaList layout="2-span" cardType="base" cards={EXAMPLE_CARDS} />
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Fonts;
