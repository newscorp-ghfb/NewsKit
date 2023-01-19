import React from 'react';
import {Slider, StatefulSlider, UnorderedList, styled, Heading1} from 'newskit';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {IconFilledCircle} from '../../components/icons';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';
import {withProps} from '../../components/playground';

const SliderComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate<typeof Slider>
    headTags={{
      title: 'Slider',
      description:
        'Sliders allow users to choose a value or values within a range.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Slider',
      hero: {
        illustration: 'components/slider/hero',
      },
      introduction:
        'Sliders allow users to choose a value or values within a range.',
    }}
    componentDefaultsKey="slider"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.19.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/slider',
      storybookId: 'components-slider--story-slider',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=324%3A4',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the slider component, its variations, and configuration options.',
      playground: {
        componentName: 'slider',
        component: props => <StatefulSlider {...props} />,
        knobs: [
          {
            name: 'Min',
            propName: 'min',
            value: 0,
          },
          {
            name: 'Max',
            propName: 'max',
            value: 100,
          },
          {
            name: 'Values',
            propName: 'values',
            value: [50],
          },
          {
            name: 'Step',
            propName: 'step',
            value: 1,
          },
          {
            name: 'Disabled',
            propName: 'disabled',
            value: false,
          },
          {
            name: 'Min Label',
            propName: 'minLabel',
            options: [
              {
                label: 'Unset',
                isDefault: true,
                value: undefined,
              },
              {
                label: 'Text',
                value: '0%',
              },
              {
                label: 'Component',
                value: withProps(
                  IconFilledCircle,
                  {overrides: {size: 'sizing040'}},
                  'MyLabelIcon',
                ),
              },
            ],
          },
          {
            name: 'Max Label',
            propName: 'maxLabel',
            options: [
              {
                label: 'Unset',
                isDefault: true,
                value: undefined,
              },
              {
                label: 'Text',
                value: '100%',
              },
              {
                label: 'Component',
                value: withProps(
                  IconFilledCircle,
                  {overrides: {size: 'sizing040'}},
                  'MyLabelIcon',
                ),
              },
            ],
          },
          {
            name: 'Label Position',
            propName: 'labelPosition',
            options: [
              {
                label: 'Default (inline)',
                isDefault: true,
                value: 'inline',
              },
              {
                label: 'before',
                value: 'before',
              },
              {
                label: 'after',
                value: 'after',
              },
            ],
          },
          {
            name: 'Thumb Label',
            propName: 'thumbLabel',
            options: [
              {
                label: 'Unset',
                isDefault: true,
                value: undefined,
              },
              {
                label: 'true',
                value: true,
              },
              {
                label: 'Component',
                value: withProps(
                  styled(Heading1)`
                    position: relative;
                    top: 42px;
                  `,
                  {},
                  'MyThumbLabel',
                ),
              },
            ],
          },
          {
            name: 'Vertical',
            propName: 'vertical',
            options: [
              {
                label: 'Unset',
                isDefault: true,
                value: undefined,
              },
              {
                label: 'true',
                value: true,
              },
            ],
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The slider component contains three required elements and three optional elements.',
      rows: [
        {
          name: 'Track',
          description: 'Track that the thumb moves along',
          component: ['Block'],
        },
        {
          name: 'Indicator',
          description:
            'Highlights the position of the active thumb along the track',
          component: ['Block'],
        },
        {
          name: 'Thumb',
          description:
            'Interactive control that can be grabbed and moved along the track',
          component: ['Block'],
        },
        {
          name: 'Thumb icon',
          description: 'Icon that appears within the thumb',
          component: ['Icon'],
        },
        {
          name: 'Thumb label',
          description: 'Text attributed to the slider thumb for context',
          component: ['Text block'],
          optional: true,
        },
        {
          name: 'Min/max labels',
          description: 'Text attributed to the slider for context',
          component: ['Text block'],
          optional: true,
        },
        {
          name: 'Feedback',
          description:
            'Non-interactive background element for visual feedback on hover',
          component: ['Block'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/slider/anatomy'),
    }}
    options={{
      introduction: 'The slider has options for different use cases:',
      cards: [
        {
          title: 'Orientation',
          description:
            'The slider can be displayed horizontally or vertically.',
          media: getIllustrationComponent(
            'components/slider/options/orientation',
          ),
        },
        {
          title: 'Min and max',
          description:
            'The min and max values of the slider can be customised. You can also add additional values to the slider.',
          media: getIllustrationComponent(
            'components/slider/options/min-and-max',
          ),
        },
        {
          title: 'Step distance',
          description:
            'Slider step distance can be adjusted to increase or decrease the number of steps when the thumb is dragged along the track.',
          media: getIllustrationComponent(
            'components/slider/options/step-distance',
          ),
        },
        {
          title: 'Min/max labels',
          description: 'Min/max labels can be added to the track.',
          media: getIllustrationComponent(
            'components/slider/options/minmax-labels',
          ),
        },
        {
          title: 'Thumb label',
          description:
            'A label can be added to the thumb, showing the current value.',
          media: getIllustrationComponent(
            'components/slider/options/thumb-label',
          ),
        },
        {
          title: 'Label position',
          description: (
            <>
              <UnorderedList
                markerAlign="start"
                listItemMarker={IconFilledCircle}
                overrides={{
                  content: {
                    typographyPreset: 'editorialParagraph020',
                  },
                }}
              >
                <>Inline - Aligns the track labels inline.</>
                <>
                  Before - Labels appear above or to the left of the track,
                  depending on the orientation.
                </>
                <>
                  After - Labels appear below or to the right of the track,
                  depending on the orientation.
                </>
              </UnorderedList>
            </>
          ),
          media: getIllustrationComponent(
            'components/slider/options/label-position',
          ),
        },
        {
          title: 'Thumb icon',
          description: 'An icon can be placed inside the thumb.',
          media: getIllustrationComponent(
            'components/slider/options/thumb-icon',
          ),
        },
        {
          title: 'Track weight',
          description:
            'The weight of the slider track can be customised to give more or less affordance.',
          media: getIllustrationComponent(
            'components/slider/options/track-weight',
          ),
        },
        {
          title: 'Indicator weight',
          description:
            'The weight of the slider indicator can be customised to give more or less affordance.',
          media: getIllustrationComponent(
            'components/slider/options/indicator-weight',
          ),
        },
        {
          title: 'Feedback',
          description:
            'The optional feedback element is non-interactive and appears behind the thumb control on hover.',
          media: getIllustrationComponent('components/slider/options/feedback'),
        },
      ],
    }}
    states={{
      introduction: 'The slider has the following states:',
      layout: '2-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the slider.',
          media: getIllustrationComponent('components/slider/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The thumb control changes style to let the user know it’s interactive.',
          media: getIllustrationComponent('components/slider/states/hover'),
        },
        {
          title: 'Active',
          description:
            'The thumb control changes style to let users know they’ve interacted with it.',
          media: getIllustrationComponent('components/slider/states/active'),
        },
        {
          title: 'Focus',
          description:
            'Communicates that a user has highlighted a thumb control item (e.g. via keyboard or voice).',
          media: getIllustrationComponent('components/slider/states/focus'),
        },
        {
          title: 'Disabled',
          description:
            'Communicates that a slider exists but isn’t available in that scenario. When the user hovers over a slider in a disabled state, the cursor shows as ‘not allowed’.',
          media: getIllustrationComponent('components/slider/states/disabled'),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the slider behaves:',
      cards: [
        {
          title: 'Thumb control',
          description:
            'A draggable ‘thumb’ control on the slider track allows users to choose a numeric value between a predefined minimum and maximum. The slider supports multiple values, i.e. you can have multiple ‘thumbs’.',
          media: getIllustrationComponent('components/slider/thumb-control'),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the slider:',
      layout: '2-span',
      cards: [
        {
          title: 'Do use labels for context',
          description:
            'Use labels to give more context to the values that the slider represents.',
          media: getIllustrationComponent('components/slider/usage/labels'),
        },
        {
          title: 'Do show values to provide context',
          description:
            "Represent slider value units as it helps provide context e.g., ‘%' or 'px’.",
          media: getIllustrationComponent('components/slider/usage/values'),
        },
        {
          title: 'Do prefix values',
          description:
            "If the slider values range from negative to positive, prefix the value with a ‘+' plus or '-’ minus sign.",
          media: getIllustrationComponent('components/slider/usage/prefix'),
        },
      ],
    }}
    accessibility={{
      focusOrder: {
        title: 'Focus Order',
        tableRows: [
          {
            order: 1,
            element: 'Slider thumb',
            role: 'Focusses to the slider thumb',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description: 'Moves focus to slider thumb',
          },
          {
            command: ['Up arrow|Right arrow'],
            description:
              'Moves the slider thumb forwards along the track by one step',
          },
          {
            command: ['Down arrow|Left arrow'],
            description:
              'Moves the slider thumb forwards along the track by one step',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'label',
            attribute: 'ariaLabel',
            value: 'string',
            description: (
              <>
                Aria-label attribute is used to define a string that labels the
                action that will be performed when the user interacts with the
                slider.
                <br />
                <br />
                It is recommended that you set ariaLabel so that screen readers
                are able to describe the slider’s purpose. If left undefined, it
                is set to ‘slider’.
              </>
            ),
            userSupplied: true,
          },
          {
            element: 'description',
            attribute: 'ariaDescribedBy',
            value: 'string',
            description: 'Describes the purpose of the slider.',
            userSupplied: true,
          },
          {
            element: 'value',
            attribute: 'ariaValueText',
            value: 'string',
            description:
              'Defines the human-readable text alternative of aria-valuenow for the slider range.',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      components: [
        {
          title: 'Slider',
          summary:
            'The slider has a range of props to define the experience in different use cases.',
          propsRows: [
            {
              name: 'min',
              type: 'number',
              description:
                'The minimum value the slider can be set to, either at the left or the bottom of the slider depending on orientation.',
              required: true,
            },
            {
              name: 'max',
              type: 'number',
              description:
                'The maximum value the slider can be set to, either at the right or the top of the slider depending on orientation.',
              required: true,
            },
            {
              name: 'values',
              type: 'number[]',
              description:
                'The values of the thumbs on the slider, i.e. their position. One thumb is rendered per value.',
              required: true,
            },
            {
              name: 'onChange',
              type: '(values: number[]) => void',
              description: (
                <>
                  The onChange function receives the new values of the thumbs
                  whenever they are moved along the slider track.
                  <br />
                  <br />
                  For the slider, passing these values back into the values prop
                  is essential to make the slider interactive.
                  <br />
                  <br />
                  For the StatefulSlider, this is done for you and the onChange
                  function is optional.
                </>
              ),
              required: true,
            },
            {
              name: 'onFinalChange',
              type: '(values: number[]) => void',
              description:
                'Similar to the onChange function, however this function is only called once the slider has stopped being dragged.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description:
                'If true, the slider is disabled and cannot be interacted with.',
            },
            {
              name: 'step',
              type: 'number',
              description:
                'How much the slider increments or decrements the thumb value by as it is moved along the rail. The difference of max and min must be divisible by the step.',
            },
            {
              name: 'vertical',
              type: 'boolean',
              description:
                'If true, the slider is rendered vertically rather than horizontally. The slider will have a height of 100% in vertical mode. To ensure the slider renders as expected, your container must have a height set.',
            },
            {
              name: 'minLabel',
              type: 'string | React.ComponentType',
              description:
                'Either a string or a custom component can be passed in to be rendered to the left of the rail. Typically this would show the user the minimum value of the slider. If left undefined, no label is rendered.',
            },
            {
              name: 'labelPosition',
              type: 'string',
              description: (
                <>
                  Defines where the min/max labels will be placed according to
                  the slider track:
                  <br />
                  <br />
                  Inline - Aligns the track labels inline
                  <br />
                  <br />
                  Before - Labels appear above or to the left of the track
                  depending on the orientation
                  <br />
                  <br />
                  After - Labels appear below or to the right of the track
                  depending on the orientation
                </>
              ),
            },
            {
              name: 'thumbLabel',
              type: 'boolean | React.ComponentType<ThumbLabelProps>',
              description: (
                <>
                  If true, a simple text thumb label is rendered above each
                  thumb showing the value of that thumb.
                  <br />
                  <br />
                  If a custom component is passed in, that component is rendered
                  instead.
                  <br />
                  <br />
                  Custom thumb labels receive a set of props including the
                  values, index of the thumb, and whether the thumb is being
                  dragged. It also receives the current thumb value as its
                  children.
                  <br />
                  <br />
                  If left undefined or set false, no thumb label is rendered.
                </>
              ),
            },
            {
              name: 'thumbIcon',
              type: 'React.ComponentType',
              description:
                'If provided places the passed icon inside the slider thumb.',
            },
            {
              name: 'renderTrack',
              type:
                '(params: { props, children, isDragged, disabled }) => React.ReactNode',
              description: (
                <>
                  If provided, this completely replaces the track rendering
                  function passed to the underlying react-range module.
                  <br />
                  <br />
                  The params object passed to the function include: props; apply
                  these to your track component, children; this will contain the
                  thumb and should be rendered inside your track, and isDragged
                  and disabled booleans; these might affect how you wish to
                  style your track.
                </>
              ),
            },
            {
              name: 'renderThumb',
              type:
                '((params: { props, value, index, isDragged }) => React.ReactNode',
              description: (
                <>
                  If provided, this completely replaces the thumb rendering
                  function passed to the underlying react-range module.
                  <br />
                  <br />
                  The params object passed to the function include: props; apply
                  these to your thumb component, value; this is the current
                  thumb value, index; the index in the values array that
                  corresponds to this thumb (this is useful if rendering more
                  than one value), isDragged; this may affect how you wish to
                  style your thumb.
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'track.stylePreset',
              type: 'MQ<string>',
              default: 'sliderTrack',
              description:
                'If provided, this overrides the style preset applied to the slider track.',
            },
            {
              attribute: 'track.size',
              type: 'MQ<string>',
              default: 'sizing030',
              description:
                'If provided, this overrides the size of the slider track.',
            },
            {
              attribute: 'indicator.stylePreset',
              type: 'MQ<string>',
              default: 'sliderIndicator',
              description: (
                <>
                  If provided, this overrides the style preset applied to the
                  slider indicator.
                  <br />
                  <br />
                  Note that only the background colour of this preset is used,
                  other properties such as borders are ignored and will inherit
                  the style of the style preset of the track.
                </>
              ),
            },
            {
              attribute: 'thumb.stylePreset',
              type: 'MQ<string>',
              default: 'sliderThumb',
              description:
                'If provided, this overrides the style preset applied to the slider thumb.',
            },
            {
              attribute: 'thumb.size',
              type: 'MQ<string>',
              default: 'sizing060',
              description:
                'If provided, this overrides the size of the slider thumb.',
            },
            {
              attribute: 'thumbLabel.stylePreset',
              type: 'MQ<string>',
              default: 'sliderThumbLabel',
              description: (
                <>
                  If provided, this overrides the style preset applied to the
                  slider thumb label.
                  <br />
                  <br />
                  Note that custom thumb labels passed in to the slider will not
                  have style preset applied by default.
                </>
              ),
            },
            {
              attribute: 'thumbLabel.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel030',
              description:
                'If provided, this overrides the typography preset applied to the slider thumb label.',
            },
            {
              attribute: 'thumbLabel.space',
              type: 'MQ<string>',
              default: 'space060',
              description:
                'If provided, this overrides the space between the thumb label baseline and the center of the slider thumb element.',
            },
            {
              attribute: 'labels.stylePreset',
              type: 'MQ<string>',
              default: 'sliderLabels',
              description: (
                <>
                  If provided, this overrides the style preset applied to the
                  min/max slider labels.
                  <br />
                  <br />
                  Note that custom labels passed in to the slider will not have
                  style preset applied by default.
                </>
              ),
            },
            {
              attribute: 'labels.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel020',
              description:
                'If provided, this overrides the typography preset applied to the slider labels.',
            },
            {
              attribute: 'labels.space',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'If provided, this overrides the space between the min/max labels and the slider track.',
            },
            {
              attribute: 'feedback.stylePreset',
              type: 'MQ<string>',
              default: 'feedback',
              description:
                'If provided, this overrides the style preset applied to the feedback element.',
            },
            {
              attribute: 'feedback.size',
              type: 'MQ<string>',
              default: 'sizing080',
              description:
                'If provided, this overrides the size of the feedback element.',
            },
            {
              attribute: 'feedback.transitionPreset',
              type: 'MQ<string>',
              default: 'opacityChange',
              description:
                'If provided, this overrides the transition preset applied to the feedback element.',
            },
            ...logicalPaddingOverrideProps,
            ...logicalMarginOverrideProps,
          ],
          overridesSummary:
            'The slider has a range of props to define the experience in different use cases.',
        },
      ],
    }}
    related={{
      related: ['Button', 'Select'],
    }}
  />
);

export default SliderComponent;
