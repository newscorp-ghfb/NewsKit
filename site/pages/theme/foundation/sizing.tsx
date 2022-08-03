import React from 'react';
import {newskitLightTheme, InlineMessage, toNewsKitIcon} from 'newskit';
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
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="NewsKit uses a simple, standard sizing scale. The size of every UI element and the space between elements is defined by a 4px rule (or pt/rem)."
        >
          <Illustration path="theme/sizing/overview" />
        </ContentPrimary>

        <ContentSecondary
          description={
            <>
              All UI elements align to a 4px square baseline grid. This is to
              provide:
              <ul>
                <li>Increased visual consistency</li>
                <li>Increased efficiency: fewer design choices, less code</li>
                <li>
                  Easier communication and reduced back and forth between design
                  and engineering as the intent is clear and results are more
                  predictable.
                </li>
                <li>Visual rhythm</li>
              </ul>
            </>
          }
          showSeparator
          childrenColSpan={ContentColSpan.TEXT}
        >
          <InlineMessage icon={infoIcon} aria-label="Distribution">
            Text that is centered within a component e.g. a button, does not
            need to sit on the grid as it is evenly distributed.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="why-4-px">
        <ContentPrimary
          id="why-4-px"
          toc="Why 4px?"
          headline="Why 4px?"
          description={
            <>
              A 4px rule provides a good balance of choice to a designer but,
              crucially, 4 is also divisible and this has some significant
              benefits:
              <ul>
                <li>
                  Most popular screen sizes are divisible by 4, so grid columns
                  fit the screen perfectly more often than not.
                </li>
                <li>
                  Increasingly, platforms are allowing users to set their
                  preferred ‘density’ to accommodate specific user needs. This
                  may be increasing or decreasing font sizes or white space in
                  and between page elements. A 4px scale allows us to scale
                  consistently and continue to maintain the grid.
                </li>
              </ul>
            </>
          }
          showSeparator
        >
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
              To ensure that there is always a sufficient area for users to
              click or tap on interactive elements, there are a variety of
              component sizes eg. small, medium, and large buttons, text input,
              etc.
              <br />
              <br />
              On mobile breakpoints and devices, all interactive elements should
              have a touch target area of more than 44px². This ensures that it
              will meet the minimum standard for iOS and Android, whilst
              improving the user experience.
            </>
          }
        >
          <Illustration path="theme/sizing/touch-target-areas" />
        </ContentPrimary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage icon={infoIcon} aria-label="Touch Target Areas">
            In most cases when there are multiple interactive elements in close
            proximity to one another, it is recommended to make sure touch
            target areas are separated by enough clear space (16px), to ensure
            balanced information density and usability.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="sizing-tokens">
        <ContentPrimary
          id="sizing-tokens"
          toc="Sizing tokens"
          headline="Sizing tokens"
          description="Sizing tokens are used to specify sizes throughout the system, such as icons, space, and minimum or maximum widths or heights. Sizing tokens are also used to define space tokens. Available sizes are outlined below:"
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
              The{' '}
              <Link href="/theme/theming/component-defaults/">
                Component Defaults
              </Link>{' '}
              page details the different ways in which you can override and
              apply sizing to NewsKit components. For more advanced use cases,
              these values can be accessed from the theme by calling either:{' '}
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
