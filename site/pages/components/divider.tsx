import React from 'react';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {Mono} from '../../components/flags';
import {OverridesRowsProps} from '../../components/component-api';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';

const DividerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Divider',
      description:
        'A divider is used to provide visual separation of different content. Dividers can be applied vertically or horizontally.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Divider',
      hero: {
        illustration: 'components/divider-illustration',
      },
      introduction: `A divider is used to provide visual separation of different content. Dividers can be applied vertically or horizontally.`,
    }}
    componentDefaultsKey="divider"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.8.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
    }}
    anatomy={{
      introduction: 'The Divider contains one required element.',
      rows: [
        {
          name: 'Divider',
          description:
            'The divider is an <hr> HTML tag that comprises of a styled border',
          component: [],
          optional: undefined,
        },
      ],
      media: getIllustrationComponent(
        'components/divider/anatomy-illustration',
      ),
    }}
    options={{
      introduction:
        'The Divider has an option that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Orientation',
          description:
            'A Divider can be displayed horizontally or vertically to effectively and appropriately use the space on a screen.',
          media: getIllustrationComponent(
            'components/divider/orientation-illustration',
          ),
        },
      ],
    }}
    codeExamples={{
      introduction: 'Below are examples of using the Divider:',
      example: [
        {
          title: 'With Stack',
          description: (
            <>
              In this example, we demonstrate how to use the divider inside a{' '}
              <Mono>Stack</Mono>. In scenarios where you want equal spacing, we
              would recommend using this approach over the Block examples below.
              We use <Mono>flow=horizontal-stretch</Mono> and wrap the{' '}
              <Mono>Divider</Mono> in a <Mono>StackChild</Mono> to get it to
              stretch to the height of the container.
            </>
          ),
          media: getIllustrationComponent(
            'components/divider/stack-illustration',
          ),
          codeUrl: 'examples/divider/divider-vertical-in-stack.tsx',
        },
        {
          title: 'With Block',
          description:
            'This approach should be used where you have irregular spacing between elements.',
          sections: [
            {
              title: 'Horizontal Divider',
              description: (
                <>
                  In this example, we demonstrate the divider as a visual
                  separator between two block elements. The container{' '}
                  <Mono>StyledBlock</Mono> is being used to constrain the
                  divider&apos;s width.
                </>
              ),
              media: getIllustrationComponent(
                'components/divider/block-horizontal-illustration',
              ),
              codeUrl: 'examples/divider/divider-horizontal-in-block.tsx',
            },
            {
              title: 'Vertical Divider',
              description: (
                <>
                  In this example, we demonstrate the vertical divider, used as
                  a visual separator between two inline blocks. We use{' '}
                  <Mono>InlineDividerContainer</Mono> to constrain the height of
                  the block.
                </>
              ),
              media: getIllustrationComponent(
                'components/divider/block-vertical-illustration',
              ),
              codeUrl: 'examples/divider/divider-vertical-in-block.tsx',
            },
          ],
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use a Divider component.',
      cards: [
        {
          description: (
            <>
              Dividers should be used when there is a requirement for a semantic
              divider element.
              <br />
              <br />
              Where there is need for a decorative border using a border on a
              StylePreset may be more appropriate.
            </>
          ),
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
            'The Divider has a prop that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The Divider takes a single StylePreset that can be used to define the appearance.',
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
                'If provided, overrides the style preset applied to the Divider. The style preset can modify the borderStyle, borderColor and borderWidth.',
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
