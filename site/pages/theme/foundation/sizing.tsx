import React from 'react';
import {
  newskitLightTheme,
  InlineMessage,
  toNewsKitIcon,
  UnorderedList,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {Table, TableRow} from '../../../components/table';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {getTokenType} from '../../../utils/get-token-type';
import {Link} from '../../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const sizingRows = getTokenType(newskitLightTheme.sizing, 'sizing').map(
  ({tokenName, tokenValue}) => ({
    value: tokenValue,
    token: tokenName,
    sizeBox: tokenValue,
  }),
) as TableRow[];

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const Sizing = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Sizing',
      description:
        'Standardised sizing increases visual consistency in an interface.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Sizing',
      hero: {
        illustration: 'components/hero-sizing-illustration',
      },
      introduction: `Standardised sizing increases visual consistency in an interface.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="NewsKit uses a simple, standard sizing scale. The size of every UI element, and the space between elements, is defined by a 4px rule (or pt/rem)."
        >
          <Illustration viewBox="0 0 1490 600" path="theme/sizing/overview" />
        </ContentPrimary>

        <ContentSecondary
          description={
            <>All UI elements align to a 4px square baseline grid to:</>
          }
          showSeparator
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList
            markerAlign="start"
            overrides={{
              marginBlockEnd: 'space090',
              content: {
                typographyPreset: {
                  xs: 'editorialParagraph020',
                  md: 'editorialParagraph030',
                  lg: 'editorialParagraph030',
                  xl: 'editorialParagraph030',
                },
                stylePreset: 'inkBase',
              },
            }}
          >
            {[
              'Increase visual consistency',
              'Increase efficiency (fewer design choices = less code)',
              `Make communication easier and reduce back and forth between design and engineering as the intent is clear and results are more predictable`,
              'Create a visual rhythm',
            ]}
          </UnorderedList>
          <InlineMessage icon={infoIcon} aria-label="Distribution">
            If text is centred within a component (e.g. button) it’s already
            evenly distributed and doesn’t need to sit on the grid.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="why-4-px">
        <ContentPrimary
          id="why-4-px"
          toc="Why 4px?"
          headline="Why 4px?"
          description={<>In addition to the above:</>}
          showSeparator
        >
          <UnorderedList
            markerAlign="start"
            overrides={{
              marginBlockEnd: 'space090',
              content: {
                typographyPreset: {
                  xs: 'editorialParagraph020',
                  md: 'editorialParagraph030',
                  lg: 'editorialParagraph030',
                  xl: 'editorialParagraph030',
                },
                stylePreset: 'inkBase',
              },
            }}
          >
            {[
              `Most popular screen sizes are divisible by four, so grid columns fit the screen in the majority of use cases.`,
              `Many platforms allow users to set their preferred ‘density’, increasing or decreasing font size or whitespace in and between page elements. A 4px rule lets you scale consistently while maintaining the grid.`,
            ]}
          </UnorderedList>
          <Illustration path="theme/sizing/why-4-px" />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="touch-target-areas">
        <ContentPrimary
          id="touch-target-areas"
          toc="Touch target areas"
          headline="Touch target areas"
          description={
            <>
              To ensure there’s always a sufficient area for users to click or
              tap on interactive elements, NewsKit has a variety of component
              sizes (e.g. small, medium and large buttons and text inputs).
              <br />
              <br />
              On mobile breakpoints and devices, all interactive elements should
              have a touch target area no less than 44px². This is the minimum
              standard for iOS and Android.
            </>
          }
        >
          <Illustration path="theme/sizing/touch-target-areas" />
        </ContentPrimary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage icon={infoIcon} aria-label="Touch Target Areas">
            In most cases when there are multiple interactive elements in close
            proximity, make sure touch target areas are separated by enough
            clear space (16px) to balance information density and usability.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="sizing-tokens">
        <ContentPrimary
          id="sizing-tokens"
          toc="Sizing tokens"
          headline="Sizing tokens"
          description="Sizing tokens specify sizes throughout NewsKit, such as for icons, space and minimum or maximum widths or heights. Sizing tokens also define space tokens. The available sizes are:"
          showSeparator
        >
          <Table columns={['Size box', 'Token', 'Value']} rows={sizingRows} />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="code-usage">
        <ContentPrimary
          id="code-usage"
          toc="Code Usage"
          headline="Code Usage"
          description={
            <>
              You can override and apply sizing to components. See the{' '}
              <Link href="/theme/theming/component-defaults/">
                component defaults
              </Link>{' '}
              page for details.
              <br />
              <br />
              For more advanced use cases, you can access these values from the
              theme by calling{' '}
              <Link href="/components/utils/get-defaults/">
                getResponsiveSize
              </Link>
              , emotion’s{' '}
              <Link href="/components/utils/emotion"> useTheme hook</Link>, or{' '}
              <Link href="/components/utils/get-css-from-theme/">
                getSizingCssFromTheme
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

export default Sizing;
