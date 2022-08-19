import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Code} from '../../../components/code';
import {Link} from '../../../components/link';
import {InlineCode} from '../../../components/markdown-elements';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentTertiary,
  ContentColSpan,
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
          childrenColSpan={ContentColSpan.TEXT}
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="overriding theme">
        <ContentPrimary
          id="overriding-theme"
          toc="Overriding theme"
          headline="Overriding component defaults at a theme level"
          description={
            <>
              To override at the theme level, update a theme or{' '}
              <Link href="/theme/theming/creating-a-theme/">
                create a theme
              </Link>{' '}
              with the changes under the overrides property (similar to changing
              other areas of the theme). Components or interface elements that
              are utilising the updated property will reflect these changes.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
        <ContentSecondary
          headline="Example"
          description={
            <>
              Here is an example of overriding the component defaults for the
              medium-sized <Link href="/components/button/">button</Link>{' '}
              component, changing the default{' '}
              <Link href="/theme/presets/typography-presets/">
                typography presets
              </Link>{' '}
              and{' '}
              <Link href="/theme/presets/style-presets/">style presets:</Link>
            </>
          }
          showSeparator
        >
          <Code>
            {`import {createTheme} from 'newskit';

const theme = createTheme({
  name: 'newskit-component-defaults-change',
  overrides: {
    componentDefaults: {
      button: {
        medium: {
          typographyPreset: 'utilityButton010',
          stylePreset: 'buttonOutlinedPrimary',
        },
      },
    }
  },
});`}
          </Code>
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="component defaults"
            overrides={{
              marginBlockStart: 'space070',
            }}
          >
            Some components, like the button, will have variants in their
            component defaults such as size.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="overriding component">
        <ContentPrimary
          id="overriding-component"
          toc="Overriding component"
          headline="Overriding component defaults at the component level"
        />
        <ContentSecondary headline="Example">
          <Code>
            {`import {Button} from 'newskit';

// Overrides:
<Button
  size="medium"
  overrides={{
    typographyPreset: 'utilityButton010',
    stylePreset: 'buttonOutlinedPrimary',
  }}
>
  Content
</Button>;

`}
          </Code>
          <InlineMessage
            icon={infoIcon}
            title="Note"
            role="region"
            aria-label="overriding component"
            overrides={{
              marginBlockStart: 'space070',
            }}
          >
            These overrides will only apply to that specific instance of the
            component.
          </InlineMessage>
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="variants"
            overrides={{
              marginBlockStart: 'space050',
            }}
          >
            The variant (in this case, “medium”) is not included in the
            overrides. Variants are not specified in the component overrides
            prop, only the theme. Some components which are built using multiple
            components may have a nested structure to their component defaults.
          </InlineMessage>
        </ContentSecondary>
        <ContentSecondary
          description={
            <>
              The example below shows overriding the{' '}
              <Link href="/components/button/">button</Link> component
              appearance:
            </>
          }
          showSeparator
        >
          <Code>
            {`// Component Defaults:
byline: {
  stylePreset: 'inkSubtle',
  typographyPreset: 'utilityMeta020',
  spaceStack: 'space020',
  link: {
    stylePreset: 'bylineLink',
    typographyPreset: 'utilityMeta020',
  },
  divider: {
    stylePreset: 'bylineDivider',
    spaceInline: 'space020',
  },
},

// Overrides
<Byline
  overrides={{
    stylePreset: 'bylineCustom',
    typographyPreset: 'bylineCustom',
    spaceStack: 'space030',
    link: {
      stylePreset: 'bylineLinkCustom',
      typographyPreset: 'bylineLinkCustom',
    },
    divider: {
      stylePreset: 'bylineDividerCustom',
      spaceInline: 'space030',
    },
  }}
/>`}
          </Code>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="breakpoint behaviour">
        <ContentSecondary
          headline="Breakpoint behaviour in component defaults"
          description={
            <>
              Part of the functionality of the defaults and overrides system,
              enables overriding of design tokens at specific breakpoints. For
              example, setting different typography presets at different
              breakpoints, can make the text larger on bigger devices than on
              smaller devices.
              <br /> <br />
              Properties that support this are documented as using the generic{' '}
              <InlineCode>MQ</InlineCode> type, i.e.{' '}
              <InlineCode>MQ&#60;string&#62;</InlineCode>. This means passing a
              single string token to be used at all times, or a combination at
              breakpoints.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
        <ContentTertiary showSeparator>
          <Code>
            {`typographyPreset: {
    xs: 'editorialHeadline010',
    md: 'editorialHeadline010',
    lg: 'editorialHeadline010',
  }`}
          </Code>
        </ContentTertiary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default ComponentDefaults;
