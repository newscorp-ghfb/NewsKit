import React from 'react';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {OverridesRowsProps} from '../../components/component-api';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';

const DividerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Divider',
      description:
        'Dividers visually separate different content and can be used vertically or horizontally.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Divider',
      hero: {
        illustration: 'components/divider-illustration',
      },
      introduction: `Dividers visually separate different content and can be used vertically or horizontally.`,
    }}
    componentDefaultsKey="divider"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.8.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
    }}
    anatomy={{
      introduction: 'The divider component contains one required element.',
      rows: [
        {
          name: 'Divider',
          description: 'An <hr> HTML tag that comprises of a styled border',
          component: [],
          optional: undefined,
        },
      ],
      media: getIllustrationComponent(
        'components/divider/anatomy-illustration',
      ),
    }}
    options={{
      introduction: 'The divider has an option for different use cases:',
      cards: [
        {
          title: 'Orientation',
          description: 'Display a divider horizontally or vertically.',
          media: getIllustrationComponent(
            'components/divider/orientation-illustration',
          ),
        },
      ],
    }}
    codeExamples={{
      introduction: 'Here are some examples of the divider in action:',
      example: [
        {
          title: 'Divider with stack',
          description: (
            <>
              Use this approach where you want equal spacing between elements.
              This example shows how to use the divider inside a stack. Use
              flow=horizontal-stretch and wrap the divider in a stackChild to
              stretch it to the height of the container.
            </>
          ),
          media: getIllustrationComponent(
            'components/divider/stack-illustration',
            {viewBox: '0 0 1490 600'},
          ),
          codeUrl: 'examples/divider/divider-vertical-in-stack.tsx',
        },
        {
          title: 'Horizontal divider with block',
          description:
            "Use this approach where you want irregular spacing between elements. This example shows the divider as a visual separator between two block elements. Use the container styledBlock to constrain the divider's width.",
          media: getIllustrationComponent(
            'components/divider/block-horizontal-illustration',
            {viewBox: '0 0 1490 600'},
          ),
          codeUrl: 'examples/divider/divider-horizontal-in-block.tsx',
        },
        {
          title: 'Vertical divider with block',
          description:
            'Use this approach where you want irregular spacing between elements. This example shows the vertical divider as a visual separator between two inline blocks. Use the inline divider container to constrain the height of the block.',
          media: getIllustrationComponent(
            'components/divider/block-vertical-illustration',
            {viewBox: '0 0 1490 600'},
          ),
          codeUrl: 'examples/divider/divider-vertical-in-block.tsx',
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the divider:',
      cards: [
        {
          title: 'Use as a semantic divider element',
          // todo_content: link to /theme/presets/style-presets/
          description:
            'Use dividers when you need a semantic divider element. If you need a decorative border, consider a border on a stylePreset instead.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/divider/do-1-illustration',
          ),
        },
      ],
    }}
    componentAPI={{
      components: [
        {
          title: 'Divider',
          propsSummary:
            'The divider has a range of props and overrides to define the experience in different use cases. You can define the divider’s appearance with a single stylePreset.',
          overridesSummary:
            'The divider has a range of props and overrides to define the experience in different use cases. You can define the divider’s appearance with a single stylePreset.',
          propsRows: [
            {
              name: 'Vertical',
              type: 'MQ<boolean>',
              required: undefined,
              description:
                'If provided, changes the flow of the Divider to vertical.',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<String>',
              default: 'dividerHorizontal',
              description:
                'If provided, overrides the stylePreset applied to the divider. The stylePreset can modify the borderStyle, borderColor and borderWidth',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Block', 'Drawer', 'Modal', 'Structured List'],
    }}
  />
);

export default DividerComponent;
