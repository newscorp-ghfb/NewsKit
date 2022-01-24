import React from 'react';
import {InlineMessage} from 'newskit';
import {
  Illustration,
  getIllustrationComponent,
} from '../../components/illustrations/illustration-loader';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {MediaList} from '../../components/media-list';
import {UsageKind} from '../../components/usage-card';
import {ComponentPageCell} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';
import {Link} from '../../components/link';

const featureCardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardoverrides;

const PRINCIPLE_CARDS = [
  {
    media: {
      src: 'static/theming/foundations/simple.svg',
      alt: '',
    },
    title: 'Simple',
    description:
      'The style of icons in the library is paired back and not too elaborate for ease of interpretation, and so they work well at smaller sizes',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/consistent.svg',
      alt: '',
    },
    title: 'Consistent',
    description:
      'Icons should be used consistently across products and platforms for the same function',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/contextual.svg',
      alt: '',
    },
    title: 'Contextual',
    description:
      'Icons are used as visual representations of common actions and commands to provide additional context and enhance usability',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
];

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Iconography | Newskit design system',
      description:
        'Icons provide additional context to information, provide a visual cue, or visually reinforce the interaction.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Iconography',
      hero: {
        illustration: 'foundations/iconography/hero',
      },
      introduction: `Icons provide additional context to information, provide a visual cue, or visually reinforce the interaction.`,
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
              NewsKit icons need to support multiple themes, so icons in the
              library aim to strike a balance between form and function. They
              represent actions and as simply and as accurately as possible for
              better understanding for users. We leverage commonly established
              icon usage, naming conventions and platform considerations where
              possible for ease of comprehension for users.
              <br />
              <br />
              Icons in the library feed into the Icon component, which a host of
              other more complex components in the system uses.
              <br />
              <br />
              <Link href="/components/icons">
                Learn more about the Icon component
              </Link>
            </>
          }
          showSeparator
        >
          <Illustration path="foundations/iconography/overview" />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="principles">
        <ContentPrimary
          id="principles"
          toc="Principles"
          headline="Principles"
          showSeparator
        >
          <MediaList
            layout="3-span"
            cardType="feature"
            cards={PRINCIPLE_CARDS}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="characteristics">
        <ContentPrimary
          id="characteristics"
          toc="Characteristics"
          headline="Characteristics"
          description="Icons have the following defining characteristics."
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Overlay',
                description:
                  'Icons have two variations; ‘Filled’ and ‘Outlined’. There will be certain instances when a ‘Filled’ and ‘Outlined’ instance of the same icon look the same. This is because some visual characteristics don’t lend themselves to one or the other style.',
                media: getIllustrationComponent(
                  'foundations/iconography/appearance',
                ),
              },
              {
                title: 'Colour',
                description: (
                  <>
                    Colour can be applied to icons using{' '}
                    <Link href="/foundations/colours#css-w5wzt1">
                      Ink colour tokens.
                    </Link>
                  </>
                ),
                media: getIllustrationComponent(
                  'foundations/iconography/colours',
                ),
              },
              {
                title: 'Size',
                description: (
                  <>
                    Icons can be sized using{' '}
                    <Link href="/foundations/presets/space-presets/#css-2ka130">
                      icon size tokens.
                    </Link>
                  </>
                ),
                media: getIllustrationComponent('foundations/iconography/size'),
              },
              {
                title: 'Structure',
                description: (
                  <>
                    Icons in the library are created using a{' '}
                    <Link
                      target="_blank"
                      href="https://www.figma.com/proto/44FDCMcOPHd5m29NKTESm7/Component-Documentation-Sheets?page-id=123%3A57177&amp;node-id=123%3A57178&amp;viewport=910%2C801%2C0.11311577260494232&amp;scaling=min-zoom&amp;hide-ui=1"
                    >
                      24px x 24px
                    </Link>{' '}
                    frame, with a 2px clear space around the outer edges (shown
                    in teal on the diagram).
                    <br />
                    <br />
                    The space inside the teal frame is known as the ‘Live area’.
                    The complete composition, including clear space, is known as
                    the trim area.
                  </>
                ),
                media: getIllustrationComponent(
                  'foundations/iconography/structure',
                ),
              },
            ]}
          />
        </ContentPrimary>

        <ContentSecondary showSeparator>
          <InlineMessage
            role="region"
            title="We support the full library of default Icons available in NewsKit."
            aria-label="Characteristics"
          >
            Designers -{' '}
            <Link
              target="_blank"
              href="https://www.figma.com/proto/44FDCMcOPHd5m29NKTESm7/Component-Documentation-Sheets?page-id=123%3A57177&amp;node-id=123%3A57178&amp;viewport=909%2C801%2C0.11311577260494232&amp;scaling=scale-down-width&amp;hide-ui=1"
            >
              learn more about how to override default icons in the design icon
              library.
            </Link>
            <br />
            Engineers -{' '}
            <Link href="/components/icons">
              learn more about how to override default icons in the theme.
            </Link>
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="library">
        <ContentPrimary
          id="library"
          toc="Library"
          headline="Library"
          description={
            <>
              The NewsKit icon library is sourced from the{' '}
              <Link
                target="_blank"
                href="https://material.io/design/iconography/system-icons.html#design-principles"
              >
                Google Material icon library.
              </Link>{' '}
              NewsKit provides both <b>Filled</b> and <b>Outlined</b> sets,
              which are the basis for the NewsKit default icon library.
            </>
          }
        />

        <ContentSecondary
          description={
            <>
              Icons have the following naming convention:
              <br />
              <br />
              <b>
                Icon {'{Set}'} {'{Name}'}
              </b>
              <br />
              <br />
              For example - <b>IconFilledSearch</b> or <b>IconOutlinedHome.</b>
            </>
          }
          showSeparator
        >
          <InlineMessage
            role="region"
            title="We support the full library of default Icons available in NewsKit."
            aria-label="Library"
          >
            <Link
              target="_blank"
              href="https://material.io/design/iconography/system-icons.html#design-principles"
            >
              View the Google Material icon library for the full library of
              icons available.
            </Link>
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="usage">
        <ContentPrimary
          toc="Usage"
          id="usage"
          headline="Usage"
          description="The following guidance describes how and when to appropriately use iconography."
          showSeparator
        >
          <MediaList
            gridProps={{xsRowGutter: 'space050'}}
            cardType="usage"
            layout="2-span"
            cards={[
              {
                description: (
                  <>
                    Icon content should only be contained within the 20px live
                    area.
                    <br />
                    <br />
                    The 2px border of padding around the live area should be
                    kept clear.
                  </>
                ),
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'foundations/iconography/do-01',
                ),
              },
              {
                description:
                  'To avoid distorting an icon, position icons ‘on pixel’ so they appear clear and not pixelated or blurred.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent(
                  'foundations/iconography/dont-01',
                ),
              },
              {
                description:
                  'Icons should be used purposefully to reduce cognitive load and provide greater context.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'foundations/iconography/do-02',
                ),
              },
              {
                description:
                  'Avoid using Icons as the sole way of communicating if there is the space to accompany with a label or supporting text.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent(
                  'foundations/iconography/dont-02',
                ),
              },
              {
                description:
                  'When used next to text, icons should be vertically centre-aligned.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'foundations/iconography/do-03',
                ),
              },
              {
                description:
                  'Avoid using icon sizes that are noticeably larger or smaller than the text they are paired with, as this can lead to the interface feeling unbalanced.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent(
                  'foundations/iconography/dont-03',
                ),
              },
              {
                description: (
                  <>
                    Icons should have a 3:1 minimum colour contrast ratio for
                    sufficient contrast between icon color and its background.
                    <br />
                    <br />
                    <Link target="_blank" href="https://www.w3.org/TR/WCAG21/">
                      View W3 web accessibility colour standards
                    </Link>
                  </>
                ),
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'foundations/iconography/do-04',
                ),
              },
              {
                description:
                  'Try to give icons a name that adequately describes what it represents.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'foundations/iconography/do-05',
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);
