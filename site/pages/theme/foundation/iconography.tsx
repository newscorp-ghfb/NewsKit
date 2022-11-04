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
          <Illustration path="theme/iconography/overview" />
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
                media: getIllustrationComponent('theme/iconography/appearance'),
              },
              {
                title: 'Colour',
                description: (
                  <>
                    Apply colour to icons using{' '}
                    <Link href="/theme/foundation/colours#css-w5wzt1">
                      Ink colour tokens.
                    </Link>
                  </>
                ),
                media: getIllustrationComponent('theme/iconography/colours'),
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
                media: getIllustrationComponent('theme/iconography/size'),
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
                media: getIllustrationComponent('theme/iconography/structure'),
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
          headline="How to use icons"
          showSeparator
        >
          <MediaList
            gridProps={{xsRowGutter: 'space050'}}
            cardType="usage"
            layout="2-span"
            cards={[
              {
                description:
                  'Place icons within the 20px live area. Keep the 2px border of padding around the live area clear.',
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-01'),
              },
              {
                description:
                  'Position icons ‘on pixel’ so they’re clear and not pixelated, blurred or distorted.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent('theme/iconography/dont-01'),
              },
              {
                description:
                  'Use icons to reduce cognitive load and provide context.',
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-02'),
              },
              {
                description: (
                  <>
                    Avoid using icons as your only way of communicating, if
                    there’s space to include a label or supporting text.
                    Alternatively, use a tooltip
                    <Link href="/components/tooltip">tooltip</Link> to provide
                    additional context on hover.
                  </>
                ),
                kind: UsageKind.DONT,
                media: getIllustrationComponent('theme/iconography/dont-02'),
              },
              {
                description: 'Vertically centre-align icons when next to text.',
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-03'),
              },
              {
                description:
                  'Don’t use icons that are noticeably larger or smaller than the text they’re paired with, or the interface may feel unbalanced.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent('theme/iconography/dont-03'),
              },
              {
                description: (
                  <>
                    Use a 3:1 minimum colour contrast ratio between icon and
                    background colours. Learn more about W3 web accessibility
                    colour standards at
                    <Link target="_blank" href="https://www.w3.org/TR/WCAG21/">
                      WCAG
                    </Link>
                    .
                  </>
                ),
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-04'),
              },
              {
                description:
                  'Try to give icons a name that adequately describes what it represents.',
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-05'),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Iconography;
