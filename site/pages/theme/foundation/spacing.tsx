import React from 'react';
import {newskitLightTheme} from 'newskit';
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
import {Link} from '../../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
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

        <ContentPrimary
          headline="Space tokens"
          description={
            <>
              Space tokens define the space throughout the system, such as the
              distance between an icon and the label in a button. Space tokens
              are used to control margin and padding within components.
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
        </ContentPrimary>

        <ContentSecondary
          headline="Code usage"
          description={
            <>
              The{' '}
              <Link href="/theme/theming/component-defaults/">
                component defaults
              </Link>{' '}
              page details the different ways in which you can override and
              apply space inset to NewsKit components. For more advanced use
              cases, these values can be accessed from the theme by calling{' '}
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
              it easier for users to set the spacing they desire.
              <br />
              <br />
              You can use space tokens with 12 different{' '}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start">
                CSS properties
              </Link>
              to logically apply space to a side, or combination of sides.
              <br />
              <br />
              Logical props can define either{' '}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start#examples">
                padding
              </Link>{' '}
              or{' '}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline#examples">
                margins
              </Link>
              , depending on the element&apos;s writing mode, directionality, or
              text orientation. orientation. For example, if the reading
              direction is <InlineCode>right to left</InlineCode> (instead of{' '}
              <InlineCode>left to right</InlineCode>) the
              <InlineCode>paddingInlineStart</InlineCode> would be on the right
              instead of the left.
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
              {
                title: 'marginInlineStart',
                description: `
                Applies space to the start position (left) of an element.
                `,
                media: getIllustrationComponent(
                  'theme/spacing/margin-inline-start',
                ),
              },
              {
                title: 'marginInlineEnd',
                description: `
                Applies space to the end (right) position of an element.
                `,
                media: getIllustrationComponent(
                  'theme/spacing/margin-inline-end',
                ),
              },
              {
                title: 'marginInline',
                description: `
                Applies space to both the start (left) and end (right) positions of an element.
                `,
                media: getIllustrationComponent('theme/spacing/margin-inline'),
              },
              {
                title: 'marginBlockStart',
                description: `
                Applies space to the start position (top) of an element.
                `,
                media: getIllustrationComponent(
                  'theme/spacing/margin-block-start',
                ),
              },
              {
                title: 'marginBlockEnd',
                description: `
                Applies space to the end position (bottom) of an element.
                `,
                media: getIllustrationComponent(
                  'theme/spacing/margin-block-end',
                ),
              },
              {
                title: 'marginBlock',
                description: `
                Applies space to both the start (top) and end (bottom) positions of an element.
                `,
                media: getIllustrationComponent('theme/spacing/margin-block'),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="textcrop">
        <ContentPrimary
          id="textcrop"
          toc="Text crop"
          headline="Text crop"
          description={
            <>
              To keep consistent and predictable spacing from design to code, we
              use a{' '}
              <Link href="/theme/theming/creating-a-theme/">
                text-crop utility{' '}
              </Link>
              that removes additional space (leading) around a text block. This
              allows us to maintain our 4px baseline and keep designs
              pixel-perfect.{' '}
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Spacing;
