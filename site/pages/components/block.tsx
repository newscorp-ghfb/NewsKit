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
        'Blocks are simple container components that you can apply style and space to. They’re the equivalent of frames in Figma.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Block',
      hero: {
        illustration: 'components/block-illustration',
      },
      introduction:
        'Blocks are simple container components that you can apply style and space to. They’re the equivalent of frames in Figma.',
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
        'This demo lets you preview the block component, its variations and configuration options.',
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
      introduction: 'The block contains one required element.',
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
      introduction: 'The block has options for different use cases:',
      cards: [
        {
          title: 'Render as',
          description: 'Convert the block to a ‘span’.',
          media: getIllustrationComponent('components/block/render-as'),
        },
        {
          title: 'Style',
          // todo_content: link to /theme/presets/style-presets/
          description: 'Apply styling to the block with style presets.',
          media: getIllustrationComponent('components/block/style'),
        },
        {
          title: 'Spacing',
          description:
            'Apply three types of spacing to the block: space inline, space stack and space inset.',
          media: getIllustrationComponent('components/block/spacing'),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the block:',
      cards: [
        {
          title: 'Use the block to apply spacing and style presets',
          description:
            'Use the Block as a container to easily apply spacing and style presets around other elements.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/block/do-01'),
        },
        {
          title: 'Don’t use for equal spacing on multiple elements',
          description: (
            <>
              Avoid using the block when you need to apply equal spacing to
              multiple elements. Use{' '}
              <Link href="https://www.newskit.co.uk/components/stack/">
                stack
              </Link>{' '}
              or{' '}
              <Link href="https://www.newskit.co.uk/components/grid/">
                grid{' '}
              </Link>
              instead.
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
          The block is an HTML element, so you can use any ARIA attribute (e.g.
          region).{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">
            Learn more ARIA at MDN Web Docs
          </Link>
          .
        </>
      ),
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: 'There are no SEO considerations for the block.',
    }}
    componentAPI={{
      introduction: `The block has a range of props to define the experience in different use cases.`,
      components: [
        {
          title: 'Block',
          propsRows: [
            {
              name: ' as',
              type: 'string',
              default: 'div',
              description: `If provided, renders the block as this element (e.g span)`,
            },
            {
              name: 'stylePreset',
              type: 'MQ<string>',
              description: `If provided, applies style on the block`,
            },
            {
              name: 'spaceInline(deprecated)',
              type: 'MQ<string>',
              description: `Use marginInlineEnd instead. Set the spacing which is applied as a margin on the right of the block`,
            },
            {
              name: 'spaceStack(deprecated)',
              type: 'MQ<string>',
              description: `Use marginBlockEnd instead. This is a spacing preset token which is applied as a margin on the bottom of the block. Use to space stack content down the page`,
            },
            {
              name: 'spaceInset(deprecated)',
              type: 'MQ<string>',
              description: `Use paddingBlock and paddingInline instead. Apply spaceInset to the block`,
            },
            {
              name: 'transitionPreset',
              type: 'TransitionToken | TransitionToken[]',
              default: 'backgroundColorChange',
              description: `Apply transitionPreset to the block`,
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
