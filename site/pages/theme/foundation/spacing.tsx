import React from 'react';
import {InlineMessage, newskitLightTheme} from 'newskit';
import {Table, TableRow} from '../../../components/table';
import {getTokenType} from '../../../utils/get-token-type';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {
  Illustration,
  getIllustrationComponent,
} from '../../../components/illustrations/illustration-loader';
import {MediaList} from '../../../components/media-list';
import {TabsWithTable} from '../../../components/tabs-with-table';
import {Link} from '../../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';
import {InlineCode} from '../../../components/markdown-elements';

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

const Spacing = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Spacing',
      description:
        'Space helps to guide the user and provide a pleasant and consistent experience when using a product.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Spacing',
      hero: {
        illustration: 'theme/spacing/hero',
      },
      introduction: `Space helps to guide the user and provide a pleasant and consistent experience when using a product.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="Space is distance between elements on a screen often refered to as the whitespace. Good use of whitespace helps to de-clutter and group content to provide a visual hierarchy so that users can focus on the important elements and digest content with reduced cognitive load."
        >
          <Illustration path="theme/spacing/overview" />
        </ContentPrimary>

        <ContentSecondary
          description={
            <>
              Space tokens define the space throughout the system, such as the
              distance between an icon and the label in a button. The space
              tokens define three categories to control margin and padding for
              specific use cases, these are: <InlineCode>spaceInset</InlineCode>
              , <InlineCode>spaceInline</InlineCode>, and{' '}
              <InlineCode>spaceStack</InlineCode>.
              <br />
              <br />
              Available space design tokens are outlined below:
            </>
          }
        >
          <Table
            columns={['Token', 'Value', 'Description']}
            rows={spaceTable}
          />
        </ContentSecondary>

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage>
            Avoid using generic spacing tokens directly, in favor use the more
            specific options such as: spaceInset, spaceInline, and spaceStack as
            described in the following sections. When these don&apos;t meet your
            needs, you can use the generic variables to keep spatial concepts
            consistent.
          </InlineMessage>
        </ContentSecondary>

        <ContentSecondary
          headline="Code usage"
          description={
            <>
              The{' '}
              <Link href="/theme/theming/component-defaults/">
                Component Defaults
              </Link>{' '}
              page details the different ways in which you can override and
              apply space inset to NewsKit components. For more advanced use
              cases, these values can be accessed from the theme by calling
              either:
              <Link href="/components/utils/get-defaults/">
                getResponsiveSpacing
              </Link>
              , emotion&apos;s{' '}
              <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
              <Link href="/components/utils/get-css-from-theme/">
                getSpacingCssFromTheme
              </Link>
              .
            </>
          }
          showSeparator
        />
      </ContentSection>
      <ContentSection sectionName="logicalProps">
        <ContentPrimary
          id="logicalProps"
          toc="Logical props"
          headline="Logical props"
          description={
            <>
              We have added the following properties to our components to make
              it easier for users to set the spacing they desire. .
              <br />
              You can use space tokens with 12 different CSS properties to
              logically apply space to a side, or combination of sides.
              <br />
              Logical props can define either padding or margins, depending on
              the element&apos;s writing mode, directionality, or text
              orientation. orientation. For example, if the reading direction is
              right to left (instead of left to right) the paddingInlineStart
              would be on instead of the left.
            </>
          }
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
                title: 'paddingInlineStart',
                description: `Applies space to the start position (left) of an element.`,
                media: getIllustrationComponent(
                  'theme/spacing/padding-inline-start',
                ),
              },
              {
                title: 'paddingInlineEnd',
                description: `
                Applies space to the end (right) position of an element.
                `,
                media: getIllustrationComponent(
                  'theme/spacing/padding-inline-end',
                ),
              },
              {
                title: 'paddingInline',
                description: `
                Applies space to both the start (left) and end (right) positions of an element.
                `,
                media: getIllustrationComponent('theme/spacing/padding-inline'),
              },
              {
                title: 'paddingBlockStart',
                description: `
                Applies space to the start position (top) of an element.
                `,
                media: getIllustrationComponent(
                  'theme/spacing/padding-block-start',
                ),
              },
              {
                title: 'paddingBlockEnd',
                description: `
                Applies space to the end position (bottom) of an element.
                `,
                media: getIllustrationComponent(
                  'theme/spacing/padding-block-end',
                ),
              },
              {
                title: 'paddingBlock',
                description: `
                Applies space to both the start (top) and end (bottom) positions of an element.
                `,
                media: getIllustrationComponent('theme/spacing/padding-block'),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="spaceinset">
        <ContentPrimary
          id="spaceinset"
          toc="Space Inset"
          headline="Space Inset"
          description={
            <>
              Space Inset is the space within a component (padding). By default,
              a component&apos;s inset should be equal on all four sides.
              <br />
              Squish Inset reduces top and bottom padding relative to the
              default inset space.
              <br />
              Stretch Inset increases top and bottom padding relative to the
              default inset space.
            </>
          }
        >
          <Illustration path="theme/spacing/space-inset" />
        </ContentPrimary>

        <TabsWithTable components={spaceInsetTable} />

        <ContentSecondary
          headline="Code usage"
          description={
            <>
              The{' '}
              <Link href="/theme/theming/component-defaults/">
                Component Defaults
              </Link>{' '}
              page details the different ways in which you can override and
              apply space inset to NewsKit components. For more advanced use
              cases, these values can be accessed from the theme by calling
              either:
              <Link href="/components/utils/get-defaults/">
                getResponsiveSpacing
              </Link>
              , emotion&apos;s{' '}
              <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
              <Link href="/components/utils/get-css-from-theme/">
                getSpacingCssFromTheme
              </Link>
              .
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="spaceinline">
        <ContentPrimary
          id="spaceinline"
          toc="Space Inline"
          headline="Space Inline"
          description={
            <>
              Space Inline is most often the space to the right of elements
              (margin-right), however, if a component changes orientation, then
              the flow changes the position of the margin.
              <br />
              If the flow is row or horizontal this will be applied as
              margin-right.
              <br />
              If the flow is column or vertical this will be applied as
              margin-bottom.
            </>
          }
        >
          <Illustration path="theme/spacing/space-inline" />
        </ContentPrimary>

        <ContentSecondary
          headline="Code usage"
          description={
            <>
              The{' '}
              <Link href="/theme/theming/component-defaults/">
                Component Defaults
              </Link>{' '}
              page details the different ways in which you can override and
              apply space inline to NewsKit components. For more advanced use
              cases, these values can be accessed from the theme by calling
              either:
              <Link href="/components/utils/get-defaults/">
                getResponsiveSpacing
              </Link>
              , emotion&apos;s{' '}
              <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
              <Link href="/components/utils/get-css-from-theme/">
                getSpacingCssFromTheme
              </Link>
              . Space inline should generally only be applied to{' '}
              <InlineCode>margin-right</InlineCode> and{' '}
              <InlineCode>margin-bottom</InlineCode>.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="spacestack">
        <ContentPrimary
          id="spacestack"
          toc="Space Stack"
          headline="Space Stack"
          description={
            <>
              Space Stack is most often the space to the bottom of elements
              (margin-bottom, however, if a component changes orientation, then
              the flow changes the position of the margin.
              <br />
              If the flow is row or horizontal this should be applied as
              margin-bottom.
              <br />
              If the flow is column or vertical this should be applied as
              margin-right.
            </>
          }
        >
          <Illustration path="theme/spacing/space-stack" />
        </ContentPrimary>

        <ContentSecondary
          headline="Code usage"
          description={
            <>
              The{' '}
              <Link href="/theme/theming/component-defaults/">
                Component Defaults
              </Link>{' '}
              page details the different ways in which you can override and
              apply space stack to NewsKit components. For more advanced use
              cases, these values can be accessed from the theme by calling
              either:
              <Link href="/components/utils/get-defaults/">
                getResponsiveSpacing
              </Link>
              , emotion&apos;s{' '}
              <Link href="/components/utils/hooks/">useTheme hook</Link>, or{' '}
              <Link href="/components/utils/get-css-from-theme/">
                getSpacingCssFromTheme
              </Link>
              . Space stack should generally only be applied to{' '}
              <InlineCode>margin-right</InlineCode> and{' '}
              <InlineCode>margin-bottom</InlineCode>.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="textcrop">
        <ContentPrimary
          id="textcrop"
          toc="Text Crop"
          headline="Text Crop"
          description={
            <>
              To keep consistent and predictable spacing from design to code, we
              use a text-crop utility that removes additional space (leading)
              around a text block. This allows us to maintain our 4px baseline
              and keep designs pixel-perfect.{' '}
              <Link href="/theme/theming/creating-a-theme/">
                Read more about text crop here.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="behaviors">
        <ContentPrimary
          id="behaviors"
          toc="Common components"
          headline="Common components that utilise space"
          description="The following two components are the most common components that utilise space throughout the system:"
          showSeparator
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Stack component',
                description: (
                  <>
                    The Stack component enables items to be distributed evenly
                    in vertical or horizontal &apos;stacks&apos; (similar to
                    FlexBox). <InlineCode>spaceStack</InlineCode> and{' '}
                    <InlineCode>spaceInline</InlineCode> can be applied to
                    elements in the Stack component. Learn more about the Stack
                    component.
                  </>
                ),
                media: getIllustrationComponent('theme/spacing/stack'),
              },
              {
                title: 'Block component',
                description: (
                  <>
                    The Block component is a simple container component,{' '}
                    <InlineCode>spaceStack</InlineCode>,{' '}
                    <InlineCode>spaceInline</InlineCode>, and{' '}
                    <InlineCode>spaceInset</InlineCode> can be applied to this
                    component. Learn more about the Block component.
                  </>
                ),
                media: getIllustrationComponent('theme/spacing/block'),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Spacing;
