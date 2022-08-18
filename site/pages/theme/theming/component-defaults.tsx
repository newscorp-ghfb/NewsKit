import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../../components/link';
import {InlineCode} from '../../../components/markdown-elements';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const ComponentDefaults = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Component defaults',
      description:
        'A preselected option that is applied to a component to define its appearance or behaviour.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Creating and using themes',
      name: 'Component defaults',
      hero: {
        illustration: 'components/hero-component-defaults-illustration',
      },
      introduction: `A preselected option that is applied to a component to define its appearance or behaviour.`,
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
              Each NewsKit component has default design tokens (component
              defaults) applied to define its default appearance, or behaviour.
              <br />
              <br />
              As part of the component defaults functionality, there is a
              consistent <InlineCode>overrides</InlineCode> prop on all
              components. This prop takes an object which mirrors the structure
              of the component defaults. Each component documents the structure
              of its component defaults on its respective documentation page.
              <br />
              <br />
              Component defaults can be overridden at either the theme level or
              at a component level.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Component defaults overview"
                overrides={{
                  marginBlockStart: 'space070',
                }}
              >
                Carefully consider if the desired impact of changing a component
                default is to change a specific instance of a component or
                multiple components. For example, changing the size used by all{' '}
                <Link href="/components/button/">button</Link> components at a
                theme level, or changing the size of a specific instance of a
                button at a component level.
              </InlineMessage>
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default ComponentDefaults;
