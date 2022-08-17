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
    ),
    title: 'ScreenReaderOnly',
    description:
      'Wraps an element making sure that it is not visible to the user, but still readable by a screen reader.',
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
        'The collection of these three components can be used to show and hide content at different breakpoints.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Visible, Hidden & ScreenReaderOnly',
      hero: {
        illustration: 'components/visibility/visibility-illustration',
      },
      introduction:
        'The collection of these three components can be used to show and hide content at different breakpoints.',
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
      introduction="Visibility is comprised of three components."
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
          with the ~ key (above the Tab key).
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
      introduction="The following guidance describes how and when to appropriately use Visible, Hidden, and ScreenReaderOnly."
      cards={[
        {
          description:
            'Use ‘Visible’ or ‘Hidden’ where SEO is a consideration, to avoid layout shift.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/visibility/visibility-do-01-illustration',
          ),
        },
        {
          description:
            'Avoid hiding elements that are required by users across breakpoints. Have equivalent functionality for different breakpoints, eg a Drawer for top-level navigation items on xs or sm breakpoints where space is limited.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/visibility/visibility-dont-01-illustration',
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
        description:
          'When an id is provided, it can be used to reference this element, for example from an aria-describedby attribute.',
      }}
      infoNoticeAria="Be careful to test at all breakpoints when using ‘Hidden’ or ‘Visible’."
    />
    <SEOSection
      title="SEO Considerations"
      introduction="Use ‘Visible’ or ‘Hidden’ where SEO is a consideration, to avoid layout shift."
    />
    <ComponentAPISection
      introduction="'Visible', 'Hidden' and 'ScreenReaderOnly' have a range of props that can be used to define an appropriate experience for different use cases."
      components={[
        {
          title: 'Visible Component Props',
          summary:
            '‘Visible’ has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'Content of the visiblity container.',
            },
            {
              name: 'display',
              type: 'string',
              description: (
                <>
                  CSS attribute for display.
                  <br />
                  <br />
                  For more information on the display CSS property, please refer
                  to the documentation{' '}
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
                    here
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
          title: 'Hidden Component Props',
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
                  For more information on the display CSS property, please refer
                  to the documentation{' '}
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
                    here
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
          title: 'ScreenReaderOnly Component Props',
          summary:
            '‘ScreenReaderOnly’ has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              required: true,
              description:
                'The description of an element is passed as the child of the component.',
            },
            {
              name: 'id',
              type: 'string',
              description: (
                <>
                  If provided, the id can be used to reference this element, for
                  example from an <Mono>aria-describedby</Mono> attribute.
                </>
              ),
            },
          ],
        },
      ]}
    />
    <RelatedComponentsSection
      related={[
        'Block',
        'Card',
        'Divider',
        'Drawer',
        'Fieldset',
        'Grid',
        'Grid Layout',
        'Modal',
        'Popover',
        'Stack',
        'Structured List',
      ]}
    />
  </ComponentPageBasicTemplate>
);

export default VisibilityComponent;
