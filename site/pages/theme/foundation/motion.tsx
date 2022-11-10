import React, {useEffect} from 'react';
import {
  newskitLightTheme,
  InlineMessage,
  UnorderedList,
  useMediaQuery,
} from 'newskit';
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
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {UsageKind} from '../../../components/usage-card';
import {Link} from '../../../components/link';
import {getTokenType} from '../../../utils/get-token-type';

const TOKENS_DESCRIPTION: {[key in string]: string} = {
  motionTimingLinear: 'Even speed from start to end',
  motionTimingEaseIn:
    'Curves accelerate. Works well for objects permanently exiting the screen (e.g. a drawer being dismissed)',
  motionTimingEaseOut:
    'Curves decelerate. Works well for objects appearing from off-screen (e.g. a drawer entering the screen)',
  motionTimingEaseInAndOut:
    'Curves initially accelerate and then decelerate. The default easing for animations and work in a variety of cases, especially for objects that move frequently from place to place on the screen (e.g. items in a drag-and-drop list)',
  motionDuration010: 'Sliders, progress Indicators',
  motionDuration020: 'Text Inputs',
  motionDuration030: 'Buttons, tags, checkboxes, switches, menu items',
  motionDuration040: 'Modals, drawers, toasts, banners',
  motionDuration050: 'Nav bars',
};

const DO_AND_DONT = [
  {
    description: `Motion should highlight important details and key points in a user’s journey.`,
    kind: UsageKind.DO,
    media: getIllustrationComponent('theme/motion/do-01'),
  },
  {
    description: `Motion shouldn’t distract or block the user from what they’re doing.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('theme/motion/dont-01'),
  },
  {
    description: `Avoid motion that’s too fast for the user to follow.`,
    kind: UsageKind.DONT,
    media: getIllustrationComponent('theme/motion/dont-02'),
  },
  {
    description: `Avoid motion that’s too slow and prevents a user from advancing.`,
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
      introduction: `Motion creates movement and narrative in a product. It can guide users, enhance their experience and show them where to focus.`,
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
              You can use motion foundations in animations and transitions.
              <br />
              <br />
              Learn more about how motion foundations are applied to animations
              and transitions via{' '}
              <Link href="/theme/presets/transition-presets" target="_blank">
                transition presets.
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
            You can override default motion in the foundations.{' '}
            <Link href="/theme/theming/creating-a-theme">Learn more here.</Link>
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="duration">
        <ContentPrimary
          toc="Duration"
          id="duration"
          headline="Duration"
          description="Timing is a matter of context. Consider the complexity of the action and the distance over which the animation occurs."
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
            You should use the{' '}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration">
              animation-duration
            </Link>{' '}
            CSS property.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="duration">
        <ContentPrimary
          toc="Timing"
          id="timing"
          headline="Timing"
          description={
            <>
              Timing controls the velocity of motion over its duration. It helps
              determine an animation’s feel and can help you mimic real-world
              physics by controlling how objects accelerate and decelerate as
              they move on the screen.
              <br />
              <br />
              NewsKit uses four types of timing:
            </>
          }
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
            You should use the{' '}
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function">
              animation-timing-function
            </Link>{' '}
            CSS property.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="usage">
        <ContentPrimary
          toc="Usage"
          id="usage"
          headline="How to use motion"
          description="Here’s how and when to use motion:"
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
          headline="Accessibility"
          description={
            <>
              When creating custom animations using the motion foundations,
              consider the following to make sure everyone can use your product:
              <UnorderedList
                markerAlign="start"
                overrides={{
                  marginBlockStart: 'space060',
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
                  'If motion plays an extensive role in your product, offer an option to reduce motion to improve usability for people who could be adversely affected by motion on screens',
                  'Consider the needs of people who are sensitive to motion. Think about avoiding large, abrupt movements, or moving multiple objects at the same time in different directions',
                ]}
              </UnorderedList>
              <Link href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/3446341702/Motion+Presets+-+Web+Documentation#Reduced-Motion-For-Motion-Sensitivities">
                Learn more about motion accessibility considerations.
              </Link>
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Motion;
