import React from 'react';
import {
  Block,
  newskitLightTheme,
  UnorderedList,
  InlineMessage,
  TextBlock,
} from 'newskit';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {CommonSection} from '../../templates/template-sections';
import {
  ComponentPageCell,
  ComponentPageCellCompact,
} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {getTokenType} from '../../utils/get-token-type';
import {Link} from '../../components/link';
import {MediaList} from '../../components/media-list';
import {Illustration} from '../../components/illustrations/illustration-loader';
import {ColorPalettes} from '../../components/theming-values/colors/colors';
import {ContentText} from '../../components/text-section';
import {TabsWithTable} from '../../components/tabs-with-table';
import {TableRow} from '../../components/table';
import {Code} from '../../components/code';
import {IconFilledError} from '../../../src/icons';
import {IconFilledAA, IconFilledAAA} from '../../components/icons';
import {
  INK_DESCRIPTION,
  INTERFACE_DESCRIPTION,
  INTERACTIVE_DESCRIPTION,
} from '../../utils/colors-token-description';

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

const featureCardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardoverrides;

const PRINCIPLE_CARDS = [
  {
    media: {
      src: 'static/theming/foundations/contextual-colours.svg',
      alt: '',
    },
    title: 'Contextual',
    description:
      'Colour is applied to a UI element based on it’s context, not just because it’s visually pleasing',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/expressive-colours.svg',
      alt: '',
    },
    title: 'Expressive',
    description:
      'Brand colours are added to key moments in the user journey to express brand identity and style',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/inclusive-colours.svg',
      alt: '',
    },
    title: 'Inclusive',
    description:
      'Important UI elements like text and icons are legible and meet accessibility contrast standards',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
];

const CUSTOM_ICONS = [
  {
    icon: IconFilledAAA,
    label:
      'Normal sized text on this colour will have Contrast ratio of 4.5:1 or over',
  },
  {
    icon: IconFilledAA,
    label:
      'Normal sized text on this colour will have Contrast ratio of 3:1 or over',
  },
  {
    icon: IconFilledError,
    label: 'Normal sized text on this colour will be inaccessible',
  },
];

const COLUMN_HEADER = ['Colour', 'Colour token', 'Token value', 'Common uses'];

const coloursTable = [
  {
    title: 'Ink',
    summary:
      'Ink colours are applied to typography and iconography. There are several variations available, each associated with a specific purpose within the design system.',
    tabs: [
      {
        header: 'Common',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('ink', INK_DESCRIPTION, [
          'inkBase',
          'inkContrast',
          'inkSubtle',
          'inkNonEssential',
          'inkInverse',
        ]),
        description:
          '‘Common’ Ink tokens are used to style most generic text and icons within a design such as headlines, subheadlines & body text.',
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
          '‘Status‘ Ink tokens are only used when providing user feedback. This can include error & success messages, feedback notifications etc.',
      },
      {
        header: 'Brand',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('ink', INK_DESCRIPTION, [
          'inkBrand010',
          'inkBrand020',
        ]),
        description:
          '‘Brand‘ Ink tokens are used where brand expression is required.',
      },
    ],
  },
  {
    title: 'Interface',
    summary:
      'Interface colours are applied to fills and borders on often static background UI elements including page backgrounds and dividers.',
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
          '‘Common’ interface tokens are used to style most structural, often static, component layers within a design such as card & page backgrounds.',
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
          '‘Status‘ interface tokens are used for background layers when providing user feedback. This can include error & success components such as banners and toasts.',
      },
      {
        header: 'Brand',
        columnHeader: COLUMN_HEADER,
        rows: themeColorRows('interface', INTERFACE_DESCRIPTION, [
          'interfaceBrand010',
          'interfaceBrand020',
        ]),
        description:
          '‘Brand‘ Interface tokens are used in areas where expression and brand identity is required. This can include components such as title bars, header and footer navigation.',
      },
    ],
  },
  {
    title: 'Interactive',
    summary:
      'Interactive colours are used to indicate and display interactions of certain components such as buttons, links and switches. Each set of interactive colours covers the various states needed. The base state uses the 030, the hover 040 and the active 050. The 010 and 020 are used for loading/progress states.',
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
          'interactiveDisabled010',
          'interactiveVisited010',
        ]),
        description:
          '‘Inverse‘ interactive colours are used to for situations where other interactive colours contrast between the background cannot be achieved.',
      },
    ],
  },
];

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Colours | Newskit design system',
      description:
        'Colour is key to expressing brand and identity but it also plays an important role in conveying meaning to a user. ',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Colours',
      hero: {
        illustration: 'foundations/colours/hero',
      },
      introduction: `Colour is key to expressing brand and identity but it also plays an important role in conveying meaning to a user. `,
    }}
    featureCard={{
      title: 'Iconography',
      description: 'Icons provide additional context to information.',
      href: '/foundations/iconography',
    }}
  >
    <CommonSection
      title="Overview"
      id="overview"
      toc="Overview"
      introduction={
        <>
          The NewsKit design system enables brands to utilise bespoke colour
          palettes appropriately and systematically while encouraging
          accessibility.
          <br />
          <br />
          Colours are applied to NewsKit components through well-defined rules
          at both the theme and component level. These rules help to establish a
          visual tone, indicate interaction and communicate meaning.
          Importantly, it also allows our brands to maintain their own unique
          identities.
        </>
      }
    />

    <CommonSection
      title="Principles"
      id="principles"
      toc="Principles"
      introduction=""
    >
      <ComponentPageCell>
        <MediaList layout="3-span" cardType="feature" cards={PRINCIPLE_CARDS} />
      </ComponentPageCell>
    </CommonSection>

    <CommonSection
      title="Palette colours"
      id="palettecolours"
      toc="Palette colours"
      introduction="Palette colours represent all of a brand’s colours. They are linked to contextual colour tokens where specific meaning (context) is applied. As such, careful consideration should be given if choosing to apply a palette colour directly applied to an interface rather than a contextual colour."
    >
      <ComponentPageCellCompact>
        <ContentText title="Understanding the swatches" titleAs="h3">
          <Block spaceStack="space030" />
          Utilise the swatches below to determine the accessibility of the
          palette colour in contrast to the background colour of this page
        </ContentText>

        {CUSTOM_ICONS.map(({icon, label}) => (
          <UnorderedList
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

        <Block spaceStack="space070" />
        <InlineMessage role="region" title="" aria-label="Palettecolours">
          Normal and large size text is defined by the WCAG AA standards as the
          the following: <br />
          <br />
          <b>Normal sized text</b>
          <br />
          The font size is at least 16px with a regular font weight or heavier.
          <br />
          <br />
          <b>Large sized text</b>
          <br />
          The font size is at least 18.66px with a bold font weight or 24px with
          regular font weight.
        </InlineMessage>
        <Block spaceStack="space080" />
        <ColorPalettes />
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Contextual colours"
      id="contextualcolours"
      toc="Contextual colours"
      hideSeparator={false}
      introduction="Contextual colours are selected from the palette colours and have specific functions or purposes applied. There are three categories of contextual colours: Ink, Interface and Interactive colours."
    >
      <ComponentPageCellCompact>
        <Block stylePreset="imageRoundedMedium" spaceStack="space050">
          <Illustration path="foundations/colours/overview" />
        </Block>
        <Link
          overrides={{typographyPreset: 'editorialParagraph030'}}
          href="/components/icons"
        >
          Learn more about the Icon component
        </Link>
        <Block spaceStack="space100" />
        <TabsWithTable components={coloursTable} />
        <ContentText>
          Colour can be applied to a UI element using the color, iconColor
          borderColor, placeholderColor and background attribute on a{' '}
          <Link href="/foundations/presets/space-presets/">Style Preset.</Link>
        </ContentText>
        <Block spaceStack="space080" />
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline020"
        >
          Example code
        </TextBlock>
        <Block spaceStack="space050" />
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
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Accessibility considerations"
      id="a11y"
      toc="Accessibility"
      introduction={
        <>
          Carefully consider what colours to assign to the NewsKit contextual
          colours to ensure important UI elements like text and icons are
          legible without compromising the aesthetic. Avoid using yellow or
          orange colours to convey a notice or warning intent because these
          colours paired with white text do not allow for sufficient colour
          contrast. Aim for contrast ratios that adhere to the{' '}
          <Link
            target="_blank"
            href="https://www.w3.org/TR/WCAG20-TECHS/G18.html"
          >
            WCAG AA standards:
          </Link>
        </>
      }
    >
      <ComponentPageCellCompact>
        <ContentText title="Contrast for text and images of text" titleAs="h3">
          Standard text and images of text must have a minimum of 4.5:1 contrast
          between the text colour and the background, except for the following:
        </ContentText>
        <ContentText title="Large text" titleAs="h4">
          Large-scale text and images of large-scale text must have a minimum of
          3:1 contrast between the text colour and the background.
        </ContentText>
        <ContentText title="Link text" titleAs="h4">
          Underline link text within the body text (inline link). Otherwise, in
          addition to the above, link text must have at least a 3:1 contrast
          between the link text colour and the surrounding non-link text colour.
        </ContentText>
        <ContentText title="Incidental text" titleAs="h4">
          Text or images of text that are part of an inactive component, pure
          decoration, or part of a picture containing significant other visual
          content do not have any contrast requirements.
        </ContentText>
        <ContentText title="Logotypes" titleAs="h4">
          Text that is part of a logo does not have any contrast requirements.
        </ContentText>
        <ContentText title="Contrast for non-text elements" titleAs="h3">
          User interface components and graphical objects must have at least a
          3:1 contrast between against adjacent colours.
        </ContentText>
      </ComponentPageCellCompact>
    </CommonSection>
  </FoundationPageTemplate>
);
