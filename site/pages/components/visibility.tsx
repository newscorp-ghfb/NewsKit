/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {Block, InlineMessage} from 'newskit';
import {CodeFromFile} from '../../components/code';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {MediaList} from '../../components/media-list';
import {ComponentPageBasicTemplate} from '../../templates/component-page-template/component-page-basic-template';
import {
  AccessibilitySection,
  CommonSection,
  ComponentAPISection,
  RelatedComponentsSection,
  SEOSection,
  UsageSection,
} from '../../templates/template-sections';
import {
  ComponentPageCell,
  ComponentPageCellCompact,
} from '../../components/layout-cells';
import {Link} from '../../components/link';
import {Mono} from '../../components/flags';

const CellWrapper = ({children}: {children: any}) => (
  <ComponentPageCellCompact>{children}</ComponentPageCellCompact>
);

const componentsCardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = componentsCardoverrides;

const cards = [
  {
    media: getIllustrationComponent(
      'components/visibility/visible-illustration',
      {viewBox: '0 0 1490 839'},
    ),
    title: 'Visible',
    description:
      'Content will be visible if the screen size matches the applied breakpoint.',
    stylePrefix: 'principleCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: getIllustrationComponent(
      'components/visibility/hidden-illustration',
      {viewBox: '0 0 1490 839'},
    ),
    title: 'Hidden',
    description:
      'Content will be hidden if the screen size matches the applied breakpoint.',
    stylePrefix: 'principleCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: getIllustrationComponent(
      'components/visibility/screenreaderonly-illustration',
      {viewBox: '0 0 1490 839'},
    ),
    title: 'ScreenReaderOnly',
    description:
      'Wraps an element as the child of the component so it’s readable by a screen reader but not visible to the user (using the ID for reference).',
    stylePrefix: 'principleCard',
    overrides: {
      title,
      description,
    },
  },
];

const VisibilityComponent = (layoutProps: LayoutProps) => (
  <ComponentPageBasicTemplate
    headTags={{
      title: 'Visible, Hidden & ScreenReaderOnly',
      description:
        'A collection of three components (visibility, hidden and screen reader only) to show and hide content at different breakpoints.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Visible, Hidden & ScreenReaderOnly',
      hero: {
        illustration: 'components/visibility/visibility-illustration',
      },
      introduction:
        'A collection of three components (visibility, hidden and screen reader only) to show and hide content at different breakpoints.',
    }}
    componentDefaultsKey="visibility"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/blob/main/src/grid/visibility.tsx',
    }}
  >
    <CommonSection
      title="Components"
      id="components"
      toc="Components"
      introduction="Visibility comprises three components."
    >
      <ComponentPageCell>
        <MediaList cards={cards} />
      </ComponentPageCell>
    </CommonSection>
    <CommonSection title="Code Example" id="code-example" toc="Code Example">
      <CellWrapper>
        <Block spaceStack="space050">
          <CodeFromFile path="examples/visibility.tsx" />
        </Block>
        <InlineMessage role="region" aria-label="demo-note" title="Note">
          You can toggle on the breakpoint indicator at the top of the screen
          with the ~ key.
        </InlineMessage>
      </CellWrapper>
    </CommonSection>
    <CommonSection
      title="Screen Reader Only"
      id="screenReaderOnly"
      toc="Screen Reader Only"
      introduction="The 'ScreenReaderOnly' component wraps an element as the child of the component, making sure that it is not visible to the user but still readable by a screen reader, using the id to reference it."
    >
      <CellWrapper>
        <CodeFromFile path="examples/screen-reader.tsx" />
      </CellWrapper>
    </CommonSection>
    <UsageSection

      introduction="Here’s how and when to use visible, hidden and screen reader only:"
      cards={[
        {
          title: 'Don’t hide elements required across breakpoints',
          description:
            'Have equivalent functionality for all breakpoints (e.g. a drawer for top-level navigation items on xs or sm breakpoints where space is limited).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/visibility/usage/dont-01',
            {viewBox: '0 0 1490 839'},
          ),
        },
      ]}
    />
    <AccessibilitySection
      introduction="Visibility has the following accessibility considerations:"
      focusOrder={{
        title: 'Focus order',
        description:
          "When used 'Hidden’ excludes content from focus order when the screen size matches the applied breakpoint.",
      }}
      aria={{
        title: 'WAI-ARIA',
        description: (
          <>
            You can provide context, purpose and additional information for
            people who are using assistive tools. This benefits users who are
            blind or low vision or have cognitive disabilities.
            <br />
            <br />
            Apply an aria-labelledby or aria-describedby attribute to the
            element you want to be described. Then pass the &apos;id&apos; for
            the aria attribute value to screen reader only.
          </>
        ),
      }}
      infoNoticeAria="Test all breakpoints carefully when using hidden or visible."
    />
    <SEOSection
      title="SEO considerations"
      introduction="Use visible or hidden where SEO is a consideration, to avoid layout shift."
    />
    <ComponentAPISection
      introduction="Visible, hidden and screen reader only have a range of props to define the experience in different use cases."
      components={[
        {
          title: 'Visible',
          summary:
            'Visible, hidden and screen reader only have a range of props to define the experience in different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'Content of the visibility container',
            },
            {
              name: 'display',
              type: 'string',
              description: (
                <>
                  CSS attribute for display.
                  <br />
                  <br />
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
                    Learn more about the display property at MDN Web Docs
                  </Link>
                </>
              ),
            },
            {
              name: 'xs',
              type: 'boolean',
              description: 'Render when in xs breakpoint.',
            },
            {
              name: 'sm',
              type: 'boolean',
              description: 'Render when in sm breakpoint.',
            },
            {
              name: 'md',
              type: 'boolean',
              description: 'Render when in md breakpoint.',
            },
            {
              name: 'lg',
              type: 'boolean',
              description: 'Render when in lg breakpoint.',
            },
            {
              name: 'xl',
              type: 'boolean',
              description: 'Render when in xl breakpoint.',
            },
            {
              name: 'targetDevices',
              type: 'Array<Devices>',
              description:
                'Array of devices for which the content is visible with higher priority than the above breakpoints.',
            },
          ],
        },
        {
          title: 'Hidden',
          summary:
            '‘Hidden’ has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'Content of the hidden container.',
            },
            {
              name: 'display',
              type: 'string',
              description: (
                <>
                  CSS attribute for display.
                  <br />
                  <br />
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
                    Learn more about the display property at MDN Web Docs
                    documentation
                  </Link>
                </>
              ),
            },
            {
              name: 'xs',
              type: 'boolean',
              description: 'Hidden when in xs breakpoint.',
            },
            {
              name: 'sm',
              type: 'boolean',
              description: 'Hidden when in sm breakpoint.',
            },
            {
              name: 'md',
              type: 'boolean',
              description: 'Hidden when in md breakpoint.',
            },
            {
              name: 'lg',
              type: 'boolean',
              description: 'Hidden when in lg breakpoint.',
            },
            {
              name: 'xl',
              type: 'boolean',
              description: 'Hidden when in xl breakpoint.',
            },
            {
              name: 'targetDevices',
              type: 'Array<Devices>',
              description:
                'Array of devices for which the content is hidden with higher priority than the above breakpoints.',
            },
          ],
        },
        {
          title: 'ScreenReaderOnly',
          summary:
            '‘ScreenReaderOnly’ has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              required: true,
              description:
                'Passes the description of an element as the child of the component',
            },
            {
              name: 'id',
              type: 'string',
              description: (
                <>
                  If provided, the ID can be used to reference this element
                  (e.g. from an <Mono>aria-describedby</Mono> attribute.
                </>
              ),
            },
          ],
        },
      ]}
    />
    <RelatedComponentsSection related={['Block', 'Grid', 'Stack']} />
  </ComponentPageBasicTemplate>
);

export default VisibilityComponent;
