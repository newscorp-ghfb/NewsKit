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
        'Icons provide additional context to information, provide a visual cue, or visually reinforce the interaction.',
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
                    Colour can be applied to icons using{' '}
                    <Link href="/theme/foundation/colours#css-w5wzt1">
                      Ink colour tokens.
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
                    Icons can be sized using{' '}
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
          childrenColSpan={ContentColSpan.TEXT}
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
                media: getIllustrationComponent('theme/iconography/do-01', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                description:
                  'To avoid distorting an icon, position icons ‘on pixel’ so they appear clear and not pixelated or blurred.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent('theme/iconography/dont-01', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                description:
                  'Icons should be used purposefully to reduce cognitive load and provide greater context.',
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-02', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                description:
                  'Avoid using Icons as the sole way of communicating if there is the space to accompany with a label or supporting text.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent('theme/iconography/dont-02', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                description:
                  'When used next to text, icons should be vertically centre-aligned.',
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-03', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                description:
                  'Avoid using icon sizes that are noticeably larger or smaller than the text they are paired with, as this can lead to the interface feeling unbalanced.',
                kind: UsageKind.DONT,
                media: getIllustrationComponent('theme/iconography/dont-03', {
                  viewBox: '0 0 1344 759',
                }),
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
                media: getIllustrationComponent('theme/iconography/do-04', {
                  viewBox: '0 0 1344 759',
                }),
              },
              {
                description:
                  'Try to give icons a name that adequately describes what it represents.',
                kind: UsageKind.DO,
                media: getIllustrationComponent('theme/iconography/do-05', {
                  viewBox: '0 0 1344 759',
                }),
              },
            ]}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Iconography;
