import React, {useEffect} from 'react';
import {newskitLightTheme, InlineMessage, P, UnorderedList} from 'newskit';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {Table} from '../../../components/table';
import {MediaList} from '../../../components/media-list';
import {IconFilledCircle} from '../../../components/icons';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {UsageKind} from '../../../components/usage-card';
import {Link} from '../../../components/link';
import {getTokenType} from '../../../utils/get-token-type';

import useMediaQuery from '../../../helpers/use-media-query';

const TOKENS_DESCRIPTION: {[key in string]: string} = {
  motionTimingLinear: 'Has the same even speed from start to end.',
  motionTimingEaseIn:
    'Curves accelerate; useful for animations where an object permanently exits the screen e.g. a drawer being dismissed.',
  motionTimingEaseOut:
    'Curves decelerate; they work well for objects which appear from off of the screen e.g. a Drawer entering the screen.',
  motionTimingEaseInAndOut:
    'Curves initially accelerate and then decelerate. They’re the default easing for animations and work in variety of cases, especially for objects that can move frequently from place to place on the screen e.g. an item with an drag-and-drop list.',
  motionDuration010: 'Sliders, Progress Indicators',
  motionDuration020: 'Text Inputs',
  motionDuration030: 'Buttons, tags, checkboxes, switches, menu items',
  motionDuration040: 'Modals, drawers, toasts, banners',
  motionDuration050: 'Nav bars',
};

const DO_AND_DONT = [
  {
    description: `Motion should be used to highlight important details and emphasise key points in a user journey.`,
    kind: UsageKind.DO,
    media: getIllustrationComponent('theme/motion/do-01'),
  },
  {
    description: `Motion should not distract or block the user from what they are doing.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('theme/motion/dont-01'),
  },
  {
    description: `Avoid motion that is too fast for users to follow.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('theme/motion/dont-02'),
  },
  {
    description: `Avoid motion that is overly slow, preventing a user from advancing in their user journey.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('theme/motion/dont-03'),
  },
];

const motionDurationRows = getTokenType(
  newskitLightTheme.motions,
  'motionDuration',
).map(({tokenName, tokenValue}) => ({
  duration: tokenValue as string,
  token: tokenName,
  tokenValue: tokenValue as string,
  commonUses: TOKENS_DESCRIPTION[tokenName] || '-',
}));
const motionTimingRows = getTokenType(
  newskitLightTheme.motions,
  'motionTiming',
).map(({tokenName, tokenValue}) => ({
  timing: tokenValue as string,
  token: tokenName,
  tokenValue: tokenValue as string,
  commonUses: TOKENS_DESCRIPTION[tokenName] || '-',
}));

const ReduceMotionMessage = () => {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [hasReducedMotion, setReducedMotion] = React.useState(false);
  useEffect(() => {
    setReducedMotion(reduceMotion);
  }, [reduceMotion, setReducedMotion]);

  return hasReducedMotion ? (
    <InlineMessage>
      We&apos;ve identified that you have a reduced motion setting turned on in
      your system preferences (or settings). This page contains animated motion
      examples that won&apos;t be displayed. To view the motion, turn off the
      reduced motion settings in your device.
    </InlineMessage>
  ) : null;
};

const Motion = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Motion',
      description: 'Motion',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundation',
      name: 'Motion',
      hero: {
        illustration: 'theme/motion/hero',
      },
      introduction: `Motion is used to create movement and narrative within a product. Animated interface elements don't just attract attention, they enhance user experience and help guide user flow. They reveal the functionality and process of a user interface by communicating where to focus and what to do next.`,
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
              Motion foundations are used in animations and transitions.
              <br />
              <br />
              <Link
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/3446341702"
                target="_blank"
              >
                Learn more about how Motion foundations are applied to
                animations and transitions via Motion Presets.
              </Link>
            </>
          }
        />

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            role="region"
            title="Overrides"
            aria-label="Default Motion in the foundations can be overridden."
          >
            <b>Default Motion in the foundations can be overridden.</b>{' '}
            <Link href="/theme/theming/creating-a-theme">
              Learn more about overriding default Motion in the theme.
            </Link>
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="duration">
        <ContentPrimary
          toc="Duration"
          id="duration"
          headline="Duration"
          description="Determining which timing to use is a matter of context, including the complexity of the action and the distance over which the animation occurs."
          childrenColSpan={ContentColSpan.TEXT}
        >
          <ReduceMotionMessage />
        </ContentPrimary>

        <ContentSecondary>
          <Table
            columns={['Duration', 'Token', 'Token value', 'Common uses']}
            rows={motionDurationRows}
          />
        </ContentSecondary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage role="region" aria-label="Duration">
            These should use the{' '}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration">
              animation-duration
            </Link>{' '}
            css property.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="duration">
        <ContentPrimary
          toc="Timing"
          id="timing"
          headline="Timing"
          description="Timing controls the velocity of motion over its duration. It helps determine an animation’s feeling and can aid in matching the appearance of real-world physics by controlling how objects accelerate and decelerate as they move on the screen. NewsKit uses four different types of timing."
          childrenColSpan={ContentColSpan.TEXT}
        >
          <ReduceMotionMessage />
        </ContentPrimary>

        <ContentSecondary>
          <Table
            columns={['Timing', 'Token', 'Token value', 'Common uses']}
            rows={motionTimingRows}
          />
        </ContentSecondary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage role="region" aria-label="Timing">
            These should use the{' '}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function">
              animation-timing-function
            </Link>
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="usage">
        <ContentPrimary
          toc="Usage"
          id="usage"
          headline="Usage"
          description="The following guidance describes how and when to use motion."
          showSeparator
        >
          <MediaList
            gridProps={{xsRowGutter: 'space050'}}
            cardType="usage"
            layout="2-span"
            cards={DO_AND_DONT}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="accessibility">
        <ContentPrimary
          id="a11y"
          toc="Accessibility"
          headline="Accessibility considerations"
          description="When creating custom animations using the motion foundations, the following should be considered to help ensure the quality and usability of your implementation:"
          childrenColSpan={ContentColSpan.TEXT}
        >
          <UnorderedList
            listItemMarker={IconFilledCircle}
            markerAlign="start"
            overrides={{spaceStack: 'space040'}}
          >
            <P overrides={{typographyPreset: 'editorialParagraph030'}}>
              If motion plays an extensive role in your product’s experience,
              offer an option to reduce motion to improve usability for people
              who could be adversely affected by motion on screens.
            </P>

            <P overrides={{typographyPreset: 'editorialParagraph030'}}>
              Always consider the needs of people who are sensitive to motion.
              Consider avoiding large, abrupt movements, or moving multiple
              objects at the same time in different directions.
            </P>
          </UnorderedList>
        </ContentPrimary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <Link
            overrides={{typographyPreset: 'editorialParagraph030'}}
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/3446341702/Motion+Presets+-+Web+Documentation#Reduced-Motion-For-Motion-Sensitivities"
          >
            Learn more about accessibility considerations for Motion.
          </Link>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Motion;
