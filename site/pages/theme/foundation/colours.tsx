import React from 'react';
import {newskitLightTheme, UnorderedList, InlineMessage} from 'newskit';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {getTokenType} from '../../../utils/get-token-type';
import {Link} from '../../../components/link';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {ColorPalettes} from '../../../components/theming-values/colors/colors';
import {TabsWithTable} from '../../../components/tabs-with-table';
import {TableRow} from '../../../components/table';
import {Code} from '../../../components/code';
import {IconFilledError} from '../../../../src/icons';
import {IconFilledAA, IconFilledAAA} from '../../../components/icons';
import {
  INK_DESCRIPTION,
  INTERFACE_DESCRIPTION,
  INTERACTIVE_DESCRIPTION,
} from '../../../utils/colors-token-description';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentTertiary,
  ContentColSpan,
} from '../../../components/content-structure';

const themeColorRows = (
  type: string,
  data: Record<string, string | JSX.Element>,
  tokenTypes: string[],
) => {
  const tokens = getTokenType(newskitLightTheme.colors, type);
  const rows = tokens.reduce((result, current) => {
    const {tokenName, tokenValue} = current;
    if (tokenTypes.includes(tokenName)) {
      const color = {
        colour: tokenName,
        colourToken: tokenName,
        tokenValue: (tokenValue as string).split('.')[1].replace('}}', ''),
        commonUses: data[tokenName] || '-',
      };
      return [...result, color];
    }
    return result;
  }, [] as TableRow[]);
  return rows;
};

const CUSTOM_ICONS = [
  {
    icon: IconFilledAAA,
    label:
      'Regular sized text on this colour will have a contrast ratio of 4.5:1 or over',
  },
  {
    icon: IconFilledAA,
    label:
      'Regular sized text on this colour will have a contrast ratio of 3:1 or over',
  },
  {
    icon: IconFilledError,
    label: 'Regular sized text on this colour will be inaccessible',
  },
];

const COLUMN_HEADER = ['Colour', 'Colour token', 'Token value', 'Common uses'];

const coloursTable = [
  {
    title: 'Ink',
    summary:
      'Apply ink colours to typography and iconography. There are several variations, each with a specific purpose:',
    tabs: [
      {
        header: 'Common',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('ink', INK_DESCRIPTION, [
          'inkContrast',
          'inkBase',
          'inkSubtle',
          'inkNonEssential',
          'inkLight010',
          'inkDark010',
          'inkInverse',
        ]),
        description:
          'Use ‘common’ ink tokens to style most generic text and icons, including headlines, subheadlines and body text.',
      },
      {
        header: 'Status',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('ink', INK_DESCRIPTION, [
          'inkNegative',
          'inkPositive',
          'inkNotice',
          'inkInformative',
        ]),
        description:
          'Use ‘status‘ ink tokens to provide user feedback, including error and success messages and feedback notifications.',
      },
      {
        header: 'Brand',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('ink', INK_DESCRIPTION, [
          'inkBrand010',
          'inkBrand020',
        ]),
        description: 'Use ‘brand‘ ink tokens to express your brand.',
      },
    ],
  },
  {
    title: 'Interface',
    summary:
      'Apply interface colours to fills and borders on often-static background UI elements, including page backgrounds and dividers.',
    tabs: [
      {
        header: 'Common',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interface', INTERFACE_DESCRIPTION, [
          'interfaceBackground',
          'interface010',
          'interface020',
          'interface030',
          'interface040',
          'interface050',
          'interface060',
        ]),
        description:
          'Use ‘common’ interface tokens to style most structural, often static, component layers within a design, including card and page backgrounds.',
      },
      {
        header: 'Status',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interface', INTERFACE_DESCRIPTION, [
          'interfaceInformative010',
          'interfaceInformative020',
          'interfaceNotice010',
          'interfaceNotice020',
          'interfaceNegative010',
          'interfaceNegative020',
          'interfacePositive010',
          'interfacePositive020',
          'interfaceSkeleton010',
          'interfaceSkeleton020',
          'interfaceNeutral010',
          'interfaceNeutral020',
        ]),
        description:
          'Use ‘status‘ interface tokens for background layers when providing user feedback, including error and success components such as banners and toasts.',
      },
      {
        header: 'Brand',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interface', INTERFACE_DESCRIPTION, [
          'interfaceBrand010',
          'interfaceBrand020',
        ]),
        description:
          'Use ‘brand‘ interface tokens to express brand identity. This includes components such as title bars, headers and footer navigation.',
      },
    ],
  },
  {
    title: 'Interactive',
    summary:
      'Apply interactive colours to indicate and display interactions of components. This includes components such as buttons, links and switches.',
    tabs: [
      {
        header: 'Primary',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interactive', INTERACTIVE_DESCRIPTION, [
          'interactivePrimary010',
          'interactivePrimary020',
          'interactivePrimary030',
          'interactivePrimary040',
          'interactivePrimary050',
        ]),
        description:
          '‘Primary’ Interactive tokens are usually used to style the most prominent interactive elements. This includes common components such as buttons & inputs.',
      },
      {
        header: 'Secondary',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interactive', INTERACTIVE_DESCRIPTION, [
          'interactiveSecondary010',
          'interactiveSecondary020',
          'interactiveSecondary030',
          'interactiveSecondary040',
          'interactiveSecondary050',
        ]),
        description:
          '‘Secondary‘ Interactive tokens work alongside primary tokens to style interactive elements that require a secondary level of priority.',
      },
      {
        header: 'Positive',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interactive', INTERACTIVE_DESCRIPTION, [
          'interactivePositive010',
          'interactivePositive020',
          'interactivePositive030',
          'interactivePositive040',
          'interactivePositive050',
        ]),
        description:
          '‘Positive‘ interactive colours are used to provide visual feedback based on a user action. This can include confirmation CTA‘s such as ‘pay now‘.',
      },
      {
        header: 'Negative',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interactive', INTERACTIVE_DESCRIPTION, [
          'interactiveNegative010',
          'interactiveNegative020',
          'interactiveNegative030',
          'interactiveNegative040',
          'interactiveNegative050',
        ]),
        description:
          '‘Negative‘ interactive colours are used to provide visual feedback based on a user action. This can include destructive CTA‘s such as ‘delete‘.',
      },
      {
        header: 'Input',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interactive', INTERACTIVE_DESCRIPTION, [
          'interactiveInput010',
          'interactiveInput020',
          'interactiveInput030',
          'interactiveInput040',
          'interactiveInput050',
        ]),
        description:
          '‘Input‘ interactive colours are used for selection controls and input components.',
      },
      {
        header: 'Inverse',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interactive', INTERACTIVE_DESCRIPTION, [
          'interactiveInverse010',
          'interactiveInverse020',
          'interactiveInverse030',
          'interactiveInverse040',
          'interactiveInverse050',
        ]),
        description:
          '‘Inverse‘ interactive colours are used to for situations where other interactive colours contrast between the background cannot be achieved.',
      },
      {
        header: 'Common',
        columnHeader: ['Colour', 'Colour token', 'Token value', 'Common uses'],
        rows: themeColorRows('interactive', INTERACTIVE_DESCRIPTION, [
          'interactiveFocus010',
          'interactiveDisabled010',
          'interactiveVisited010',
        ]),
        description:
          'Use ‘common’ interactive tokens to indicate and display interactions of components that are links, or components in disabled, visited, and focus states.',
      },
    ],
  },
];

const Colours = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Colours',
      description:
        'Colours help express brand identity and convey meaning to users.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Colours',
      hero: {
        illustration: 'theme/colours/hero',
      },
      introduction: `Colours help express brand identity and convey meaning to users.`,
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
              NewsKit lets you use bespoke colour palettes while encouraging
              accessibility.
              <br />
              <br />
              The design system applies colours through well-defined rules at
              both the theme and component level. These rules help establish a
              visual tone, indicate interaction and communicate meaning - while
              maintaining your brand identity.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="palettecolours">
        <ContentPrimary
          id="palettecolours"
          toc="Palette colours"
          headline="Palette colours"
          description={
            <>
              Palette colours represent your brand’s colours.
              <br />
              <br />
              They’re linked to contextual colour tokens, which apply specific
              meaning (context).
              <br />
              <br />
              Consider whether a palette colour is best applied directly to an
              interface or as a contextual colour.
            </>
          }
        />

        <ContentSecondary
          headline="Swatches"
          description="Use the swatches below to determine the accessibility of the palette colour in contrast to the background colour of this page:"
          childrenColSpan={ContentColSpan.TEXT}
        >
          {CUSTOM_ICONS.map(({icon, label}) => (
            <UnorderedList
              key={label}
              listItemMarker={icon}
              overrides={{
                content: {
                  stylePreset: 'inkBase',
                  typographyPreset: 'editorialParagraph020',
                },
                marker: {
                  stylePreset: 'swatchBadge',
                  spaceInline: 'space040',
                  size: 'iconSize030',
                },
              }}
            >
              {label}
            </UnorderedList>
          ))}
        </ContentSecondary>

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage role="region" title="" aria-label="Palettecolours">
            The WCAG AA standards define regular and large text sizes as:
            <br />
            <br />
            <b>Regular</b>
            <br />
            Font size is at least 19px with a regular font weight or heavier.
            <br />
            <br />
            <b>Large</b>
            <br />
            Font size is at least 19px with a bold font weight or 24px with
            regular font weight.
          </InlineMessage>
        </ContentSecondary>

        <ContentSecondary showSeparator>
          <ColorPalettes />
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="contextualcolours">
        <ContentPrimary
          id="contextualcolours"
          toc="Contextual colours"
          headline="Contextual colours"
          description="Select contextual colours from the palette colours and apply specific functions or purposes. There are three categories of contextual colours: ink, interface and interactive."
        >
          <Illustration viewBox="0 0 1490 600" path="theme/colours/overview" />
        </ContentPrimary>

        <TabsWithTable components={coloursTable} showSeparator />

        <ContentSecondary
          description={
            <>
              Colour can be applied to a UI element using the color, iconColor
              borderColor, placeholderColor and background attribute on a{' '}
              <Link href="/theme/presets/style-presets/">style preset.</Link>
            </>
          }
        />

        <ContentSecondary headline="Code example" showSeparator>
          <Code>
            {`backgroundColor: '{{colors.inkBase}}';
backgroundColor: '{{colors.inkNegative}}';
backgroundColor: '{{colors.inkBrand010}}';
backgroundColor: '{{colors.interfaceBackground}}';
backgroundColor: '{{colors.interfaceInformative010}}';
backgroundColor: '{{colors.interactivePrimary010}}';
backgroundColor: '{{colors.interactivePrimary010}}';
backgroundColor: '{{colors.interactiveSecondary010}}';
backgroundColor: '{{colors.interactiveNegative010}}';
backgroundColor: '{{colors.interactiveInput010}}';
backgroundColor: '{{colors.interactiveVisited010}}';`}
          </Code>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="a11y">
        <ContentPrimary
          id="a11y"
          toc="Accessibility"
          headline="Accessibility"
          description={
            <>
              Choose your contextual colours carefully so important UI elements
              like text and icons are legible without compromising your
              aesthetic.
              <br />
              <br />
              Avoid yellow and orange for notices or warnings. Pairing these
              colours with white text does not allow for sufficient contrast.
              Aim for contrast ratios that meet{' '}
              <Link
                target="_blank"
                href="https://www.w3.org/TR/WCAG20-TECHS/G18.html"
              >
                WCAG AA standards.
              </Link>
            </>
          }
        />

        <ContentSecondary
          headline="Contrast for text and images of text"
          description="Standard text and images of text must have a minimum contrast of 4.5:1 between text colour and background, except for:"
        />

        <ContentTertiary
          headline="Large text"
          description="Large-scale text, and images of large-scale text, must have a minimum contrast of 3:1 between text colour and background."
        />

        <ContentTertiary
          headline="Link text"
          description="Link text must have a minimum contrast of 3:1 between link text colour and the surrounding non-link text colour. Link text within body text (inline link) should be underlined."
        />

        <ContentTertiary
          headline="Incidental text"
          description="Text, and images of text, that are part of an inactive component, purely decorative or part of a picture containing significant other visual content don’t have contrast requirements."
        />

        <ContentTertiary
          headline="Logotypes"
          description="Text that’s part of a logo doesn’t have contrast requirements."
        />

        <ContentSecondary
          headline="Contrast for non-text elements"
          description="User interface components and graphical objects must have a minimum contrast of 3:1 against adjacent colours."
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Colours;
