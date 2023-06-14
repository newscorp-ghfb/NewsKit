import React from 'react';
import {InlineMessage, newskitLightTheme, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {TabsWithTable} from '../../../components/tabs-with-table';
import {getTokenType} from '../../../utils/get-token-type';
import {Code} from '../../../components/code';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {Link} from '../../../components/link';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {MediaList} from '../../../components/media-list';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const commonUses: Record<string, string> = {
  utilityHeading:
    'Used for heading utility text such as for modals and drawers.',
  utilitySubheading:
    'Used for sub heading utility text such as for modals and drawers.',
  utilityBody: 'Used for text inputs and banners.',
  utilityLabel: 'Used for text labels such as for menus and lists.',
  utilityMeta: 'Used for bylines and date time.',
  utilityButton: 'Used for button text and standalone links.',
  editorialDisplay: 'Used for large pieces of text content.',
  editorialHeadline:
    'Used for headline text content such as for cards and title bars.',
  editorialSubheadline: 'Used for sub headline text content such as for cards.',
  editorialParagraph: 'Used for body text content such as for article text.',
  editorialQuote: 'Used for quotes in body text content.',
  editorialCaption: 'Used for captions such as for the image with caption.',
  editorialDropCap: 'Used for the dropCap, as part of body text.',
  editorialLabel:
    'Used for non-interactive identifiers that are often defined by an editor, for example the author label in a card.',
};

const strip = (value: string, column: number = 0) =>
  value?.replace('}}', '').replace('{{', '').split('.')[column];

interface TypographyRow {
  tokenName: string;
  tokenValue: Record<string, string>;
}

const extractValues = (row: TypographyRow) => {
  const {
    tokenName,
    tokenValue: {fontFamily, fontSize, fontWeight, letterSpacing, lineHeight},
  } = row;

  return {
    typographyPreset: {
      preset: tokenName,
      config: {
        isItalic: tokenName.toLowerCase().includes('quote'),
      },
    },
    token: tokenName,
    typographyFontFamily: strip(fontFamily, 1),
    typographyFontSize: strip(fontSize, 1),
    typographyFontWeight: strip(fontWeight, 1),
    typographyLetterSpacing: strip(letterSpacing, 1),
    typographyLineHeight:
      typeof lineHeight === 'string' ? strip(lineHeight, 1) : lineHeight,
    commonUses: commonUses[tokenName.slice(0, tokenName.length - 3)],
  };
};

const editorialRows = (getTokenType(
  newskitLightTheme.typographyPresets,
  'editorial',
) as TypographyRow[]).map(extractValues);

const utilityRows = (getTokenType(
  newskitLightTheme.typographyPresets,
  'utility',
) as TypographyRow[]).map(extractValues);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const COLUMN_HEADER = [
  'Typography preset',
  'Token',
  'Typography font family',
  'Typography font size',
  'Typography line height',
  'Typography font weight',
  'Typography letter spacing',
  'Common uses',
];

const typographyPresetsTable = [
  {
    tabs: [
      {
        header: 'Editorial',
        columnHeader: COLUMN_HEADER,
        rows: editorialRows,
        description:
          'Use these styles in more expressive scenarios where you want to align more closely with your brand style, such as title bars and cards.',
      },
      {
        header: 'Utility',
        columnHeader: COLUMN_HEADER,
        rows: utilityRows,
        description:
          'Use these styles in more functional scenarios where a clear message needs to be communicated (e.g. buttons, tabs, inline messages and banners).',
      },
    ],
  },
];

const TypographyPresets = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Typography',
      description:
        'A collection of foundational font design tokens combined into a preset to define reusable typography styles for specific text elements.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Presets',
      name: 'Typography presets',
      hero: {
        illustration: 'components/hero-typography-illustration',
      },
      introduction: `A collection of foundational font design tokens combined into a preset to define reusable typography styles for specific text elements.`,
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
              Typography presets define properties such as font-family,
              font-weight and line-height, in one design token. In combination
              with{' '}
              <Link href="/theme/presets/style-presets">style presets</Link>,
              <Link href="/theme/foundation/sizing/">sizing</Link>, and{' '}
              <Link href="/theme/foundation/spacing/">spacing</Link> they
              provide the visual attributes of a component.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="default-typography-presets">
        <ContentPrimary
          id="default-typography-presets"
          toc="Default typography presets"
          headline="Default typography presets"
        />
        <TabsWithTable showSeparator components={typographyPresetsTable} />
      </ContentSection>
      <ContentSection sectionName="apply-typography-presets">
        <ContentPrimary
          id="apply-typography-presets"
          toc="Apply typography presets"
          headline="Apply typography presets"
          description={
            <>
              You can apply typography presets to components in several ways.
              Learn more about{' '}
              <Link href="/theme/theming/using-a-theme/">using a theme</Link> to
              better understand the trade-offs associated with each approach.
              <br />
              <br />
              For more advanced use cases, access style presets from the theme
              by calling{' '}
              <Link href="/components/utils/get-defaults">
                getTypographyPreset
              </Link>{' '}
              or Emotion’s{' '}
              <Link href="/components/utils/emotion"> useTheme hook</Link>.
            </>
          }
        />

        <ContentSecondary
          headline="Add custom typography presets to the theme"
          description={
            <>
              You can add custom typography presets to the theme. See the{' '}
              <Link href="/theme/theming/creating-a-theme/">
                creating a theme
              </Link>{' '}
              guide for more.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        >
          <InlineMessage icon={infoIcon}>
            Thoroughly consider adding additional typography presets due to the
            impact on the theming feature when using multiple themes.
          </InlineMessage>
        </ContentSecondary>

        <ContentSecondary
          headline="Extend typography presets"
          description={
            <>
              If you need additional CSS attributes on an existing typography
              preset for ad hoc usage, pass a{' '}
              <Link href="/components/text-block/">text block</Link> to the
              styled function:
            </>
          }
          showSeparator
        >
          <Code>
            {`import {TextBlock, styled} from 'newskit'

const ItalicTextBlock = styled(TextBlock)\`
font-style:italic;
\`;

<ItalicTextBlock typographyPreset="editorialParagraph010"> This Text is italic</ItalicTextBlock>`}
          </Code>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="text-crop">
        <ContentPrimary
          id="text-crop"
          toc="Text-crop"
          headline="Text-crop"
          description="To keep consistent and predictable spacing from design to code, 
          we use a text cropping utility to remove additional space (leading) around 
          text blocks. This lets you maintain a 4px baseline and keeps designs pixel 
          perfect. See the text crop documentation for more."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="accessibility-considerations">
        <ContentPrimary
          id="accessibility-considerations"
          toc="Accessibility"
          headline="Accessibility"
          description="Legibility is crucial in typography. Here’s how to keep things consistent and readable:
          "
        >
          <MediaList
            cardsLayout={{
              xs: 'vertical',
              sm: 'vertical',
              md: 'horizontal',
              lg: 'horizontal',
              xl: 'horizontal',
            }}
            layout="1-span"
            cards={[
              {
                title: 'Font size',
                description: (
                  <>
                    While there’s no official minimum font size for the web,
                    it’s generally agreed that 16px for body text is a good
                    starting point.
                    <br />
                    <br />
                    Of course, text will be smaller for elements such as labels
                    and larger for headers.
                    <br />
                    <br />
                    We recommend not going smaller than 12px.
                  </>
                ),
                media: getIllustrationComponent('theme/typography/font-size'),
              },
              {
                title: 'Line Height',
                description: (
                  <>
                    Adequate space between lines is critical to text legibility.
                    W3C accessibility guidelines say line spacing should be at
                    least space-and-a-half within paragraphs, and paragraph
                    spacing should be at least 1.5 times larger than line
                    spacing.
                    <br />
                    <br />
                    NewsKit uses relative line heights to ensure consistent
                    spacing for all headings and body text sizes. Heading and
                    headline styles are set to a default of 1.125x the font size
                    and body text set at 1.5x the font size.
                  </>
                ),
                media: getIllustrationComponent('theme/typography/line-height'),
              },
              {
                title: 'Line length',
                description: (
                  <>
                    Line length (also known as a measure) is the number of
                    characters in a line of text. For readability, keep between
                    50 and 80 characters, including spaces.
                    <br />
                    <br />
                    Lines narrower than 50 characters require the eye to jump to
                    the next line too frequently, breaking the reader’s rhythm.
                    Lines wider than 80 characters make it difficult to continue
                    to the correct line in a large body of text.
                  </>
                ),
                media: getIllustrationComponent('theme/typography/line-length'),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default TypographyPresets;
