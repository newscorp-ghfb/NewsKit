import React from 'react';
import {Block, BlockProps, InlineMessage, styled} from 'newskit';
import {PropsRowsProps} from '../../components/component-api';
import {Link} from '../../components/link/link';
import {LegacyBlock} from '../../components/legacy-block';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';

const PlaygroundContainer = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const BlockComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Block',
      description:
        'The Block is a simple container component that style and space can be applied to. This is the equivalent to a frame in Figma.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Block',
      hero: {
        illustration: 'components/block-illustration',
      },
      introduction:
        'The Block is a simple container component that style and space can be applied to. This is the equivalent to a frame in Figma.',
    }}
    componentDefaultsKey="Block"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.1.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/blob/main/src/block/block.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/?node-id=324%3A2',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Block component, its variations, and configuration options.',
      playground: {
        componentName: 'Block',
        component: (props: BlockProps) => (
          <PlaygroundContainer>
            <div>
              <LegacyBlock
                height="sizing060"
                width="sizing120"
                backgroundColor="blue080"
              />
              <Block {...props} />
              <LegacyBlock
                height="sizing060"
                width="sizing120"
                backgroundColor="blue080"
              />
            </div>
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Children',
            propName: 'children',
            value: 'This is a block',
          },
          {
            name: 'Render as',
            propName: 'as',
            options: [
              {
                label: 'Default (div)',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'span',
                value: 'span',
              },
            ],
          },
          {
            name: 'spaceStack',
            propName: 'spaceStack',
            options: [
              {
                label: 'Default',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'space020',
                value: 'space020',
              },
            ],
          },
          {
            name: 'spaceInset',
            propName: 'spaceInset',
            options: [
              {
                label: 'Default',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'spaceInset030',
                value: 'spaceInset030',
              },
            ],
          },
          {
            name: 'stylePreset',
            propName: 'stylePreset',
            options: [
              {
                label: 'Default',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'flagSolidPrimary',
                value: 'flagSolidPrimary',
              },
            ],
          },
        ],
      },
    }}
    anatomy={{
      introduction: 'The Block contains one element.',
      rows: [
        {
          name: 'Block',
          description: 'The HTML element.',
        },
      ],
      media: getIllustrationComponent('components/block/anatomy', {
        viewBox: '0 0 1600 901',
      }),
    }}
    options={{
      introduction:
        'The Block has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Render as',
          description:
            'By using Render as, the block can be converted to a ‘span’.',
          media: getIllustrationComponent('components/block/render-as'),
        },
        {
          title: 'Style',
          description:
            'Styling can be applied to the block by using style presets.',
          media: getIllustrationComponent('components/block/style'),
        },
        {
          title: 'Spacing',
          description:
            'Three types of spacing can be applied to the block; spaceInline, spaceStack, and spaceInset.',
          media: getIllustrationComponent('components/block/spacing'),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the Block.',
      cards: [
        {
          description:
            'Use the Block as a container to easily apply spacing and style presets around other elements.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/block/do-01'),
        },
        {
          description: (
            <>
              Avoid using the Block component when equal spacing needs to be
              applied to multiple elements. In this case, the{' '}
              <Link href="https://www.newskit.co.uk/components/stack/">
                Stack
              </Link>
              component, or the{' '}
              <Link href="https://www.newskit.co.uk/components/grid/">
                Grid{' '}
              </Link>
              component should be used.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/block/dont-01'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          As this is an HTML element, this component can utilise any aria
          attribute, such as region. See more details{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">
            here
          </Link>
          .
        </>
      ),
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: 'There are no SEO considerations for this component.',
    }}
    componentAPI={{
      introduction: `The Block has a range of props that can be used to define an appropriate experience for different use cases.`,
      components: [
        {
          title: 'Block',
          propsRows: [
            {
              name: ' as',
              type: 'string',
              default: 'div',
              description: `If provided, renders the Block as this element. e.g span.`,
            },
            {
              name: 'stylePreset',
              type: 'MQ<string>',
              description: `If provided, applies style on the Block.`,
            },
            {
              name: 'spaceInline(deprecated)',
              type: 'MQ<string>',
              description: `Use marginInlineEnd instead. Set the spacing which is applied as a margin on the right of the Block.`,
            },
            {
              name: 'spaceStack(deprecated)',
              type: 'MQ<string>',
              description: `Use marginBlockEnd instead. This is a spacing preset token which is applied as a margin on the bottom of the Block. Use this to space stacking content down the page.`,
            },
            {
              name: 'spaceInset(deprecated)',
              type: 'MQ<string>',
              description: `Use paddingBlock and paddingInline instead. Apply space inset to the Block.`,
            },
            {
              name: 'transitionPreset',
              type: 'TransitionToken | TransitionToken[]',
              default: 'backgroundColorChange',
              description: `Apply transitionPreset to the Block component.`,
            },
            ...(commonLogicalProps('propsRow') as PropsRowsProps[]),
          ],
          propsFooter: (
            <InlineMessage>
              The Block can utilise any valid{' '}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes">
                HTML attribute.
              </Link>
              .
            </InlineMessage>
          ),
        },
      ],
    }}
    related={{
      related: ['Card', 'Grid', 'Grid Layout', 'Stack'],
    }}
  />
);
export default BlockComponent;
