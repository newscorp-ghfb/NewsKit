import React from 'react';
import {InlineMessage, IconFilledInfo, styled} from 'newskit*';
import {Table} from '../../../components/table';
import {InlineCode} from '../../../components/markdown-elements';
import {Mono} from '../../../components/flags';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {Link} from '../../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const TRANSITION_PRESET_PROPERTIES = [
  {
    tokenName: 'transitionProperty',
    acceptedValues: (
      <>
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties"
          target="_blank"
        >
          CSS
        </Link>
      </>
    ),
    example: (
      <>
        <Mono>transform</Mono>
      </>
    ),
    description:
      'Specifies the name of the CSS property the transition effect is for',
  },
  {
    tokenName: 'transitionDelay',
    acceptedValues: (
      <>
        <Link href="https://www.google.com/" target="_blank">
          motionDuration
        </Link>
      </>
    ),
    example: (
      <>
        <Mono>motionDuration000</Mono>
      </>
    ),
    description:
      'Specifies how many milliseconds delay for the transition effect to start',
  },
  {
    tokenName: 'transitionDuration',
    acceptedValues: (
      <>
        <Link href="https://www.google.com/" target="_blank">
          motionDuration
        </Link>
      </>
    ),
    example: (
      <>
        <Mono>motionDuration030</Mono>
      </>
    ),
    description:
      'Specifies how many milliseconds a transition effect takes to complete',
  },
  {
    tokenName: 'transitionTimingFunction',
    acceptedValues: (
      <>
        <Link href="https://www.google.com/" target="_blank">
          motionTiming
        </Link>
      </>
    ),
    example: (
      <>
        <Mono>motionTimingLinear</Mono>
      </>
    ),
    description: 'Specifies the speed curve of the transition effect',
  },
];

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const getImage = (url: string) => (
  <ImageWrapper>
    <Illustration path={url} />
  </ImageWrapper>
);

const PREDEFINED_TRANSITION_PRESETS = [
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/backgroundcolorchange',
    ),
    token: 'backgroundColorChange',
    description:
      'Transition background colour from the initial state to the final state.',
    implementation:
      'Can be applied to components when interacting eg. on hover, or triggered on page load.',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/bordercolorchange',
    ),
    token: 'backgroundColorChange',
    description:
      'Transition background colour from the initial state to the final state.',
    implementation:
      'Can be applied to components when interacting eg. on hover, or triggered on page load.',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/fontcolorchange',
    ),
    token: 'fontColorChange',
    description:
      'Transition font colour from the initial state to the final state.',
    implementation:
      'Can be applied to components when interacting eg. on hover, or triggered on page load.',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/iconcolorchange',
    ),
    token: 'iconColorChange',
    description:
      'Transition icon colour from the initial state to the final state.',
    implementation: (
      <>
        Can be applied to icons via the svg fill property{' '}
        <InlineCode>getCssSvgFillObject</InlineCode>.
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/fade',
    ),
    token: 'fade',
    description: 'Fade from transparent to opaque.',
    implementation:
      'Can be applied to components when interacting eg. on hover, triggered on page load, or applied to components when entering (mount), or exiting (unmount).',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/slideleft',
    ),
    token: 'slideLeft',
    description: (
      <>
        Slide in from the left to right, and back from right to left (back to
        its original starting position).
        <br />
        <br />
        When applied to a element or component like the Drawer, slideLeft causes
        the Drawer panel to slide in from off the left edge of the screen to the
        right, and back again off the left edge of the screen.
      </>
    ),
    implementation: (
      <>
        The transition <InlineCode>base</InlineCode> state keeps the element
        positioned to the left (translateX(-100%)) until the transition is
        activated.
        <br />
        <br />
        The <InlineCode>enterActive</InlineCode> state changes the transform
        value to translateX(0) and moves the element to the right.
        <br />
        <br />
        The <InlineCode>exitActive</InlineCode> state brings it back to its
        original starting position on the left (translateX(-100%)).
        <br />
        <br />
        Can be applied to components and triggered on page load, or when
        entering (mount), or exiting (unmount).
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/slidetop',
    ),
    token: 'slideTop',
    description: (
      <>
        Slide in from the top to bottom, and back from bottom to top (back to
        its original starting position).
        <br />
        <br />
        When applied to a element or component like the Drawer,{' '}
        <InlineCode>slideTop</InlineCode> causes the Drawer panel to slide in
        from off the top edge of the screen to the bottom, and back again off
        the top edge of the screen.
      </>
    ),
    implementation: (
      <>
        The transition <InlineCode>base</InlineCode> state keeps the element
        positioned to the top (translateY(-100%)) until the transition is
        activated.
        <br />
        <br />
        The <InlineCode>enterActive</InlineCode> state changes the transform
        value to translateY(0) and moves the element to the bottom.
        <br />
        <br />
        The <InlineCode>exitActive</InlineCode> state brings it back to its
        original starting position on the top (translateY(-100%)).
        <br />
        <br />
        Can be applied to components and triggered on page load, or when
        entering (mount), or exiting (unmount).
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/slidebottom',
    ),
    token: 'slideBottom',
    description: (
      <>
        Slide in from the bottom to top, and back from top to bottom (back to
        its original starting position).
        <br />
        <br />
        When applied to a element or component like the Drawer,{' '}
        <InlineCode>slideBottom</InlineCode> causes the Drawer panel to slide in
        from off the bottom edge of the screen to the top, and back again off
        the bottom edge of the screen.
        <br />
        <br />
      </>
    ),
    implementation: (
      <>
        The transition <InlineCode>base</InlineCode> state keeps the element
        positioned to the bottom (translateY(100%)) until the transition is
        activated.
        <br />
        <br />
        The <InlineCode>enterActive</InlineCode> state changes the transform
        value to translateY(0) and moves the element to the top.
        <br />
        <br />
        The <InlineCode>exitActive</InlineCode> state brings it back to its
        original starting position on the bottom (translateY(100%)).
        <br />
        <br />
        Can be applied to components and triggered on page load, or when
        entering (mount), or exiting (unmount).
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/moveup',
    ),
    token: 'moveUp',
    description:
      'Moves upwards (translate) from the start point of the child element.',
    implementation:
      'Can be applied to components and triggered on page load, or when entering (mount), or exiting (unmount).',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/grow',
    ),
    token: 'grow',
    description:
      'Expands outwards (scales) from the center of the child element.',
    implementation:
      'Can be applied to components and triggered on page load, or when entering (mount), or exiting (unmount).',
  },
];

const StylePresets = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Transition Presets',
      description:
        'A collection of motion attributes combined into a preset to define reusable motion transition from one state to another.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Theme',
      name: 'Transition Presets',
      hero: {
        illustration: 'theme/transition-presets/hero',
      },
      introduction: `A collection of motion attributes combined into a preset to define reusable motion transition from one state to another.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="Transition Presets define attributes such as the visual style, size, or position of an element across multiple states over time. Transition Presets can be reused through the system on multiple elements."
          showSeparator
        >
          <Illustration path="theme/transition-presets/overview" />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="transition preset properties">
        <ContentPrimary
          id="transition-preset-properties"
          toc="Transition Preset properties"
          headline="Transition Preset properties"
          description="Transition Presets use a combination of the following Transition Preset properties:"
          showSeparator
        >
          <Table
            columns={[
              'Token name',
              'Accepted Values',
              'Example',
              'Description',
            ]}
            rows={TRANSITION_PRESET_PROPERTIES}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="predefined transition presets">
        <ContentPrimary
          id="predefined-transition-presets"
          toc="Predefined Transition Presets"
          headline="Predefined Transition Presets"
          description="Below is a collection of Transition Presets that come out of the box with NewsKit that can be applied to elements:"
        >
          <Table
            columns={['Example', 'Token', 'Description', 'Implementation']}
            rows={PREDEFINED_TRANSITION_PRESETS}
          />
        </ContentPrimary>
        <ContentSecondary showSeparator>
          <InlineMessage icon={infoIcon}>
            You can also add your own Transition Presets. See the{' '}
            <Link href="/theme/theming/creating-a-theme/">
              Creating a theme
            </Link>{' '}
            guide for more details.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default StylePresets;
