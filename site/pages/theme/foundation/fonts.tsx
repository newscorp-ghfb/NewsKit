import React from 'react';
import {InlineMessage, newskitLightTheme, toNewsKitIcon} from 'newskit';
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
      'text-align sets the horizontal position of text inside a block',
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
      'text-decoration sets the visual appearance of decorative lines on text (e.g. underline, overline and line-through)',
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
      'text-transform specifies how text elements are capitalised (e.g. uppercase, lowercase)',
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
      'white-space sets how whitespace is collapsed and whether lines are able to wrap at soft-wrap opportunities',
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
      'word-break sets whether line breaks appear when the text would otherwise overflow the containing box',
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
    title: 'Button before text crop',
    description:
      'Without the ability to crop text, the button text becomes misaligned when you change font family or font size.',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="theme/fonts/buttoncropped" />,
    title: 'Button after text crop',
    description:
      'With text cropping applied, the button label is always positioned correctly when you change font family or font size.',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="theme/fonts/cardnocrop" />,
    title: 'Card before text crop',
    description:
      'Without the ability to crop text, the layout of the card is unnecessarily elongated due to the misaligned spacing around the text blocks.',
    overrides: {
      title,
      description,
    },
  },
  {
    media: () => <Illustration path="theme/fonts/cardcropped" />,
    title: 'Card after text crop',
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
      introduction: `Fonts establish styles for content such as headlines and paragraphs, as well as more functional styles for items such as labels, tags and messaging.`,
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
              You can use custom typography with NewsKit.
              <br />
              <br />
              When you{' '}
              <Link href="/theme/theming/creating-a-theme/">
                create a theme in code
              </Link>{' '}
              or Figma, characteristics such as font family, font weight, letter
              spacing, line height and font style are applied in a systematic
              way.
              <br />
              <br />
              You can group font characteristics as{' '}
              <Link href="/theme/presets/typography-presets">
                typography presets
              </Link>{' '}
              that can be applied to text interface elements.
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
              A font family is a set of fonts with a shared design. For example,
              the Arial font family contains Arial, Arial Bold, Arial Bold
              Italic and Arial Italic. Font families are mapped to design
              tokens. You can apply a font family to any text element using the{' '}
              <InlineCode>fontFamily</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                typography preset.
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
            Consider a web safe fallback font when defining a font family. Learn
            more about web safe fonts.{' '}
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
              Font size is how large the characters are displayed on screen.
              It’s mapped to a scale of design tokens. You can apply font size
              to any text element using the <InlineCode>fontSize</InlineCode>{' '}
              attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                typography preset.
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
              Font weight is the thickness of the character stroke. It’s mapped
              to a scale of design tokens. You can apply font weight to any text
              element using the <InlineCode>fontWeight</InlineCode> attribute on
              a{' '}
              <Link href="/theme/presets/typography-presets">
                typography preset.
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
              Font line height is the vertical space between lines of text. It’s
              mapped to a scale of design tokens. You can apply font line height
              to any text element using the{' '}
              <InlineCode>fontLineHeight</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                typography preset.
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
              value, use <InlineCode>getLineHeight</InlineCode>. Your fonts will
              not be aligned otherwise.
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
              Font letter spacing is the horizontal space between characters.
              It’s mapped to a scale of design tokens. You can apply font letter
              spacing to any text element using the{' '}
              <InlineCode>fontLetterSpacing</InlineCode> attribute on a{' '}
              <Link href="/theme/presets/typography-presets">
                typography preset.
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
              You can apply the following properties to typography. They can be
              defined as part of the{' '}
              <Link href="/theme/presets/style-presets/">style presets.</Link>{' '}
              Using these properties in style presets promotes consistency
              through reuse of tokens.
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
            title="Font smoothing"
            overrides={{stylePreset: 'inlineMessageInformative'}}
            icon={icon}
            role="region"
            aria-label="typography"
          >
            To ensure typography in components is rendered smooth and crisp
            (rounded to the nearest pixel instead of subpixel), apply{' '}
            <InlineCode>-webkit-font-smoothing: antialiased</InlineCode>. Set
            this as a default across your product using Emotion’s global style
            component.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="text crop">
        <ContentPrimary
          id="textcrop"
          toc="Text crop"
          headline="Text crop"
          description="To reduce ‘pixel pushing', and to keep consistent and predictable spacing across multiple font families, use text cropping to remove additional space (leading) around text. This also helps maintain a 4px baseline, keeping interfaces ‘pixel perfect’."
        />

        <ContentSecondary
          headline="Benefits"
          description={
            <>
              Text cropping (sometimes referred to as leading trim) gives you a
              true representation of spacing and alignment when using text
              blocks.
            </>
          }
        />

        <ContentSecondary
          headline="Methods"
          description="
              Text cropping works by cropping the bounding box of the text block component. There are several methods to crop both 'top' and 'bottom'; by default, NewsKit uses a pairing of 'cap height' for the 'top' and 'baseline' for 'bottom'. This is done by configuring negative margins."
        />

        <ContentTertiary>
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Cap height',
                description:
                  'Crop to the top of an uppercase letter in the typeface (e.g. the top of an uppercase T).',
                media: getIllustrationComponent('theme/fonts/cap-height'),
              },
              {
                title: 'Baseline',
                description:
                  'Crop to the baseline of all lowercase letters in the typeface.',
                media: getIllustrationComponent('theme/fonts/baseline'),
              },
            ]}
          />
        </ContentTertiary>

        <ContentSecondary
          headline="Configure"
          description="You can configure text cropping in both the codebase and Figma."
        />

        <ContentTertiary
          headline="Code"
          description={
            <>
              Text cropping uses font metrics. This takes into account the
              nuances of each font and lets you easily generate the code needed
              using{' '}
              <Link href="https://seek-oss.github.io/capsize/" target="_blank">
                Capsize
              </Link>{' '}
              .
            </>
          }
        >
          <CodeFromFile path="examples/fonts/configuring-text-cropping.tsx" />
        </ContentTertiary>

        <ContentTertiary
          headline="Design"
          description={
            <>
              Use the{' '}
              <Link
                href="https://www.figma.com/community/plugin/951930713294228024/Text-Crop"
                target="_blank"
              >
                text crop plugin
              </Link>{' '}
              in Figma to crop a selected text block or all text block
              components on a page.
            </>
          }
        />

        <ContentSecondary
          headline="Apply"
          description="You can configure text cropping in both the codebase and Figma."
        />

        <ContentTertiary
          headline="Code"
          description={
            <>
              When using a text block component{' '}
              <Link href="/components/text-block/">text block</Link> in code,
              text crop is applied by default. You can remove it with a{' '}
              <InlineCode>noCrop</InlineCode>.
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

        <ContentSecondary headline="Examples" showSeparator>
          <MediaList layout="2-span" cardType="base" cards={EXAMPLE_CARDS} />
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="accessibility">
        <ContentPrimary
          id="accessibilityconsiderations"
          toc="Accessibility"
          headline="Accessibility Considerations"
          description={
            <>
              For typography accessibility considerations, see{' '}
              <Link href="/theme/presets/typography-presets">
                typography presets
              </Link>
              .
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Fonts;
