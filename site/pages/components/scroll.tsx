import React from 'react';
import {
  InlineMessage,
  toNewsKitIcon,
  UnorderedList,
  Scroll,
  ScrollProps,
  ScrollSnapAlignment,
  styled,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Box} from '../../demo-components/scroll/scroll-snap';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LegacyBlock} from '../../components/legacy-block';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const ScrollComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Scroll',
      description:
        'The scroll component adds scroll behaviour to overflowed content.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Scroll',
      hero: {
        illustration: 'components/scroll-illustration',
      },
      introduction:
        'The scroll component adds scroll behaviour to overflowed content.',
    }}
    componentDefaultsKey="scroll"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.8.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/scroll',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=2141%3A40757',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Scroll component, its variations, and configuration options.',
      playground: {
        componentName: 'Scroll',
        component: (state: ScrollProps) => {
          const Flex = styled.div`
            display: flex;
            align-items: center;
            height: 100%;
          `;
          const ContentWrapper = state.snapAlign
            ? ScrollSnapAlignment
            : React.Fragment;
          return (
            <LegacyBlock width="300px" height="200px">
              {!state.vertical && (
                <Scroll {...state}>
                  <Flex>
                    {Array.from({length: 10}, (_, i) => (
                      <ContentWrapper>
                        <Box>{`Item ${i + 1}`}</Box>
                      </ContentWrapper>
                    ))}
                  </Flex>
                </Scroll>
              )}
              {state.vertical && (
                <Scroll {...state}>
                  <ContentWrapper>
                    <p style={{width: '400px'}}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Impedit ipsa, molestiae officia ipsum facere blanditiis
                      iste obcaecati esse, quidem placeat tenetur dicta
                      distinctio inventore quasi sit sint explicabo quia
                      maiores. Doloremque sit doloribus incidunt aperiam
                      recusandae magnam nostrum labore eveniet, perferendis a,
                      quibusdam, quos earum! Numquam quaerat recusandae commodi
                      laudantium modi inventore voluptates officiis nesciunt
                      eius, quis velit voluptatum, quos natus, adipisci nisi!
                      Laborum eos incidunt maiores eaque obcaecati, itaque
                      perferendis! Consectetur magnam pariatur amet, enim
                      recusandae at laborum? Corrupti libero non, in eligendi
                      ipsum odio fugiat excepturi, architecto nam pariatur
                      reiciendis adipisci laudantium maiores. Earum quis magnam
                      consequatur maxime veniam itaque quae eveniet quasi harum
                      neque, expedita totam tempore aspernatur nostrum maiores
                      repudiandae suscipit velit quaerat illo! Temporibus
                      pariatur, enim mollitia animi odio tempore illum
                      asperiores est soluta. Itaque obcaecati eum molestias
                      expedita neque. Atque eum sint esse optio in dolore cum
                      officia iusto inventore ullam nobis culpa ipsum nostrum
                      aspernatur perferendis recusandae, maiores consectetur
                      mollitia provident! Placeat voluptatem a natus quod sequi
                      asperiores nam! Cupiditate illo voluptatum cumque
                      laudantium quo assumenda ut repudiandae perferendis.
                      Molestias, beatae sunt deleniti quasi nobis, provident
                      sequi iste quod corporis incidunt repellat architecto ab
                      voluptates saepe dolor velit, perspiciatis adipisci
                      veritatis debitis laboriosam?
                    </p>
                  </ContentWrapper>
                </Scroll>
              )}
            </LegacyBlock>
          );
        },
        knobs: [
          {
            name: 'Vertical',
            propName: 'vertical',
            value: false,
          },
          {
            name: 'ScrollBar',
            propName: 'scrollBar',
            value: false,
          },
          {
            name: 'Scroll With Controls',
            propName: 'controls',
            options: [
              {
                label: 'no controls',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'hover',
                value: 'hover',
              },
              {
                label: 'static',
                value: 'static',
              },
            ],
          },
          {
            name: 'Scroll Step',
            propName: 'stepDistance',
            options: [
              {
                label: 'default',
                value: undefined,
                isDefault: true,
              },
              {
                label: '100',
                value: 100,
              },
              {
                label: '50',
                value: 50,
              },
            ],
          },
          {
            name: 'Scroll Snap',
            propName: 'snapAlign',
            options: [
              {
                label: 'no snap',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'center',
                value: 'center',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'The scroll component contains one required element and two optional elements.',
      rows: [
        {
          name: 'Controls',
          description: 'Icon buttons for moving content left/right or up/down.',
          component: 'Icon Button',
          optional: true,
        },
        {
          name: 'Overlay',
          description:
            'A gradient overlays the scrollable element to indicate there is more content out of view.',
          component: 'Block',
          optional: true,
        },
        {
          name: 'Scroll bar',
          description:
            'A bar that indicates the horizontal or vertical position of the content being scrolled.',
          component: 'Block',
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/scroll/anatomy'),
    }}
    options={{
      introduction:
        'The scroll component has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Orientation',
          description:
            'The scroll component can be displayed horizontally or vertically, depending on the desired scroll direction.',
          media: getIllustrationComponent(
            'components/scroll/options/orientation',
          ),
        },
        {
          title: 'Control visibility',
          description:
            'Controls (icon buttons) can be enabled on the scroll. If enabled, they can be set to appear persistently or on hover.',
          media: getIllustrationComponent(
            'components/scroll/options/control-visibility',
          ),
        },
        {
          title: 'Scroll bar visibility',
          description:
            'A scroll bar can be displayed in the scroll component to provide users with extra context of the horizontal or vertical position of the content being scrolled.',
          media: getIllustrationComponent(
            'components/scroll/options/scroll-bar-visibility',
          ),
        },
        {
          title: 'Scroll step distance',
          description:
            'Scroll step distance can be adjusted to increase or decrease the distance scrolled when the controls are clicked.',
          media: getIllustrationComponent(
            'components/scroll/options/scroll-step-distance',
          ),
        },
        {
          title: 'Scroll snap alignment',
          description: (
            <>
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
                  marginBlockStart: 'space050',
                  marginBlockEnd: 'space050',
                }}
              >
                <>
                  <InlineCode>start</InlineCode> aligns the scroll item snapping
                  position to the left.
                </>
                <>
                  <InlineCode>center</InlineCode> centers the scroll item
                  snapping position.
                </>
                <>
                  <InlineCode>end</InlineCode> aligns the scroll item snapping
                  position to the right.
                </>
              </UnorderedList>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Scroll snap alignment"
              >
                `ScrollSnapAlignment` can be used inside to a scroll component
                to individually set where the component should align.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/scroll/options/scroll-snap-alignment',
          ),
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the scroll component behaves.',
      cards: [
        {
          title: 'Overlays',
          description: (
            <>
              Overlays are displayed when content is overflowing at either the
              start, the end, or both.
              <br />
              <br />
              You can change the style or visually hide the overlays by
              overriding the{' '}
              <Link href="/theme/presets/style-presets/">style preset.</Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/scroll/behaviours/overlays',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the scroll component.',
      cards: [
        {
          description:
            'Hide controls on mobile breakpoints to encourage a user to swipe with their finger, as this is common mobile device behaviour.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/scroll/usage/do-01'),
        },
        {
          description:
            'When using controls, use an appropriate step distance if all scrollable items have similar widths.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/scroll/usage/do-02'),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The scroll component has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        description:
          'Scroll controls are not focussable. When the scroll element is in focus, users are able to scroll the element natively e.g. keyboard, mouse scroll wheel.',
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Left'],
            description:
              'When in focus and horizontal, will scroll to the left.',
          },
          {
            command: ['Right'],
            description:
              'When in focus and horizontal, will scroll to the right.',
          },
          {
            command: ['Up'],
            description: 'When in focus and vertical, will scroll up.',
          },
          {
            command: ['Down'],
            description: 'When in focus and vertical, will scroll down.',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'scrollContainer',
            attribute: 'aria-orientation',
            value: `“horizontal” or “vertical”`,
            description: 'Describes the orientation of the scroll.',
            userSupplied: undefined,
          },
        ],
      },
    }}
    componentAPI={{
      components: [
        {
          title: 'Scroll',
          summary:
            'The scroll component has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'vertical',
              type: 'boolean',
              default: 'false',
              description: 'If true, changes the orientation to vertical.',
            },
            {
              name: 'scrollBar',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, and the content is overflowing, the scrollBar is
                  displayed, depending on the user agent.
                  <br />
                  <br />
                  Note - Not all browsers display the scrollBar as default.
                </>
              ),
            },
            {
              name: 'controls',
              type: ['hover', 'static'],
              default: 'undefined',
              description: (
                <>
                  Controls are only displayed when content is overflowing, and
                  one of the following props are provided:
                  <br />
                  <br />
                  &apos;hover&apos;, the controls will be visible only on hover.
                  <br />
                  <br />
                  &apos;static&apos;, the controls will persist on the screen.
                </>
              ),
            },
            {
              name: 'stepDistance',
              type: 'number',
              default: '160',
              description:
                'If provided, defines the number of pixels that an element is scrolled in either direction in pixels.',
            },
            {
              name: 'snapAlign',
              type: ['start', 'center', 'end'],
              description: (
                <>
                  If provided, defines the default scroll snapping behaviour for
                  all the child elements.
                  <br />
                  <br />
                  Children will need to be wrapped within a{' '}
                  <InlineCode>ScrollSnapAlignment</InlineCode> component for
                  this to function.
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'controls.button',
              type: 'ButtonOverrides',
              default: [
                'stylePreset: iconButtonSolidPrimary',
                'spaceInset: spaceInset000',
              ],
              description: (
                <>
                  Overrides the button in the controls.
                  <br />
                  <br />
                  See the{' '}
                  <Link href="/components/button/">button component</Link> for
                  more information.
                </>
              ),
            },
            {
              attribute: 'controls.offset',
              type: 'MQ<string>',
              default: 'space040',
              description:
                'Overrides the space between the controls and the outermost edges of the scroll.',
            },
            {
              attribute: 'overlays.stylePreset',
              type: 'MQ<string>',
              default: [
                'horizontal: scrollOverlaysHorizontal',
                'vertical: scrollOverlaysVertical',
              ],
              description: 'Overrides the stylePreset of the overlay.',
            },
            {
              attribute: 'overlays.size',
              type: 'MQ<string>',
              default: 'sizing090',
              description:
                'Overrides the size of the overlays. This will be applied as width when in the horizontal orientation and height for vertical orientation.',
            },
          ],
        },
        {
          title: 'ScrollSnapAlignment',
          summary:
            'ScrollSnapAlignment has a range of props that can be used to define an appropriate experience for different use cases. It can be used inside to a scroll component to individually set where the component should align. ',
          propsRows: [
            {
              name: 'snapAlign',
              type: ['start', 'center', 'end'],
              description:
                'If provided, defines the scroll snapping behaviour for the individual element in the scroll. This can be useful to define the first and last elements to snap to their outermost edges.',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Menu', 'Tabs'],
    }}
  />
);

export default ScrollComponent;
