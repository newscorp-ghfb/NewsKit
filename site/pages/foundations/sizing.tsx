import React from 'react';
import {
  Block,
  TextBlock,
  newskitLightTheme,
  InlineMessage,
  IconFilledInfo,
} from 'newskit';
import {MediaList} from '../../components/media-list';
import {Illustration} from '../../components/illustrations/illustration-loader';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {CommonSection} from '../../templates/template-sections';
import {Table, TableRow} from '../../components/table';
import {
  ComponentPageCell,
  ComponentPageCellCompact,
} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {getTokenType} from '../../utils/get-token-type';
import {Link} from '../../components/link';

const sizingRows = getTokenType(newskitLightTheme.sizing, 'sizing').map(
  ({tokenName, tokenValue}) => ({
    value: tokenValue,
    token: tokenName,
    sizeBox: tokenValue,
  }),
) as TableRow[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CellWrapper = ({children}: {children: any}) => (
  <ComponentPageCellCompact>{children}</ComponentPageCellCompact>
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

const PRINCIPLE_CARDS = [
  {
    media: {
      src: 'static/theming/foundations/flow.svg',
      alt: '',
    },
    title: 'Flow',
    description:
      'Consider the use of size to create a consistent visual rhythm',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/proportional.svg',
      alt: '',
    },
    title: 'Proportional',
    description:
      'Appropriately size interface elements to give more prominence to the content hierarchy',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/functional.svg',
      alt: '',
    },
    title: 'Functional',
    description:
      'Size elements for minimum touch target areas of interactive items to improve usability',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
];

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Sizing | Newskit design system',
      description:
        'Standardised sizing provides increased visual consistency in an interface.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Sizing',
      hero: {
        illustration: 'components/hero-sizing-illustration',
      },
      introduction: `Standardised sizing provides increased visual consistency in an interface.`,
    }}
  >
    <CommonSection title="Principles" id="principles" toc="Principles">
      <ComponentPageCell>
        <MediaList cards={PRINCIPLE_CARDS} />
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Overview"
      id="overview"
      toc="Overview"
      introduction="NewsKit uses a simple, standard sizing scale. The size of every UI element and the space between elements is defined by a 4px rule (or pt/rem)."
    >
      <CellWrapper>
        <Illustration path="foundations/sizing/overview" />
        <Block spaceStack="space050" />
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          All UI elements align to a 4px square baseline grid. This is to
          provide:
          <ul>
            <li>Increased visual consistency</li>
            <li>Increased efficiency: fewer design choices, less code</li>
            <li>
              Easier communication and reduced back and forth between design and
              engineering as the intent is clear and results are more
              predictable.
            </li>
            <li>Visual rhythm</li>
          </ul>
        </TextBlock>
        <Block spaceStack="space050" />
        <InlineMessage icon={infoIcon} aria-label="Distribution">
          Text that is centered within a component e.g. a button, does not need
          to sit on the grid as it is evenly distributed.
        </InlineMessage>
      </CellWrapper>
    </CommonSection>
    <CommonSection title="Why 4px?" id="why-4-px" toc="Why 4px?">
      <CellWrapper>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          A 4px rule provides a good balance of choice to a designer but,
          crucially, 4 is also divisible and this has some significant benefits:
          <ul>
            <li>
              Most popular screen sizes are divisible by 4, so grid columns fit
              the screen perfectly more often than not.
            </li>
            <li>
              Increasingly, platforms are allowing users to set their preferred
              ‘density’ to accommodate specific user needs. This may be
              increasing or decreasing font sizes or white space in and between
              page elements. A 4px scale allows us to scale consistently and
              continue to maintain the grid.
            </li>
          </ul>
        </TextBlock>
        <Block spaceStack="space060" />
        <Illustration path="foundations/sizing/why-4-px" />
      </CellWrapper>
    </CommonSection>
    <CommonSection
      title="Touch target areas"
      id="touch-target-areas"
      toc="Touch target areas"
    >
      <CellWrapper>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          To ensure that there is always a sufficient area for users to click or
          tap on interactive elements, there are a variety of component sizes
          eg. small, medium, and large buttons, text input, etc.
          <br />
          <br />
          On mobile breakpoints and devices, all interactive elements should
          have a touch target area of more than 44px². This ensures that it will
          meet the minimum standard for iOS and Android, whilst improving the
          user experience.
        </TextBlock>
        <Block spaceStack="space060" />
        <Illustration path="foundations/sizing/touch-target-areas" />
        <Block spaceStack="space060" />
        <InlineMessage icon={infoIcon} aria-label="Touch Target Areas">
          In most cases when there are multiple interactive elements in close
          proximity to one another, it is recommended to make sure touch target
          areas are separated by enough clear space (16px), to ensure balanced
          information density and usability.
        </InlineMessage>
      </CellWrapper>
    </CommonSection>
    <CommonSection
      title="Sizing tokens"
      id="sizing-tokens"
      toc="Sizing tokens"
      introduction="Sizing tokens are used to specify sizes throughout the system, such as icons, space, and minimum or maximum widths or heights. Sizing tokens are also used to define space tokens. Available sizes are outlined below:"
    >
      <CellWrapper>
        <Table columns={['Size box', 'Token', 'Value']} rows={sizingRows} />
      </CellWrapper>
    </CommonSection>
    <CommonSection title="Code Usage" id="code-usage" toc="Code Usage">
      <CellWrapper>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          The{' '}
          <Link href="/foundations/theming/component-defaults/">
            Component Defaults
          </Link>{' '}
          page details the different ways in which you can override and apply
          sizing to NewsKit components. For more advanced use cases, these
          values can be accessed from the theme by calling either:{' '}
          <Link href="/components/utils/get-defaults/">getResponsiveSize</Link>,
          emotion’s <Link href="/components/utils/emotion"> useTheme hook</Link>
          , or{' '}
          <Link href="/components/utils/get-css-from-theme/">
            getSizingCssFromTheme
          </Link>
          .
        </TextBlock>
      </CellWrapper>
    </CommonSection>
  </FoundationPageTemplate>
);
