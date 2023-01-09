import React from 'react';
import {InlineMessage} from 'newskit';
import {
  Illustration,
  getIllustrationComponent,
} from '../../../components/illustrations/illustration-loader';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {MediaList} from '../../../components/media-list';
import {UsageKind} from '../../../components/usage-card';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';
import {Link} from '../../../components/link';

const Iconography = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Iconography',
      description:
        'Icons provide additional context and visual cues, and reinforce interactions.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Iconography',
      hero: {
        illustration: 'theme/iconography/hero',
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
              NewsKit icons follow common icon usage, naming conventions and
              platform considerations where possible.
              <br />
              <br />
              Icons in the library feed into the{' '}
              <Link href="/components/icons">icon component</Link>, which a host
              of other more complex components in the system use.
            </>
          }
          showSeparator
        >
          <Illustration
            viewBox="0 0 1490 600"
            path="theme/iconography/overview"
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="characteristics">
        <ContentPrimary
          id="characteristics"
          toc="Characteristics"
          headline="Characteristics"
          description="Icons have the following characteristics:"
        >
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Overlay',
                description:
                  'Most icons are available in filled and outlined variants. Occasionally, only one style is available for aesthetic reasons.',
                media: getIllustrationComponent(
                  'theme/iconography/appearance',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: 'Colour',
                description: (
                  <>
                    Apply colour to icons using{' '}
                    <Link href="/theme/foundation/colours#css-w5wzt1">
                      ink colour tokens.
                    </Link>
                  </>
                ),
                media: getIllustrationComponent('theme/iconography/colours', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                title: 'Size',
                description: (
                  <>
                    Set the size of icons using{' '}
                    <Link href="/theme/foundation/spacing/#css-2ka130">
                      icon size tokens.
                    </Link>
                  </>
                ),
                media: getIllustrationComponent('theme/iconography/size', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                title: 'Structure',
                description: (
                  <>
                    Icons in the library use a{' '}
                    <Link
                      href="https://www.figma.com/proto/44FDCMcOPHd5m29NKTESm7/Component-Documentation-Sheets?page-id=123%3A57177&amp;node-id=123%3A57178&amp;viewport=910%2C801%2C0.11311577260494232&amp;scaling=min-zoom&amp;hide-ui=1"
                      target="_blank"
                    >
                      24px x 24px
                    </Link>{' '}
                    frame. They have a 2px clear space around the outer edges
                    (shown in the outer frame on the diagram).
                    <br />
                    <br />
                    The space inside the outer frame is known as the ‘live
                    area’. The complete composition, including clear space, is
                    known as the ‘trim area’.
                  </>
                ),
                media: getIllustrationComponent('theme/iconography/structure', {
                  viewBox: '0 0 1344 759',
                }),
              },
            ]}
          />
        </ContentPrimary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            role="region"
            title="Override default icons"
            aria-label="Characteristics"
          >
            Designers -{' '}
            <Link
              target="_blank"
              href="https://www.figma.com/proto/44FDCMcOPHd5m29NKTESm7/Component-Documentation-Sheets?page-id=123%3A57177&amp;node-id=123%3A57178&amp;viewport=909%2C801%2C0.11311577260494232&amp;scaling=scale-down-width&amp;hide-ui=1"
            >
              learn how to override default icons in the design icon library
            </Link>
            <br />
            Engineers -{' '}
            <Link href="/components/icons">
              learn how to override default icons in the theme
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
              NewsKit’s icons come from{' '}
              <Link
                target="_blank"
                href="https://material.io/design/iconography/system-icons.html#design-principles"
              >
                Google Material icon library.
              </Link>{' '}
            </>
          }
        />

        <ContentSecondary
          description={
            <>
              Icons follow a naming convention:
              <br />
              <br />
              <b>
                Icon {'{Set}'} {'{Name}'}
              </b>
              <br />
              <br />
              For example, <b>IconFilledSearch</b> or <b>IconOutlinedHome.</b>
            </>
          }
          showSeparator
          childrenColSpan={ContentColSpan.TEXT}
        />
      </ContentSection>

      <ContentSection sectionName="usage">
        <ContentPrimary
          toc="Usage"
          id="usage"
          headline="Here’s how and when to use icons:"
          showSeparator
        >
          <MediaList
            gridProps={{xsRowGutter: 'space050'}}
            cardType="usage"
            layout="2-span"
            cards={[
              {
                title: 'Do keep icons within the live area',
                description:
                  'Place icons within the 20px live area. Keep the 2px border of padding around the live area clear.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'theme/iconography/usage/do-01',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: "Don't pixelate icons",
                description:
                  'Position icons ‘on pixel’ so they’re clear and not pixelated, blurred or distorted.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent(
                  'theme/iconography/usage/dont-01',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: 'Do use icons purposefully',
                description:
                  'Use icons to reduce cognitive load and provide context.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'theme/iconography/usage/do-02',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: 'Don’t forget labels (if there’s space)',
                description: (
                  <>
                    Include a label or supporting text alongside the icon if
                    there is space. Dont rely on the icon to convey meaning.
                    Alternatively, use a{' '}
                    <Link href="/components/tooltip">tooltip</Link> to provide
                    additional context on hover.
                  </>
                ),
                kind: UsageKind.DONT,
                media: getIllustrationComponent(
                  'theme/iconography/usage/dont-02',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: 'Do align icons properly',
                description: 'Vertically centre-align icons when next to text.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'theme/iconography/usage/do-03',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: 'Do make sure contrast is accessible',
                description: (
                  <>
                    Use a 3:1 minimum colour contrast ratio between icon and
                    background colours. Learn more about W3 web accessibility
                    colour standards at{' '}
                    <Link target="_blank" href="https://www.w3.org/TR/WCAG21/">
                      WCAG
                    </Link>
                    .
                  </>
                ),
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'theme/iconography/usage/do-04',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: 'Do name icons logically',
                description:
                  'Use names that describe what the icon represents. Keep them simple and logical.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'theme/iconography/usage/do-05',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
              {
                title: 'Do balance icon and text size',
                description:
                  'Use icons that are proportional to the text they are paired with or the interface may feel unbalanced.',
                kind: UsageKind.DO,
                media: getIllustrationComponent(
                  'theme/iconography/usage/do-06',
                  {
                    viewBox: '0 0 1344 759',
                  },
                ),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Iconography;
