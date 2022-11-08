import React from 'react';
import {styled, toNewsKitIcon, InlineMessage} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageCell} from '../../../components/layout-cells';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {InlineCode} from '../../../components/markdown-elements';
import {LayoutProps} from '../../../components/layout';
import {MediaList} from '../../../components/media-list';
import {Link} from '../../../components/link';
import {Mono} from '../../../components/flags';
import {Code} from '../../../components/code';
import {Table} from '../../../components/table';
import {
  getIllustrationComponent,
  Illustration,
} from '../../../components/illustrations/illustration-loader';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const PROPERTIES = [
  {
    tokenName: 'transitionProperty',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties"
        target="_blank"
      >
        CSS
      </Link>
    ),
    example: <Mono>transform</Mono>,
    description:
      'Specifies the name of the CSS property the transition effect is for',
  },
  {
    tokenName: 'transitionDelay',
    acceptedValues: (
      <Link href="/theme/foundation/motion/#duration">motionDuration</Link>
    ),
    example: <Mono>motionDuration000</Mono>,
    description:
      'Specifies how many milliseconds before the transition effect starts',
  },
  {
    tokenName: 'transitionDuration',
    acceptedValues: (
      <Link href="/theme/foundation/motion/#duration">motionDuration</Link>
    ),
    example: <Mono>motionDuration020</Mono>,
    description: 'Specifies how many milliseconds a transition effect lasts',
  },
  {
    tokenName: 'transitionTimingFunction',
    acceptedValues: (
      <Link href="/theme/foundation/motion/#timing">motionTiming</Link>
    ),
    example: <Mono>motionTimingLinear</Mono>,
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

const PRESETS = [
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/backgroundcolorchange',
    ),
    token: 'backgroundColorChange',
    description:
      'Transition background colour from the initial state to the final state',
    implementation:
      'Apply to components when interacting (e.g. on hover) or trigger on page load',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/bordercolorchange',
    ),
    token: 'borderColorChange',
    description:
      'Transition border colour from the initial state to the final state',
    implementation:
      'Apply to components when interacting (e.g. on hover) or trigger on page load',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/fontcolorchange',
    ),
    token: 'fontColorChange',
    description:
      'Transition font colour from the initial state to the final state',
    implementation:
      'Apply to components when interacting (e.g. on hover) or trigger on page load',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/iconcolorchange',
    ),
    token: 'iconColorChange',
    description:
      'Transition icon colour from the initial state to the final state',
    implementation: (
      <>
        Apply to icons via the svg fill property{' '}
        <InlineCode>getCssSvgFillObject</InlineCode>
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/fade',
    ),
    token: 'fade',
    description: 'Fade from transparent to opaque',
    implementation:
      'Apply to components when interacting (e.g. on hover), trigger on page load or apply to components when entering (mount) or exiting (unmount)',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/slideleft',
    ),
    token: 'slideLeft',
    description: (
      <>
        Slide in from the left to right, and back from right to left (back to
        original starting position)
        <br />
        <br />
        When applied to an element or component like the drawer,{' '}
        <InlineCode>slideLeft</InlineCode> causes the drawer panel to slide in
        from off the left edge of the screen to the right, and back again off
        the left edge of the screen
      </>
    ),
    implementation: (
      <>
        The transition <InlineCode>base</InlineCode> state keeps the element
        positioned to the left (translateX(-100%)) until the transition is
        activated
        <br />
        <br />
        The <InlineCode>enterActive</InlineCode> state changes the transform
        value to translateX(0) and moves the element to the right
        <br />
        <br />
        The <InlineCode>exitActive</InlineCode> state brings it back to its
        original starting position on the left (translateX(-100%))
        <br />
        <br />
        Apply to components and trigger on page load, or when entering (mount)
        or exiting (unmount)
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/slideright',
    ),
    token: 'slideRight',
    description: (
      <>
        Slide in from the right to left, and back from left to right (back to
        original starting position)
        <br />
        <br />
        When applied to an element or component like the drawer,{' '}
        <InlineCode>slideRight</InlineCode> causes the drawer panel to slide in
        from off the right edge of the screen to the left, and back again off
        the right edge of the screen
      </>
    ),
    implementation: (
      <>
        The transition <InlineCode>base</InlineCode> state keeps the element
        positioned to the right (translateX(100%)) until the transition is
        activated
        <br />
        <br />
        The <InlineCode>enterActive</InlineCode> state changes the transform
        value to translateX(0) and moves the element to the left
        <br />
        <br />
        The <InlineCode>exitActive</InlineCode> state brings it back to its
        original starting position on the right (translateX(100%))
        <br />
        <br />
        Apply to components and trigger on page load, or when entering (mount)
        or exiting (unmount)
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
        original starting position)
        <br />
        <br />
        When applied to an element or component like the drawer,{' '}
        <InlineCode>slideTop</InlineCode> causes the drawer panel to slide in
        from off the top edge of the screen to the bottom, and back again off
        the top edge of the screen
      </>
    ),
    implementation: (
      <>
        The transition <InlineCode>base</InlineCode> state keeps the element
        positioned to the top (translateY(-100%)) until the transition is
        activated
        <br />
        <br />
        The <InlineCode>enterActive</InlineCode> state changes the transform
        value to translateY(0) and moves the element to the bottom
        <br />
        <br />
        The <InlineCode>exitActive</InlineCode> state brings it back to its
        original starting position on the top (translateY(-100%))
        <br />
        <br />
        Apply to components and trigger on page load, or when entering (mount),
        or exiting (unmount)
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
        original starting position)
        <br />
        <br />
        When applied to an element or component like the drawer,{' '}
        <InlineCode>slideBottom</InlineCode> causes the drawer panel to slide in
        from off the bottom edge of the screen to the top, and back again off
        the bottom edge of the screen
        <br />
        <br />
      </>
    ),
    implementation: (
      <>
        The transition <InlineCode>base</InlineCode> state keeps the element
        positioned to the bottom (translateY(100%)) until the transition is
        activated
        <br />
        <br />
        The <InlineCode>enterActive</InlineCode> state changes the transform
        value to translateY(0) and moves the element to the top
        <br />
        <br />
        The <InlineCode>exitActive</InlineCode> state brings it back to its
        original starting position on the bottom (translateY(100%))
        <br />
        <br />
        Apply to components and trigger on page load, or when entering (mount)
        or exiting (unmount)
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/moveup',
    ),
    token: 'moveUp',
    description:
      'Move upwards (translate) from the start point of the child element',
    implementation:
      'Apply to components and trigger on page load, or when entering (mount) or exiting (unmount)',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/grow',
    ),
    token: 'grow',
    description:
      'Expand outwards (scales) from the centre of the child element',
    implementation:
      'Apply to components and trigger on page load, or when entering (mount) or exiting (unmount)',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/shiftabsolute',
    ),
    token: 'shiftAbsolute',
    description: 'Transition inset from the initial state to the final state',
    implementation:
      'Apply to components to add movement upon user interaction (e.g. the switch thumb on click/tap)',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/opacitychange',
    ),
    token: 'opacityChange',
    description: 'Transition opacity from the initial state to the final state',
    implementation: (
      <>
        Apply to components to change their opacity upon user interaction (e.g.
        the feedback element that appears on hover for components like{' '}
        <Link href="/components/checkbox/">checkbox</Link>, or{' '}
        <Link href="/components/radio-button/">radio button</Link>
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/widthchange',
    ),
    token: 'widthChange',
    description: 'Transition width from the initial state to the final state',
    implementation:
      'Can be applied to components to achieve a width change when interacting eg. applied to the expandable horizontal volume control audio player subcomponent on hover or focus',
  },
  {
    example: getImage(
      'theme/transition-presets/predefined-transition-presets/maxheightchange',
    ),
    token: 'maxHeightChange',
    description: 'Expands height (max-height) of the child element',
    implementation:
      'Can be applied to components when interacting eg. on click',
  },
];

const USER_INTERACTION = [
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/user-interaction',
    ),
    name: 'base',
    type: 'TransitionPresetStyles',
    description:
      'Defines the CSS property, duration, delay and timing for the transition of the element',
  },
];

const ENTER_EXIT_COMPONENT = [
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/component/base',
    ),
    name: 'base',
    type: 'TransitionPresetStyles',
    description:
      'Defines the initial style before the enter transition starts, if a component is rendered (in the DOM) but is visibly hidden off-screen until an action is triggered',
  },
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/component/enter',
    ),
    name: 'enter',
    type: 'TransitionPresetStyles',
    description: 'Defines the initial style before the enter transition starts',
  },
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/component/enteractive',
    ),
    name: 'enterActive',
    type: 'TransitionPresetStyles',
    description: (
      <>
        Defines the enter transition, including the CSS property that’s
        transitioned, duration, delay and timing function
        <br />
        <br />
        Defines the final values of the enter transition
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/component/enterdone',
    ),
    name: 'enterDone',
    type: 'TransitionPresetStyles',
    description:
      'Defines the final style after the enter transition has completed',
  },
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/component/exit',
    ),
    name: 'exit',
    type: 'TransitionPresetStyles',
    description: 'Defines the style before the exit transition starts',
  },
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/component/exitactive',
    ),
    name: 'exitActive',
    type: 'TransitionPresetStyles',
    description: (
      <>
        Defines the exit transition, including the CSS property that’s
        transitioned, duration, delay and timing function
        <br />
        <br />
        Defines the final values of the exit transition
      </>
    ),
  },
  {
    example: getImage(
      'theme/transition-presets/transition-preset-states/component/exitdone',
    ),
    name: 'exitDone',
    type: 'TransitionPresetStyles',
    description:
      'Defines the final style after the exit transition has completed. This is the state that persists after the transition',
  },
];

const VideoElement = ({url}: {url: string}) => (
  <video
    autoPlay
    controls
    controlsList="nofullscreen nodownload"
    loop
    src={url}
    width="100%"
  >
    <track kind="captions" />
  </video>
);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const TransitionPresets = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Transition presets',
      description:
        'A collection of motion attributes combined into a preset to define reusable motion transition from one state to another.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Presets',
      name: 'Transition presets',
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
          description="Transition presets define attributes such as the visual style, size or position of an element across multiple states over time. You can reuse transition presets on multiple elements throughout the system."
          showSeparator
        >
          <Illustration path="theme/transition-presets/overview" />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="properties">
        <ContentPrimary
          id="properties"
          toc="Properties"
          headline="Transition preset properties"
          description="Transition presets use a combination of properties:"
          showSeparator
        >
          <Table
            columns={[
              'Token name',
              'Accepted Values',
              'Example',
              'Description',
            ]}
            rows={PROPERTIES}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="predefined transition presets">
        <ContentPrimary
          id="predefined-transition-presets"
          toc="Available Transition Presets"
          headline="Predefined transition presets"
          description="Here’s a collection of out-of-the-box transition presets you can apply to elements:"
        >
          <Table
            columns={['Example', 'Token', 'Description', 'Implementation']}
            rows={PRESETS}
          />
        </ContentPrimary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="transition presets"
          >
            You can add your own transition presets. See the{' '}
            <Link href="/theme/theming/creating-a-theme/">
              creating a theme
            </Link>{' '}
            guide for more details.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="states">
        <ContentPrimary
          id="states"
          toc="States"
          headline="Transition preset states"
          description={
            <>
              States define the{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions"
                target="_blank"
              >
                CSS property
              </Link>
              , duration, delay and transition timing, as well as the initial
              and final styling of an element.
            </>
          }
        >
          <Illustration path="theme/transition-presets/transition-preset-states/overview" />
        </ContentPrimary>
        <ContentSecondary
          description="There are two ways to define transitions:"
          childrenColSpan={ContentColSpan.TEXT}
        />

        <ContentSecondary
          headline="1. States for transitions triggered upon user interaction"
          description={
            <>
              You can apply these transition presets to elements upon user
              interaction (e.g. changing the background colour of a{' '}
              <Link href="/components/button/">button</Link> on hover). The
              following states are used:
            </>
          }
        >
          <Table
            columns={['Example', 'Name', 'Type', 'Description']}
            rows={USER_INTERACTION}
          />
        </ContentSecondary>

        <ContentSecondary
          headline="2. States for transitions triggered upon entry and exit of a component"
          description={
            <>
              You can apply these transition presets upon entry (mount) and exit
              (unmount) of a component (e.g. a{' '}
              <Link href="/components/modal/">modal</Link> appearing and
              disappearing). The following states are used and represent class
              names applied to an element:
            </>
          }
          showSeparator
        >
          <Table
            columns={['Example', 'Name', 'Type', 'Description']}
            rows={ENTER_EXIT_COMPONENT}
          />
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="apply transition presets">
        <ContentPrimary
          id="apply-transition-presets"
          toc="Apply transition presets"
          headline="Apply transition presets"
          description={
            <>
              See the{' '}
              <Link href="/theme/theming/component-defaults/">
                component defaults page
              </Link>{' '}
              for the different ways to override and apply transition presets to
              NewsKit components.
              <br />
              <br />
              For more advanced use cases, access these values from the theme by
              calling{' '}
              <Link href="/theme/theming/using-a-theme/">
                getTransitionPreset
              </Link>{' '}
              (a function used to retrieve values from the component defaults or
              overrides objects) or{' '}
              <Link href="/theme/theming/using-a-theme/">
                getTransitionPresetFromTheme
              </Link>{' '}
              (used to retrieve token values from theme or component props).
            </>
          }
        />

        <ContentSecondary
          headline="Trigger transition presets upon user interaction"
          description={
            <>
              1. Here’s the <InlineCode>backgroundColorChange</InlineCode>{' '}
              transition preset.
            </>
          }
        >
          <Code>
            {`transitionPresets.backgroundColorChange = {
  base: {
    transitionProperty: 'background-color',
    transitionDuration: '{{motions.motionDuration050}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              2. When combined with the following{' '}
              <InlineCode>stylePreset</InlineCode>, the background colour
              transitions between states.
            </>
          }
        >
          <Code>
            {`stylePresets.box = {
  base: {
      backgroundColor: '{{colors.purple030}}',
    },
    hover: {
      backgroundColor: '{{colors.purple070}}',
    }
};`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              3. <InlineCode>backgroundColorChange</InlineCode> applied to a
              simple box element.
            </>
          }
        >
          <Code>
            {`const Box = styled.div\`
$\{getStylePresetFromTheme('box')}
$\{getTransitionPresetFromTheme('backgroundColorChange')}
  width: 100px;
  height: 100px;
\`;`}
          </Code>
        </ContentSecondary>

        <ContentSecondary>
          <VideoElement url="static/examples/transition-presets/background-colour.mp4" />
        </ContentSecondary>

        <ContentSecondary
          headline="Apply combined transition presets to background and border colours"
          description={
            <>
              1. Here are two transition presets:{' '}
              <InlineCode>backgroundColorChange</InlineCode> and{' '}
              <InlineCode>borderColorChange</InlineCode>.
            </>
          }
        >
          <Code>
            {`transitionPresets.backgroundColorChange = {
  base: {
    transitionProperty: 'background-color',
    transitionDuration: '{{motions.motionDuration030}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};

transitionPresets.borderColorChange = {
  base: {
    transitionProperty: 'border-color',
    transitionDuration: '{{motions.motionDuration050}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
};`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              2. When combined with the following{' '}
              <InlineCode>stylePreset</InlineCode>, the background and border
              colours transition between states with different durations.
            </>
          }
        >
          <Code>
            {`stylePresets.box = {
  base: {
    backgroundColor: '{{colors.purple030}}',
    borderWidth: '{{borders.borderWidth030}}',
    borderStyle: 'solid',
    borderColor: '{{colors.green020}}',
  },
  hover: {
    backgroundColor: '{{colors.purple070}}',
    borderColor: '{{colors.green040}}',
  }
};`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              3. <InlineCode>backgroundColorChange</InlineCode> and{' '}
              <InlineCode>borderColorChange</InlineCode> applied to a simple box
              component.
            </>
          }
        >
          <Code>
            {`const Box = styled.div\`
$\{getStylePresetFromTheme('box')}
$\{getTransitionPresetFromTheme(['backgroundColorChange', 'borderColorChange'])}
  width: 100px;
  height: 100px;
\`;`}
          </Code>
        </ContentSecondary>

        <ContentSecondary>
          <VideoElement url="static/examples/transition-presets/background-border-colours.mp4" />
        </ContentSecondary>

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="single instance"
            title="Apply to all instances"
          >
            These examples only apply to a single instance of a component. To
            apply to all instances, use{' '}
            <Link href="/theme/theming/component-defaults/">
              component defaults
            </Link>
            .
          </InlineMessage>
        </ContentSecondary>

        <ContentSecondary
          headline="Trigger transition presets upon mount/unmount"
          description={
            <>
              1. Here’s the <InlineCode>slideLeft</InlineCode> transition
              preset, used to slide an element in from the left edge of the
              screen.
            </>
          }
        >
          <Code>
            {`transitionPresets.slideLeft = {
  base: {
    transform: 'translateX(-100%)',
  },
  enter: {
    transform: 'translateX(-100%)',
  },
  enterActive: {
    transform: 'translateX(0)',
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
  },
  enterDone: {
    transform: 'translateX(0)',
  },
  exit: {
    transform: 'translateX(0)',
  },
  exitActive: {
    transform: 'translateX(-100%)',
    transitionProperty: 'transform',
    transitionDuration: '{{motions.motionDuration020}}',
    transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
  },
  exitDone: {
    transform: 'translateX(-100%)',
  },
};`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          description={
            <>2. Apply the transition preset to the drawer in the defaults.</>
          }
        >
          <Code>
            {`export const Drawer = styled.div\`
  $\{getTransitionPreset(
    \`drawer.panel.left\`,
    'panel',
    'nk-drawer',
    )};
\`;

 <Drawer
  open
  onDismiss={close}
  header="Drawer"
>
  <div>Content</div>
</Drawer>`}
          </Code>
        </ContentSecondary>

        <ContentSecondary showSeparator>
          <VideoElement url="static/examples/transition-presets/drawer-mount-unmount.mp4" />
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="extending or overriding transition presets">
        <ContentPrimary
          id="extending-overriding-transition-presets"
          toc="Overriding & combining"
          headline="Extend or override transition presets"
          description="You can override or combine transition presets to achieve different combinations."
        />

        <ContentSecondary
          headline="Code example"
          description={
            <>
              Here’s how to override a transition preset applied in the defaults
              of the <Link href="/components/drawer/">drawer</Link> component:
            </>
          }
        >
          <Code>
            {` <Drawer
  open
  onDismiss={close}
  header="This is a drawer header"
  overrides={{
    panel: {
      transitionPreset: 'slideRight',
    },
  }}
>
  <DrawerContent />
</Drawer>`}
          </Code>
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              Here’s how to extend two predefined transition presets -{' '}
              <InlineCode>fade</InlineCode> and <InlineCode>moveUp</InlineCode>{' '}
              applied to a modal component. The duration and timing functions of
              both presets are overridden and delay is added to the{' '}
              <InlineCode>fade</InlineCode> transition preset when the component
              appears on the screen.
              <br />
              <br />
              For both transition presets, the duration and timing functions are
              updated from the enter to the exit state of the transition:
            </>
          }
          showSeparator
        >
          <Code>
            {`<Modal
  open={true}
  onDismiss={close}
  header="This is a modal header."
  overrides={{
    panel: {
      transitionPreset: [
        {
          extend: 'fade',
          enterActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
            transitionDelay: '{{motions.motionDuration010}}',
          },
          exitActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingLinear}}',
          },
        },
        {
          extend: 'moveUp',
          enterActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
            transitionDelay: '{{motions.motionDuration010}}',
          },
          exitActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
          },
        },
      ],
    },
  }}
>
  {modalContent}
</Modal>`}
          </Code>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="adding custom transition presets to the theme">
        <ContentPrimary
          id="adding-custom-transition-presets-to-the-theme"
          toc="Custom transition presets"
          headline="Add custom transition presets to the theme"
          description={
            <>
              See the{' '}
              <Link href="/theme/theming/creating-a-theme/">
                creating a theme
              </Link>{' '}
              guide for more details.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="communicating transition presets in figma">
        <ContentPrimary
          headline="Communicate transition presets in Figma"
          description="The difficulty in communicating motion in static layouts is a long-standing problem in the design world. It’s often left to developers to figure something out."
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                description:
                  'To alleviate this problem with page-level transitions, designers should refer to the documentation provided in Figma.',
                media: getIllustrationComponent(
                  'theme/transition-presets/transition-presets-in-figma',
                ),
              },
            ]}
          />
        </ContentPrimary>
        <ContentSecondary
          description={
            <>
              For help communicating designs to engineers, see the{' '}
              <Link
                href="https://www.figma.com/proto/kXCrh9MHKAJ878KE2dQOz8/Handoff-Guides---for-engineers-%26-designers?page-id=1%3A544&node-id=275%3A21221&viewport=350%2C48%2C0.13&scaling=min-zoom&starting-point-node-id=275%3A21221&show-proto-sidebar=1&hide-ui=1"
                target="_blank"
              >
                handoff guidance.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="accessibility considerations">
        <ContentPrimary
          id="accessibility"
          toc="Accessibility"
          headline="Accessibility"
          description={
            <>
              Users who experience{' '}
              <Link
                href="https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html"
                target="_blank"
              >
                motion sensitivity
              </Link>{' '}
              have the option of a more basic experience that reduces motion
              where possible.
            </>
          }
        />

        <ContentSecondary
          headline="Reduce motion for motion sensitivities"
          description={
            <>
              The{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
                target="_blank"
              >
                prefers-reduced-motion
              </Link>{' '}
              CSS media feature detects if the user has requested that their
              operating system or browser minimises the amount of non-essential
              motion displayed.
              <br />
              <br />
              We also recommend using the{' '}
              <InlineCode>prefers-reduced-motion</InlineCode> feature on
              elements with motion. By default, we support this feature for
              components that have motion applied (e.g.{' '}
              <Link href="/components/drawer/">drawer</Link>, and{' '}
              <Link href="/components/modal/">modal</Link>).
              <br />
              <br />
              <Link
                href="https://caniuse.com/prefers-reduced-motion"
                target="_blank"
              >
                Check which browsers support reduced motion
              </Link>
              .
            </>
          }
        />

        <ContentSecondary
          headline="Code example"
          description="Here’s how to implement this feature using CSS:"
          showSeparator
        >
          <Code>
            {`@media (prefers-reduced-motion: reduce) {
    /* reduced behaviour */
}`}
          </Code>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default TransitionPresets;
