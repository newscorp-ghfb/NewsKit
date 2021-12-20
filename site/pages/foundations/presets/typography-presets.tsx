import React from 'react';
import {
  Block,
  TextBlock,
  Tab,
  Tabs,
  H3,
  InlineMessage,
  newskitLightTheme,
  IconFilledInfo,
} from 'newskit';
import {getTokenType} from '../../../utils/get-token-type';
import {Code} from '../../../components/code';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {CommonSection} from '../../../templates/template-sections';
import {Table} from '../../../components/table';
import {ComponentPageCellCompact} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {Link} from '../../../components/link';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {MediaList} from '../../../components/media-list';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CellWrapper = ({children}: {children: any}) => (
  <ComponentPageCellCompact>{children}</ComponentPageCellCompact>
);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const tabOverrides = {
  typographyPreset: 'utilityButton020',
  stylePreset: 'tab',
};

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Typography | Newskit design system',
      description:
        'A collection of foundational font design tokens combined into a preset to define reusable typography styles for specific text elements..',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Typography presets',
      hero: {
        illustration: 'components/hero-typography-illustration',
      },
      introduction: `A collection of foundational font design tokens combined into a preset to define reusable typography styles for specific text elements..`,
    }}
  >
    <CommonSection
      title="Overview"
      id="overview"
      toc="Overview"
      introduction={
        <>
          Typography Presets define properties such as font-family, font-weight
          and line-height, in one design token. In combination with{' '}
          <Link href="/foundations/presets/style-presets">Style Presets</Link>,
          Sizing, and{' '}
          <Link href="/foundations/presets/space-presets/">Spacing</Link> they
          provide the visual attributes of a component.
        </>
      }
    />
    <CommonSection
      title="Default Typography Presets"
      id="default-typography-presets"
      toc="Default typography presets"
      introduction="There are two categories of Typography Presets, editorial and utility:"
    >
      <CellWrapper>
        <Tabs>
          <Tab overrides={tabOverrides} label="Editorial">
            <TextBlock
              stylePreset="inkBase"
              typographyPreset="editorialParagraph030"
            >
              These styles are used in more expressive scenarios where they may
              be more aligned to a brand style, these are used in components
              like the title bar and card.
            </TextBlock>
            <Block spaceStack="space080" />
            <Table
              columns={[
                'Typography preset',
                'Token',
                'Typography font family',
                'Typography font size',
                'Typography line height',
                'Typography font weight',
                'Typography letter spacing',
                'Common uses',
              ]}
              rows={editorialRows}
            />
          </Tab>
          <Tab overrides={tabOverrides} label="Utility">
            <TextBlock
              stylePreset="inkBase"
              typographyPreset="editorialParagraph030"
            >
              These styles are used in more functional scenarios where a clear
              message needs to be communicated, these are used in components
              like the buttons, tabs, inline messages, and banners.
            </TextBlock>
            <Block spaceStack="space080" />
            <Table
              columns={[
                'Typography preset',
                'Token',
                'Typography font family',
                'Typography font size',
                'Typography line height',
                'Typography font weight',
                'Typography letter spacing',
                'Common uses',
              ]}
              rows={utilityRows}
            />
          </Tab>
        </Tabs>
      </CellWrapper>
    </CommonSection>

    <CommonSection
      title="Apply Typography Presets"
      id="apply-typography-presets"
      toc="Apply Typography Presets"
      introduction={
        <>
          Typography Presets can be applied to NewsKit components in a number of
          ways, learn more about{' '}
          <Link href="/foundations/theming/using-a-theme/">using a theme</Link>{' '}
          to better understand the trade-offs associated with each approach. For
          more advanced use cases, Style Presets can be accessed from the theme
          by calling{' '}
          <Link href="/components/utils/get-defaults">getTypographyPreset</Link>{' '}
          or Emotion’s{' '}
          <Link href="/components/utils/emotion"> useTheme hook</Link>.
        </>
      }
    >
      <CellWrapper>
        <Block spaceStack="space060" />
        <H3
          overrides={{
            stylePreset: 'inkContrast',
            typographyPreset: {
              xs: 'editorialHeadline020',
              md: 'editorialHeadline030',
            },
          }}
        >
          Adding custom Typography Presets to the theme
        </H3>
        <Block spaceStack="space060" />
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          Custom Typography Presets can be added to the theme. See the{' '}
          <Link href="/foundations/theming/creating-a-theme/">
            Creating a theme
          </Link>{' '}
          guide for more details.
        </TextBlock>
        <Block spaceStack="space060" />
        <InlineMessage icon={infoIcon}>
          Thoroughly consider adding additional Typography Presets due to the
          impact on the theming feature when using multiple themes.
        </InlineMessage>
        <Block spaceStack="space090" />

        <H3
          overrides={{
            stylePreset: 'inkContrast',
            typographyPreset: {
              xs: 'editorialHeadline020',
              md: 'editorialHeadline030',
            },
          }}
        >
          Extending Typography Presets
        </H3>
        <Block spaceStack="space060" />
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          If additional CSS attributes are required on an existing Typography
          Preset, for ad hoc usage, pass a{' '}
          <Link href="/components/text-block/">Text Block</Link> to the styled
          function.
        </TextBlock>
        <Block spaceStack="space060" />
        <Code>
          {`import {TextBlock, styled} from 'newskit'

const ItalicTextBlock = styled(TextBlock)\`
  font-style:italic;
\`;

<ItalicTextBlock stylePreset="editorialParagraph010"> This Text is italic</ItalicTextBlock>`}
        </Code>
      </CellWrapper>
    </CommonSection>

    <CommonSection
      title="Text-crop"
      id="text-crop"
      toc="Text-crop"
      introduction="To keep consistent and predictable space from design to code, we use a
          text-cropping utility that removes additional space (leading) around a
          text block. This allows us to maintain our 4px baseline and keep
          designs pixel-perfect. Refer to the Text Crop documentation for more
          detailed information."
    />
    <CommonSection
      title="Accessibility Considerations"
      id="accessibility-considerations"
      toc="Accessibility Considerations"
      introduction="Legibility is core to the NewsKit typographic system. By following the
      guidelines below, we ensure consistency and readability across all
      typographic variations."
    >
      <CellWrapper>
        <Block spaceStack="space090" />
      </CellWrapper>
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
                While there is no official minimum font size for the web, it is
                generally agreed upon that 16px for body text is a good starting
                point.
                <br />
                <br />
                Of course, some text will be smaller for elements such as labels
                and headers will be larger.
                <br />
                <br />
                To ensure that text is legible, NewsKit recommended that the
                smallest font-size applied to text is no less 12px for web.
              </>
            ),
            media: getIllustrationComponent('foundations/typography/font-size'),
          },
          {
            title: 'Line Height',
            description: (
              <>
                Providing an adequate amount of space between lines is critical
                to the legibility of text. As per W3C accessibility guidelines
                line spacing should be at least space-and-a-half within
                paragraphs, and paragraph spacing is at least 1.5 times larger
                than the line spacing.
                <br />
                <br />
                Using relative line-heights, NewsKit ensures consistent spacing
                of all headings and body-text sizes. Heading and Headline styles
                are set to a default of 1.125-times the font size and body text
                set at 1.5-times the font size.
              </>
            ),
            media: getIllustrationComponent(
              'foundations/typography/line-height',
            ),
          },
          {
            title: 'Line length',
            description: (
              <>
                Line-length, also known as a measure, is the number of
                characters contained in a line of text. Line-length should fall
                between 50 and 80 characters wide, including spaces, to ensure
                readability.
                <br />
                <br />
                Lines narrower than 50 characters require the eye to jump to the
                next line too frequently, breaking the reader’s rhythm. Lines
                wider than 80 characters make it difficult to continue to the
                correct line in a large body of the text.
              </>
            ),
            media: getIllustrationComponent(
              'foundations/typography/line-length',
            ),
          },
        ]}
      />
    </CommonSection>
  </FoundationPageTemplate>
);
