import React from 'react';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {LayoutProps} from '../../../components/layout';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';
import {Link} from '../../../components/link';
import {ComponentPageCell} from '../../../components/layout-cells';
import {GuidePageTemplate} from '../../../templates/guide-page-template/guide-page-template';
import {UnorderedList} from '../../../../src/unordered-list';
import {MediaList} from '../../../components/media-list';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);
const whatNextCards = [
  {
    media: getIllustrationComponent('guides/accessibility-code/hero'),
    title: 'Code for accessibility',
    description:
      'Building to WCAG standards maintains quality and supports assistive technologies.',
    href: '/getting-started/accessibility/code',
  },
  {
    media: getIllustrationComponent('guides/accessibility-write/hero'),
    title: 'Write for accessibility',
    description: 'Clear copy in plain language benefits everyone.',
    href: '/getting-started/accessibility/write',
  },
];

const AccessibilityTest = (layoutProps: LayoutProps) => (
  <GuidePageTemplate
    headTags={{
      title: 'Test for accessibility',
      description:
        'Tools and checkers to help you test against accessibilty guidelines.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Accessibility',
      name: 'Code for accessibility',
      hero: {
        illustration: '/guides/accessibility-test/hero',
      },
      introduction: `Tools and checkers to help you test against accessibility guidelines.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="test accessible websites">
        <ContentPrimary
          id="test-design"
          headline="Test your design"
          description={
            <>
              <br />
              <br />
              <UnorderedList
                markerAlign="center"
                overrides={{
                  spaceStack: 'space040',
                  content: {
                    typographyPreset: 'editorialParagraph030',
                  },
                  marker: {
                    spaceInline: 'space020',
                  },
                }}
              >
                <>
                  <Link
                    href="https://webaim.org/resources/contrastchecker/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    WebAim contrast checker
                  </Link>{' '}
                  - check colour contrast of text and graphics.
                </>
                <>
                  <Link
                    href="https://colororacle.org/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Color Oracle
                  </Link>
                  - colour vision deficiency simulator.
                </>
                <>
                  <Link
                    href="https://www.figma.com/community/plugin/732603254453395948/Stark"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Stark
                  </Link>
                  - Figma accessibility plugin.
                </>
                <>
                  <Link
                    href="https://www.a11yproject.com/resources/#design-and-user-experience"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    The A11y Project
                  </Link>
                  - a comprehensive list of design and user experience
                  resources.
                </>
                <>
                  <Link
                    href="https://www.figma.com/community/file/1167124335986833540"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Accessible Prototypes Playground
                  </Link>
                  - accessible Figma prototypes for screenreaders.
                </>
              </UnorderedList>
              <br />
            </>
          }
        />

        <ContentPrimary
          id="code-design"
          toc="Test your code"
          headline="Test your code"
          description={
            <>
              <br />
              <br />
              <UnorderedList
                markerAlign="center"
                overrides={{
                  spaceStack: 'space040',
                  content: {
                    typographyPreset: 'editorialParagraph030',
                  },
                  marker: {
                    spaceInline: 'space020',
                  },
                }}
              >
                <>
                  <Link
                    href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Eslint-plugin-jsx-a11y linting plugin
                  </Link>{' '}
                  - find accessibility issues in React apps.
                </>
                <>
                  <Link
                    href="https://github.com/component-driven/cypress-axe"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Cypress axe
                  </Link>
                  - commands for Cypress to run accessibilty checks with
                  axe-core.
                </>
                <>
                  <Link
                    href="https://webaim.org/techniques/keyboard/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    WebAim’s keyboard accessibility guide
                  </Link>
                  - check all interactive elements are keyboard accessible and
                  focus feedback is visible.
                </>
                <>
                  <Link
                    href="https://chromelens.github.io/chromelens/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    ChromeLens dev tools extension
                  </Link>
                  - check the tab order is logical using the ‘trace tab path’
                  function or use the ‘show tabbing order’ function in Chrome or
                  Firefox.
                </>
                <>
                  <Link
                    href="https://tiny-helpers.dev/accessibility/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Tiny Helpers
                  </Link>
                  - A collection of free single-purpose online tools for web
                  developers.
                </>
              </UnorderedList>
            </>
          }
        />

        <ContentPrimary
          id="screenreader-design"
          headline="Test with screenreaders"
          description={
            <UnorderedList
              markerAlign="start"
              overrides={{
                spaceStack: 'space040',
                content: {
                  typographyPreset: 'editorialParagraph030',
                },
                marker: {
                  spaceInline: 'space020',
                },
              }}
            >
              <>
                VoiceOver (Mac) -
                <br />
                <Link
                  href="https://www.youtube.com/watch?v=5R-6WvAihms"
                  external={false}
                  overrides={{typographyPreset: 'editorialParagraph030'}}
                >
                  Watch A11ycasts Voiceover basics
                </Link>{' '}
                <br />
                <Link
                  href="https://webaim.org/articles/voiceover/"
                  external={false}
                  overrides={{
                    typographyPreset: 'editorialParagraph030',
                  }}
                >
                  Read WebAim’s Voiceover guide
                </Link>
                <br />
                <br />
              </>

              <>
                Talkback (Android) -
                <br />
                <Link
                  href="https://www.youtube.com/watch?v=0Zpzl4EKCco"
                  external={false}
                  overrides={{typographyPreset: 'editorialParagraph030'}}
                >
                  Watch A11ycasts Talkback basics
                </Link>{' '}
                <br />
                <Link
                  href="https://webaim.org/articles/talkback/"
                  external={false}
                  overrides={{typographyPreset: 'editorialParagraph030'}}
                >
                  Read WebAim’s Talkback guide
                </Link>
                <br />
                <br />
              </>
              <>
                NVDA (Windows) -
                <br />
                <Link
                  href="https://www.youtube.com/watch?v=Jao3s_CwdRU"
                  external={false}
                  overrides={{typographyPreset: 'editorialParagraph030'}}
                >
                  Watch A11ycasts NVDA basics
                </Link>{' '}
                <br />
                <Link
                  href="https://webaim.org/articles/nvda/"
                  external={false}
                  overrides={{typographyPreset: 'editorialParagraph030'}}
                >
                  Read WebAim’s NVDA guide
                </Link>{' '}
              </>
            </UnorderedList>
          }
        />

        <ContentPrimary
          showSeparator
          id="screenreader-design"
          headline="Test your writing"
          description={
            <>
              <br />
              <UnorderedList
                markerAlign="start"
                overrides={{
                  spaceStack: 'space040',
                  content: {
                    typographyPreset: 'editorialParagraph030',
                  },
                  marker: {
                    spaceInline: 'space020',
                  },
                }}
              >
                <>
                  <Link
                    href="https://app.readable.com/text/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Readable
                  </Link>
                  - get a readability score to measure whether content is likely
                  to be understood by the intended reader.
                </>
              </UnorderedList>
            </>
          }
        />

        <ContentPrimary
          showSeparator
          id="screenreader-design"
          headline="Checklists"
          description={
            <>
              <InlineMessage icon={infoIcon}>
                Use checklists for guidance. Checklists dont cover off all or
                replaces testing.
              </InlineMessage>
              <br />
              <br />
              <UnorderedList
                markerAlign="center"
                overrides={{
                  spaceStack: 'space040',
                  content: {
                    typographyPreset: 'editorialParagraph030',
                  },
                  marker: {
                    spaceInline: 'space020',
                  },
                }}
              >
                <>
                  <Link
                    href="https://www.a11yproject.com/checklist/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    A11y Project
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://webaim.org/standards/wcag/checklist"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    WebAIM
                  </Link>
                  - comprehensive checklists in plain English.
                </>
                <>
                  <Link
                    href="https://webaim.org/articles/evaluationguide/"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    WebAim web accessibility evaluation guide
                  </Link>
                  - accessibility checks by content type.
                </>
                <>
                  <Link
                    href="https://www.figma.com/proto/V7YQVtYIHS5gWKalbTvubq/%F0%9F%9F%A2-Handoff-Documentation?page-id=163%3A66379&node-id=163%3A66926&viewport=496%2C49%2C0.15&scaling=scale-down-width&hide-ui=1"
                    external={false}
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                  >
                    Accessibility checklist
                  </Link>
                  - Figma checklist of key considerations.
                </>
              </UnorderedList>
            </>
          }
        />
      </ContentSection>
      <ContentSection sectionName="what’s next?">
        <ContentPrimary
          id="whatsnext"
          toc="What’s next?"
          headline="What’s next?"
        >
          <MediaList
            cards={whatNextCards}
            gridProps={{xsRowGutter: 'space050'}}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </GuidePageTemplate>
);

export default AccessibilityTest;
