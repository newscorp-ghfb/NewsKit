import React from 'react';
import {Block, P, InlineMessage, newskitLightTheme, Divider} from 'newskit*';
import {Table, TableRow} from '../../../components/table';
import {getTokenType} from '../../../utils/get-token-type';
import {Mono} from '../../../components/flags';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {
  BehaviorsSection,
  CommonSection,
} from '../../../templates/template-sections';
import {
  ComponentPageCell,
  ComponentPageCellCompact,
} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {
  Illustration,
  getIllustrationComponent,
} from '../../../components/illustrations/illustration-loader';
import {MediaList} from '../../../components/media-list';
import {ContentText} from '../../../components/text-section';
import {TabsWithTable} from '../../../components/tabs-with-table';
import {Link} from '../../../components/link';

const getSpaceRowsDescription = (type: string) => {
  const tokens = getTokenType(
    newskitLightTheme.sizing,
    type,
  ).map(({tokenValue}) => tokenValue.toString());
  return tokens.toString();
};

const spaceTable = getTokenType(newskitLightTheme.spacePresets, 'space').reduce(
  (result, {tokenName, tokenValue}) => {
    if (tokenName.indexOf('spaceInset') === -1) {
      const tokenObject = {
        token: tokenName,
        value:
          (tokenValue as string).split('{{sizing.')[1].replace('}}', '') +
          ((tokenValue as string).split('{{sizing.')[2]
            ? `${(tokenValue as string)
                .split('{{sizing.')[2]
                ?.replace('}}', '')}`
            : ''),
        description:
          getSpaceRowsDescription(
            (tokenValue as string).split('{{sizing.')[1].replace('}}', ''),
          ) || '-',
      };
      return [...result, tokenObject];
    }
    return result;
  },
  [] as TableRow[],
);

const getSpaceInsetRowsDescription = (types: string[]) => {
  const type1 = types[0];
  const type2 = types[1] || types[0];
  const topBottom = getTokenType(newskitLightTheme.sizing, type1)[0]
    ?.tokenValue;
  const leftRight = getTokenType(newskitLightTheme.sizing, type2)[0]
    ?.tokenValue;
  return `${topBottom} ${leftRight} ${topBottom} ${leftRight}`;
};

const spaceInsetTabRows = (tokenTypes: string[]) => {
  const tokens = getTokenType(newskitLightTheme.spacePresets, 'space');
  const rows = tokens.reduce((result, current) => {
    const {tokenName, tokenValue} = current;
    const descriptionValue = getSpaceInsetRowsDescription(
      (tokenValue as string).split('{{sizing.')[2]
        ? [
            (tokenValue as string)
              .split('{{sizing.')[1]
              .replace('}}', '')
              .trim(),
            (tokenValue as string)
              .split('{{sizing.')[2]
              ?.replace('}}', '')
              .trim(),
          ]
        : [
            (tokenValue as string)
              .split('{{sizing.')[1]
              .replace('}}', '')
              .trim(),
          ],
    );
    if (tokenTypes.includes(tokenName)) {
      const spacing = {
        example: (
          <div
            style={{
              width: newskitLightTheme.sizing.sizing110,
              height: newskitLightTheme.sizing.sizing110,
              padding: descriptionValue,
              background: '#bfb6f1',
            }}
          >
            <div
              style={{
                height: '100%',
                background: '#f4f4f4',
              }}
            />
          </div>
        ),
        token: tokenName,
        value:
          (tokenValue as string).split('{{sizing.')[1].replace('}}', '') +
          ((tokenValue as string).split('{{sizing.')[2]
            ? `${(tokenValue as string)
                .split('{{sizing.')[2]
                ?.replace('}}', '')}`
            : ''),
        description: descriptionValue,
      };
      return [...result, spacing];
    }
    return result;
  }, [] as TableRow[]);
  return rows;
};

const spaceInsetTable = [
  {
    tabs: [
      {
        header: 'Space Inset',
        columnHeader: ['Example', 'Token', 'Value', 'Description'],
        rows: spaceInsetTabRows([
          'spaceInset000',
          'spaceInset010',
          'spaceInset020',
          'spaceInset030',
          'spaceInset040',
          'spaceInset050',
          'spaceInset060',
          'spaceInset070',
          'spaceInset080',
          'spaceInset090',
          'spaceInset100',
          'spaceInset110',
          'spaceInset120',
        ]),
      },
      {
        header: 'Squish Inset',
        columnHeader: ['Example', 'Token', 'Value', 'Description'],
        rows: spaceInsetTabRows([
          'spaceInsetSquish000',
          'spaceInsetSquish010',
          'spaceInsetSquish020',
          'spaceInsetSquish030',
          'spaceInsetSquish040',
          'spaceInsetSquish050',
          'spaceInsetSquish060',
        ]),
      },
      {
        header: 'Stretch Inset',
        columnHeader: ['Example', 'Token', 'Value', 'Description'],
        rows: spaceInsetTabRows([
          'spaceInsetStretch000',
          'spaceInsetStretch010',
          'spaceInsetStretch020',
          'spaceInsetStretch030',
          'spaceInsetStretch040',
          'spaceInsetStretch050',
          'spaceInsetStretch060',
        ]),
      },
    ],
  },
];

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
      src: 'static/theming/foundations/relational.svg',
      alt: '',
    },
    title: 'Relational',
    description:
      'Use spacing to visually communicate elements that are connected',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/guided.svg',
      alt: '',
    },
    title: 'Guided',
    description:
      'Use appropriate hierarchy to lead the user to the most important information',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/balanced-spacing.svg',
      alt: '',
    },
    title: 'Balanced',
    description:
      'Arrange elements and white space so that no part of the design overpowers the others',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
];

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Spacing | Newskit design system',
      description:
        'Space helps to guide the user and provide a pleasant and consistent experience when using a product.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Spacing',
      hero: {
        illustration: 'foundations/spacing/hero',
      },
      introduction: `Space helps to guide the user and provide a pleasant and consistent experience when using a product.`,
    }}
    featureCard={{
      title: 'Motion',
      description:
        'Motion is used to create movement and narrative within a product.',
      href: '/foundations/motions/',
    }}
  >
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
      title="Overview"
      id="overview"
      toc="Overview"
      introduction="Space is distance between elements on a screen often refered to as the whitespace. Good use of whitespace helps to de-clutter and group content to provide a visual hierarchy so that users can focus on the important elements and digest content with reduced cognitive load."
    >
      <ComponentPageCellCompact>
        <Block spaceStack="space050">
          <Illustration path="foundations/spacing/overview" />
        </Block>
        <Block spaceStack="space070">
          <P>
            Space tokens define the space throughout the system, such as the
            distance between an icon and the label in a button. The space tokens
            define three categories to control margin and padding for specific
            use cases, these are: <Mono>spaceInset</Mono>,{' '}
            <Mono>spaceInline</Mono>, and <Mono>spaceStack</Mono>.
            <br />
            <br />
            Available space design tokens are outlined below:
          </P>
        </Block>
        <Block spaceStack="space070">
          <Table
            columns={['Token', 'Value', 'Description']}
            rows={spaceTable}
          />
          <Divider />
        </Block>
        <Block spaceStack="space070">
          <InlineMessage>
            Avoid using generic spacing tokens directly, in favor use the more
            specific options such as: spaceInset, spaceInline, and spaceStack as
            described in the following sections. When these don&apos;t meet your
            needs, you can use the generic variables to keep spatial concepts
            consistent.
          </InlineMessage>
        </Block>
        <ContentText title="Code usage">
          The{' '}
          <Link href="/foundations/theming/component-defaults/">
            Component Defaults
          </Link>{' '}
          page details the different ways in which you can override and apply
          space inset to NewsKit components. For more advanced use cases, these
          values can be accessed from the theme by calling either:
          <Link href="/components/utils/get-defaults/">
            getResponsiveSpacing
          </Link>
          , emotion&apos;s{' '}
          <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
          <Link href="/components/utils/get-css-from-theme/">
            getSpacingCssFromTheme
          </Link>
          .
        </ContentText>
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Space Inset"
      id="spaceinset"
      toc="Space Inset"
      introduction={
        <>
          Space Inset is the space within a component (padding). By default, a
          component&apos;s inset should be equal on all four sides.
          <br />
          Squish Inset reduces top and bottom padding relative to the default
          inset space.
          <br />
          Stretch Inset increases top and bottom padding relative to the default
          inset space.
        </>
      }
    >
      <ComponentPageCellCompact>
        <Illustration path="foundations/spacing/space-inset" />
        <Block spaceStack="space090" />
        <TabsWithTable components={spaceInsetTable} />
        <Divider />
        <Block spaceStack="space090" />
        <ContentText title="Code usage">
          The{' '}
          <Link href="/foundations/theming/component-defaults/">
            Component Defaults
          </Link>{' '}
          page details the different ways in which you can override and apply
          space inset to NewsKit components. For more advanced use cases, these
          values can be accessed from the theme by calling either:
          <Link href="/components/utils/get-defaults/">
            getResponsiveSpacing
          </Link>
          , emotion&apos;s{' '}
          <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
          <Link href="/components/utils/get-css-from-theme/">
            getSpacingCssFromTheme
          </Link>
          .
        </ContentText>
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Space Inline"
      id="spaceinline"
      toc="Space Inline"
      introduction={
        <>
          Space Inline is most often the space to the right of elements
          (margin-right), however, if a component changes orientation, then the
          flow changes the position of the margin.
          <br />
          If the flow is row or horizontal this will be applied as margin-right.
          <br />
          If the flow is column or vertical this will be applied as
          margin-bottom.
        </>
      }
    >
      <ComponentPageCellCompact>
        <Illustration path="foundations/spacing/space-inline" />
        <Block spaceStack="space090" />
        <ContentText title="Code usage">
          The{' '}
          <Link href="/foundations/theming/component-defaults/">
            Component Defaults
          </Link>{' '}
          page details the different ways in which you can override and apply
          space inline to NewsKit components. For more advanced use cases, these
          values can be accessed from the theme by calling either:
          <Link href="/components/utils/get-defaults/">
            getResponsiveSpacing
          </Link>
          , emotion&apos;s{' '}
          <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
          <Link href="/components/utils/get-css-from-theme/">
            getSpacingCssFromTheme
          </Link>
          . Space inline should generally only be applied to{' '}
          <Mono>margin-right</Mono> and <Mono>margin-bottom</Mono>.
        </ContentText>
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Space Stack"
      id="spacestack"
      toc="Space Stack"
      introduction={
        <>
          Space Stack is most often the space to the bottom of elements
          (margin-bottom, however, if a component changes orientation, then the
          flow changes the position of the margin.
          <br />
          If the flow is row or horizontal this should be applied as
          margin-bottom.
          <br />
          If the flow is column or vertical this should be applied as
          margin-right.
        </>
      }
    >
      <ComponentPageCellCompact>
        <Illustration path="foundations/spacing/space-stack" />
        <Block spaceStack="space090" />
        <ContentText title="Code usage">
          The{' '}
          <Link href="/foundations/theming/component-defaults/">
            Component Defaults
          </Link>{' '}
          page details the different ways in which you can override and apply
          space stack to NewsKit components. For more advanced use cases, these
          values can be accessed from the theme by calling either:
          <Link href="/components/utils/get-defaults/">
            getResponsiveSpacing
          </Link>
          , emotion&apos;s{' '}
          <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
          <Link href="/components/utils/get-css-from-theme/">
            getSpacingCssFromTheme
          </Link>
          . Space stack should generally only be applied to{' '}
          <Mono>margin-right</Mono> and <Mono>margin-bottom</Mono>.
        </ContentText>
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Text Crop"
      id="textcrop"
      toc="Text Crop"
      introduction={
        <>
          To keep consistent and predictable spacing from design to code, we use
          a text-crop utility that removes additional space (leading) around a
          text block. This allows us to maintain our 4px baseline and keep
          designs pixel-perfect.{' '}
          <Link href="/foundations/theming/creating-a-theme/">
            Read more about text crop here.
          </Link>
        </>
      }
    />

    <BehaviorsSection
      title="Common components that utilise space"
      toc="Common components"
      introduction="The following two components are the most common components that utilise space throughout the system:"
      cards={[
        {
          title: 'Stack component',
          description: (
            <>
              The Stack component enables items to be distributed evenly in
              vertical or horizontal &apos;stacks&apos; (similar to FlexBox).{' '}
              <Mono>spaceStack</Mono> and <Mono>spaceInline</Mono> can be
              applied to elements in the Stack component. Learn more about the
              Stack component.
            </>
          ),
          media: getIllustrationComponent('foundations/spacing/stack'),
        },
        {
          title: 'Block component',
          description: (
            <>
              The Block component is a simple container component,{' '}
              <Mono>spaceStack</Mono>, <Mono>spaceInline</Mono>, and{' '}
              <Mono>spaceInset</Mono> can be applied to this component. Learn
              more about the Block component.
            </>
          ),
          media: getIllustrationComponent('foundations/spacing/block'),
        },
      ]}
    />
  </FoundationPageTemplate>
);
