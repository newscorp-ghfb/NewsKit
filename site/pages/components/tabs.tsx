import React from 'react';
import {Tab, Tabs, TextBlock, UnorderedList, InlineMessage} from 'newskit';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {Mono} from '../../components/flags';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {Link} from '../../components/link';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const TabsComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Tabs',
      description:
        'Tabs let users switch between views within the same context.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Tabs',
      hero: {
        illustration: 'components/tabs-illustration',
      },
      introduction:
        'Tabs let users switch between views within the same context.',
    }}
    componentDefaultsKey="tabs"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.20.1',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
      storybookId: 'components-tabs--story-tabs-distribution-start',
    }}
    usage={{
      introduction: 'Here’s how and when to use tabs:',
      cards: [
        {
          description:
            'Use tabs to let users alternate between views within the same context.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-do-01-illustration',
          ),
        },
        {
          description:
            'Avoid using tabs to navigate to different pages and anchoring to different sections on a page. Use a navigation component (e.g. link) instead.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/tabs/tabs-dont-01-illustration',
          ),
        },
        {
          description:
            'Use tabs when users have two or more content views to choose from.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-do-02-illustration',
          ),
        },
        {
          description:
            'Avoid using tabs when there are more than five or more content views to choose from. Consider an alternative component (e.g. select) to reduce the user’s cognitive load.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/tabs/tabs-dont-02-illustration',
          ),
        },
        {
          description:
            'All tab items should be the same size (e.g. small, medium or large). This helps ensure they have equal importance.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-do-03-illustration',
          ),
        },
        {
          description:
            'Avoid mixing tab items that include an icon with those that don’t include an icon. This helps ensure they have equal importance.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/tabs/tabs-dont-03-illustration',
          ),
        },
        {
          description:
            'Tab labels should be in sentence case. This helps with scannability and legibility.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-do-04-illustration',
          ),
        },
        {
          description:
            'Avoid nesting tabs as this can cause usability issues. Consider an alternative component (e.g. accordion) or rethink the page structure.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/tabs/tabs-do-06-illustration',
          ),
        },
        {
          description:
            'Tab labels should be written in sentence case to help with scannability and legibility.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-dont-04-illustration',
          ),
        },
        {
          description:
            'Tabs should be in close proximity to the content they’re changing.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-dont-05-illustration',
          ),
        },
        {
          description:
            'The tab should remain in view of the content. If the content is too large to display with the tabs in the same viewport, make the tabs fixed (sticky).',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-do-07-illustration',
          ),
        },
        {
          description:
            'Use tabs in the vertical orientation when horizontal space is less generous and when the list of sections is greater than can be presented to the user in a horizontal format (i.e. more than five).',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/tabs/tabs-do-07-illustration',
          ),
        },
      ],
    }}
    componentAPI={{
      introduction: `Tabs have a range of props for different use cases, and a range of predefined elements and attributes that can be overridden to define their appearance.`,
      components: [
        {
          title: 'Tabs',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: `An array of tab components`,
            },
            {
              name: 'vertical',
              type: 'boolean',
              default: 'false',
              description: 'If ‘true’, changes the orientation to vertical',
            },
            {
              name: 'distribution',
              type: ' start | grow | equal',
              default: 'start',
              description: 'Defines the distribution of the tabs',
            },
            {
              name: 'align',
              type: ' start | end | center',
              default: 'start',
              description: 'Defines the alignment of the tabs',
            },
            {
              name: 'divider',
              type: 'boolean',
              default: 'false',
              description:
                'If ‘true’, renders a divider component between tab items in a tab list',
            },
            {
              name: 'initialSelectedIndex',
              type: 'number',
              default: '0',
              description:
                'Defines the index of the initially selected Tab item (uncontrolled).',
            },
            {
              name: 'selectedIndex',
              type: 'number',
              description:
                'Defines the index of the selected tab item. When changing this value, tab item state is updated (controlled)',
            },
            {
              name: 'onChange',
              type: '(selectedIndex:number):void',
              default: '',
              description: 'Callback fired when the selected tab changes',
            },
          ],
          overridesRows: [
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the space between the tabs and the tab panel.',
            },
            {
              attribute: 'tab.spaceInline',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, overrides the space between each tab and divider',
            },
            {
              attribute: 'selectionIndicator.track.stylePreset',
              type: 'MQ<string>',
              default: 'tabBarTrack',
              description: `If provided, overrides the selection indicator track styling`,
            },

            {
              attribute: 'selectionIndicator.track.weight',
              type: 'MQ<string>',
              default: 'borderWidth020',
              description:
                'If provided with a sizing token, overrides the fixed weight (height if horizontal, width if vertical) of the selection indicator track',
            },
            {
              attribute: 'selectionIndicator.indicator.stylePreset',
              type: 'MQ<string>',
              default: 'tabsBarIndicator',
              description: 'If provided, overrides the indicator styling',
            },
            {
              attribute: 'selectionIndicator.indicator.size',
              type: 'string',
              default: '',
              description:
                'If provided with a sizing token or any CSS length value (e.g. 75%), overrides the indicator size',
            },
            {
              attribute: 'selectionIndicator.indicator.weight',
              type: 'string',
              default: 'borderWidth020',
              description:
                'If provided with a sizing token, overrides the fixed weight (height if horizontal, width if vertical) of the indicator',
            },
            {
              attribute: 'selectionIndicator.indicator.motionDuration',
              type: 'string',
              default: 'motionDuration030',
              description:
                'If provided with a motion duration token, overrides the transition duration upon hover and active of the indicator',
            },
            {
              attribute: 'selectionIndicator.indicator.motionTiming',
              type: 'string',
              default: 'motionTimingEaseInAndOut',
              description:
                'If provided with a motion timing token, overrides the transition timing upon hover and active of the indicator',
            },
            {
              attribute: 'divider',
              type: 'DividerOverrides',
              description: (
                <>
                  If provided, overrides the divider styling.{' '}
                  <Link target="_blank" href="/components/divider">
                    See divider
                  </Link>{' '}
                  for full documentation
                </>
              ),
            },
            {
              attribute: 'scroll',
              type: 'Override<ScrollProps>',
              default: '',
              description: (
                <>
                  If provided, overrides the scroll styling.{' '}
                  <Link type="inline" target="_blank" href="/components/scroll">
                    See scroll
                  </Link>{' '}
                  for full documentation
                </>
              ),
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
          propsFooter: (
            <InlineMessage>
              To support resizing of the selected tab indicator this component
              uses the ResizeObserver API this is not supported in Internet
              explorer, if you require support we suggest you add a pollyfill to
              your application.
            </InlineMessage>
          ),
        },
        {
          title: 'Tab',
          summary:
            'A tab has a range of props for different use cases, and a range of predefined elements and attributes that can be overridden to define its appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'Content rendered inside the tab panel',
            },
            {
              name: 'label',
              type: 'React.ReactNode',
              description: 'Label of the tab item',
            },
            {
              name: 'ariaLabel',
              type: 'string',
              default: 'label',
              description: 'Defines the aria-label attribute of the tab item',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'If ‘true’, renders a tab in a disabled state',
            },
            {
              name: 'autoFocus',
              type: 'boolean',
              default: 'false',
              description:
                'If ‘true’, this tab will be auto-focussed. Only one item on the page can be auto-focussed',
            },
            {
              name: 'dataTestId',
              type: 'string',
              default: 'tab',
              description: 'Defines the data-testid attribute of the tab item',
            },
          ],
          overridesRows: [
            {
              attribute: 'height',
              type: 'MQ<string>',
              description:
                'If provided with a sizing token, overrides the height of the tab',
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: ['Small = sizing060', 'Medium = sizing080'],
              description:
                'If provided with a sizing token, overrides the minHeight of the tab',
            },
            {
              attribute: 'width',
              type: 'MQ<string>',
              description:
                'If provided with a sizing token, overrides the minWidth of the tab',
            },
            {
              attribute: 'iconSize',
              type: 'MQ<string>',
              default: [
                'Small = iconSize010',
                'Medium = iconSize020',
                'Large = iconSize030',
              ],
              description:
                'If provided with a sizing token, overrides the minWidth of the tab',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'tab',
              description: 'If provided, overrides the tab styling',
            },
            {
              attribute: 'transitionPreset',
              type: 'MQ<string>',
              default: [
                'backgroundColorChange',
                'borderColorChange',
                'fontColorChange',
                'iconColorChange',
              ],
              description:
                'If provided, overrides the transition preset applied to the tab',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityButton010',
                'Medium = utilityButton030',
                'Large = utilityButton030',
              ],
              description:
                'If provided, overrides the selection indicator typography of the text label in the tab',
            },
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',

              default: [
                'Small = spaceInsetSquish020',
                'Medium = spaceInsetSquish030',
                'Large = spaceInsetSquish030',
              ],
              description:
                'If provided, overrides the inset space within the tab',
            },
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, overrides the space between the icon and the label in the tab',
            },
            {
              attribute: 'maxWidth',
              type: 'MQ<string>',
              description:
                'If provided, sets a maximum height to the tab. This can be a sizing token from the theme, or any CSS length value',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              description:
                'If provided, sets a maximum width to the tab. This can be a sizing token from the theme, or any CSS length value',
            },
          ],
        },
      ],
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the tabs component, its variations and configuration options.',
      playground: {
        componentName: 'Tabs',
        component: state => (
          <Tabs {...state}>
            <Tab label="Now playing">
              <TextBlock typographyPreset="utilityBody020">
                Stories of our Times | One remarkable story, told in depth, each
                day. Our daily news podcast takes you to the heart of the
                stories that matter, with exclusive access and reporting.
                Published for the start of your day and hosted by Manveen Rana
                and David Aaronovitch.
              </TextBlock>
            </Tab>
            <Tab label="Up next">
              <TextBlock typographyPreset="utilityBody020">
                Red Box | News Podcast of the Year: Matt Chorley presents the
                best interviews, analysis and panel discussions from his Times
                Radio show. Listen live 10am-1pm Monday to Thursday.
              </TextBlock>
            </Tab>
            <Tab label="Later">
              <TextBlock typographyPreset="utilityBody020">
                Stories of our Times | One remarkable story, told in depth, each
                day. Our daily news podcast takes you to the heart of the
                stories that matter, with exclusive access and reporting.
                Published for the start of your day and hosted by Manveen Rana
                and David Aaronovitch.
              </TextBlock>
            </Tab>
          </Tabs>
        ),
        knobs: [
          {
            name: 'Distribution',
            propName: 'distribution',
            options: [
              {
                label: 'start',
                value: 'start',
                isDefault: true,
              },
              {
                label: 'grow',
                value: 'grow',
              },
              {
                label: 'equal',
                value: 'equal',
              },
            ],
          },
          {
            name: 'Size',
            propName: 'size',
            options: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'medium',
                value: 'medium',
                isDefault: true,
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
          },
          {
            name: 'Space Inline',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {spaceInline: undefined},
                isDefault: true,
              },
              {
                label: 'space040',
                value: {spaceInline: 'space040'},
              },
              {
                label: 'space060',
                value: {spaceInline: 'space060'},
              },
            ],
          },
          {
            name: 'Tab Bar Track Weight',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  selectionIndicator: {
                    track: {
                      weight: undefined,
                    },
                  },
                },
                isDefault: true,
              },
              {
                label: 'borderWidth030',
                value: {
                  selectionIndicator: {
                    track: {
                      weight: 'borderWidth030',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'Tab Bar Indicator Weight',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  selectionIndicator: {
                    indicator: {
                      weight: undefined,
                    },
                  },
                },
                isDefault: true,
              },
              {
                label: 'borderWidth030',
                value: {
                  selectionIndicator: {
                    indicator: {
                      weight: 'borderWidth030',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'Tab Bar Indicator size',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  selectionIndicator: {
                    indicator: {
                      size: undefined,
                    },
                  },
                },
                isDefault: true,
              },
              {
                label: '75%',
                value: {
                  selectionIndicator: {
                    indicator: {
                      size: '75%',
                    },
                  },
                },
              },
              {
                label: 'sizing050',
                value: {
                  selectionIndicator: {
                    indicator: {
                      size: 'sizing050',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'Style preset overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  stylePreset: undefined,
                },
                isDefault: true,
              },
              {
                label: 'cardContainer',
                value: {
                  stylePreset: 'cardContainer',
                },
              },
            ],
          },
          {
            name: 'divider',
            propName: 'divider',
            type: 'boolean',
            value: false,
          },
          {
            name: 'vertical',
            propName: 'vertical',
            type: 'boolean',
            value: false,
          },
          {
            name: 'initialSelectedIndex',
            propName: 'initialSelectedIndex',
            type: 'number',
            value: 0,
          },
          {
            name: 'Align',
            propName: 'align',
            options: [
              {
                label: 'center',
                value: 'center',
                isDefault: true,
              },
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
          },
          {
            name: 'Indicator Position',
            propName: 'indicatorPosition',
            options: [
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
                isDefault: true,
              },
              {
                label: 'none',
                value: 'none',
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'Tabs contain four required elements and one optional element.',
      rows: [
        {
          name: 'Tab',
          description: 'Includes a label and an icon',
          component: ['Text Block', 'Icon'],
          optional: undefined,
        },
        {
          name: 'Tabs',
          description: 'Includes a list of tabs',
          component: 'Tabs',
          optional: undefined,
        },
        {
          name: 'Tabs Bar',
          description: 'Includes indicator and track',
          component: 'Block',
          optional: undefined,
        },
        {
          name: 'Divider',
          description: 'Dividers between each tab',
          component: 'Divider',
          optional: true,
        },
        {
          name: 'Tab Panel',
          description: 'Contains the elements of the tab content',
          component: 'Block',
          optional: undefined,
        },
      ],
      media: getIllustrationComponent(
        'components/tabs/anatomy-tabs-illustration',
        {viewBox: '0 0 1600 900'},
      ),
    }}
    options={{
      introduction: 'Tabs have options for different use cases:',
      cards: [
        {
          title: 'Size',
          description:
            'Tabs come in small, medium and large. Tab labels, icons and the tab container change size. Tabs match the heights of the three button sizes, so they align when used together.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-size-illustration',
          ),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Add an icon to a tab item. Icons can be positioned either before (leading) or after (trailing) the tab label.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-icons-illustration',
          ),
        },
        {
          title: 'Label',
          description:
            'Add labels to tab items. A label can give more context to the content that will be displayed when the user selects a tab.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-label-illustration',
          ),
        },
        {
          title: 'Orientation',
          description: 'Display tabs horizontally or vertically.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-orientation-illustration',
          ),
        },
        {
          title: 'Indicator position',
          description:
            'Display the tabs indicator on the bottom of the tab for the horizontal orientation and left or right of the tab for the vertical orientation.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-indicator-position-illustration',
          ),
        },
        {
          title: 'Indicator size',
          description:
            'Change the size of the tab indicator to give more or less prominence, using either: full-width of the tab, fixed-width/fixed-height (based on orientation) or a percentage of the tab height/width (based on orientation).',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-indicator-size-illustration',
          ),
        },
        {
          title: 'Indicator weight',
          description:
            'Customise the weight of the tab indicator to give more or less affordance.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-indicator-weight-illustration',
          ),
        },
        {
          title: 'Track weight',
          description:
            'Customise the weight of the tab track to give more or less affordance.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-track-weight-illustration',
          ),
        },
        {
          title: 'Dividers',
          description:
            'Add dividers between tab items. Dividers match the width or height (depending on orientation) of the tab items.',
          media: getIllustrationComponent(
            'components/tabs/tabs-options-dividers-illustration',
          ),
        },
        {
          title: 'Distribution',
          description: (
            <UnorderedList
              markerAlign="start"
              overrides={{
                content: {
                  stylePreset: 'inkBase',
                  typographyPreset: 'editorialParagraph020',
                },
              }}
            >
              <>
                <Mono>Start</Mono>&nbsp; Aligns the tab items to the left of the
                content area for horizontal orientation (default) and to the top
                for vertical orientation. The width of the tab group is defined
                by the width of its children.
              </>
              <>
                <Mono>Grow</Mono> Spreads all tab items across the content area,
                filling the entire available width or height, depending on the
                orientation. The width of each tab item is defined by its
                content.
              </>
              <>
                <Mono>Equal</Mono> Spaces each tab item across the content area
                equally, regardless of the width or height of its children.
              </>
            </UnorderedList> // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ) as any,

          media: getIllustrationComponent(
            'components/tabs/tabs-options-distribution-illustration',
            {viewBox: '0 0 1498 1381'},
          ),
        },
        {
          title: 'Alignment',
          description: (
            <>
              <UnorderedList
                markerAlign="start"
                overrides={{
                  marginBlockEnd: 'space050',
                  content: {
                    stylePreset: 'inkBase',
                    typographyPreset: 'editorialParagraph020',
                  },
                }}
              >
                <>
                  <Mono>Start</Mono>&nbsp;Aligns the tab item label and icons to
                  the left.
                </>
                <>
                  <Mono>Center</Mono> Centres the tab item label and icons.
                </>
                <>
                  <Mono>End</Mono> Aligns the tab item label and icons to the
                  right.
                </>
              </UnorderedList>
              <InlineMessage role="region" aria-label="note">
                The default alignment depends on the orientation. When tabs are
                vertical it’s <Mono>Start</Mono> and when tabs are horizontal
                it’s <Mono>Center</Mono>.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/tabs/tabs-options-alignment-illustration',
            {viewBox: '0 0 1491 1349'},
          ),
        },
      ],
    }}
    states={{
      introduction:
        'Tabs have the following states. By default, tabs have one tab item in a selected state.',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the tab item.',
          media: getIllustrationComponent(
            'components/tabs/tabs-states-base-illustration',
          ),
        },
        {
          title: 'Hover',
          description:
            'The tab item changes style to let the user know it’s interactive.',
          media: getIllustrationComponent(
            'components/tabs/tabs-states-hover-illustration',
          ),
        },
        {
          title: 'Active',
          description:
            'The tab item changes style to let the user know they’ve interacted with it.',
          media: getIllustrationComponent(
            'components/tabs/tabs-states-active-illustration',
          ),
        },
        {
          title: 'Selected',
          description:
            'The tab item changes style to let the user know they’ve selected it.',
          media: getIllustrationComponent(
            'components/tabs/tabs-states-selected-illustration',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a tab item exists, but isn’t available in that
              scenario. When the user hovers over a tab item in a disabled
              state, the cursor shows as ‘not allowed’.
              <br />
              <br />
              Disabled tab items maintain layout consistency and communicate
              that a tab item may become available if another condition is met.
            </>
          ),
          media: getIllustrationComponent(
            'components/tabs/tabs-states-disabled-illustration',
          ),
        },
        {
          title: 'Focus',
          description:
            'Communicates that a tab item exists, but isn’t available in that scenario. When the user hovers over a tab item in a disabled state, the cursor shows as ‘not allowed’.',
          media: getIllustrationComponent(
            'components/tabs/tabs-states-focus-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how tabs behave:',
      cards: [
        {
          title: 'Animation',
          description:
            'When the user selects a tab item, the indicator slides along the track of the tabs to the newly selected tab item. At the time of selection, the tabs content changes immediately.',
          media: getIllustrationComponent(
            'components/tabs/tabs-behaviours-animation-illustration',
          ),
        },
        {
          title: 'Selected',
          description:
            'The user can only select one tab item at a time. This property changes an individual tab item’s selected state.',
          media: getIllustrationComponent(
            'components/tabs/tabs-behaviours-selected-illustration',
          ),
        },
        {
          title: 'Tabs overflow',
          description:
            'When there are too many tabs to fit horizontally across the viewport, a scroll component is applied. On desktop, the controls (buttons) are rendered on the scroll.',
          media: getIllustrationComponent(
            'components/tabs/tabs-behaviours-tab-overflow-illustration',
          ),
        },
        {
          title: 'Label overflow wrap',
          description:
            'When the label in a tab item is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/tabs/tabs-behaviours-label-wrap-illustration',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          Tabs implement the latest{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role">
            WAI-ARIA Tabs specifications
          </Link>
          .
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'tab',
            role: 'Focusses to the first tab item in a tab list.',
          },
          {
            order: 2,
            element: 'tabPanel',
            role: 'Focusses to the tab panel.',
          },
        ],
      },
      interaction: {
        title: 'Keyboard interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside the tab list, moves focus to the active tab. If focus is on the active tab, moves focus to the next element in the keyboard focus tabs associated tab panel',
          },
          {
            command: ['Rtn'],
            description:
              'Activates the tab if it wasn’t activated automatically on focus',
          },
          {
            command: ['Left'],
            description:
              'Focusses and activates the previous tab in the tab list when the orientation of the tabs is horizontal. If the current tab is the first tab in the tab list it activates the last tab',
          },
          {
            command: ['Right'],
            description:
              'Focusses and activates the next tab in the tab list when the orientation of the tabs is horizontal. If the current tab is the last tab in the tab list it activates the first tab',
          },
          {
            command: ['Up'],
            description:
              'Focusses and activates the previous tab in the tab list when the orientation of the tabs is vertical. If the current tab is the first tab in the tab list it activates the last tab',
          },
          {
            command: ['Down'],
            description:
              'Focusses and activates the next tab in the tab list when the orientation of the tabs is vertical. If the current tab is the last tab in the tab list it activates the first tab',
          },
          {
            command: ['Home'],
            description: 'Focusses and activates the first tab in the tab list',
          },
          {
            command: ['End'],
            description: 'Focusses and activates the last tab in the tab list',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'tab',
            attribute: 'arialabel',
            value: '',
            description:
              'Defines a string that labels the action that will be performed when the user interacts with a tab item (e.g. ariaLabel="view component overrides”)',
            userSupplied: true,
          },
          {
            element: 'tab',
            attribute: 'aria-selected',
            value: '“true” or “false”',
            description: 'Indicates the currently selected tab',
          },
          {
            element: 'tab',
            attribute: 'aria-controls',
            value: 'auto-generated',
            description:
              'Maintains a reference from the tab to the associated panel ',
          },
          {
            element: 'tab',
            attribute: 'aria-hidden',
            value: '“true”',
            description: 'Hides the tab bar indicator from screen readers',
          },
          {
            element: 'tab',
            attribute: 'aria-labelledby',
            value: 'auto-generated',
            description:
              'Maintains a reference from the tab to the associated panel',
          },
          {
            element: 'tab',
            attribute: 'role',
            value: '“tabpanel”',
            description:
              'Indicates an interactive element inside a tab group that, when activated, displays its associated tab panel',
          },
          {
            element: 'tab',
            attribute: 'aria-orientation',
            value: '“horizontal” or “vertical”',
            description: 'Describes the orientation of the tabs',
          },
        ],
      },
      infoNoticeAria:
        'By default, aria-label will match the tab text label. Where a tab item text label is not visible on the screen (i.e. if there’s only an icon in a tab item) a string should be passed to the title prop on the icon.',
    }}
    seo={{
      title: 'SEO considerations',
      introduction: 'Ensure icons have alt text applied.',
    }}
    related={{
      related: ['Accordion', 'Link', 'Menu', 'Tag'],
    }}
  />
);

export default TabsComponent;
