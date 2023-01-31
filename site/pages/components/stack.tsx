import React from 'react';
import {
  Stack,
  StackProps,
  Tag,
  InlineMessage,
  toNewsKitIcon,
  Block,
  StackDistribution,
  Grid,
  Cell,
  getColorCssFromTheme,
  styled,
  GridLayout,
  GridLayoutItem,
  TextBlock,
  getTypographyPresetFromTheme,
  getBorderCssFromTheme,
  Flow,
  StackChild,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {renderIfReactComponent} from 'newskit/utils/component';
import {Code} from '../../components/code';
import {
  A11yTable,
  CommonSection,
  ComponentAPISection,
  RelatedComponentsSection,
} from '../../templates/template-sections';
import {ComponentPageCell} from '../../components/layout-cells';
import {Playground} from '../../components/playground';
import {LegacyBlock} from '../../components/legacy-block';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageBasicTemplate} from '../../templates/component-page-template/component-page-basic-template';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {PropsRowsProps} from '../../components/component-api';
import {Table} from '../../components/table';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

interface StackDemoProps {
  title: string;
  height?: string;
  width?: string;
  flow: StackProps['flow'];
  distribution?: StackProps['stackDistribution'];
}

const IconFilledInfo = toNewsKitIcon(FilledInfo);
const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

export const capitalize = (s: string) =>
  s.replace(/^./, firstLetter => firstLetter.toUpperCase());

const StackItem = styled.div`
  min-width: 50px;
  min-height: 50px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  ${getTypographyPresetFromTheme('utilityBody020')}
  ${getColorCssFromTheme('color', 'inkInverse')}
  ${getColorCssFromTheme('backgroundColor', 'blue050')}
`;

const StackContainer = styled.div<{
  children?: React.ReactNode;
  height?: string;
  width?: string;
}>`
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  ${getColorCssFromTheme('backgroundColor', 'interface020')};
  ${({height}) => height && `height: ${height}`};
  ${({width}) => width && `width: ${width}`};
`;

const codeFlowDistSample = (
  flow: StackProps['flow'],
  distribution: StackProps['stackDistribution'],
) => (
  <Code>
    {`<Stack
  flow="${flow}"
  stackDistribution="${distribution}"
>
  ...
</Stack>`}
  </Code>
);

const codeSample = (props: string) => (
  <Code>
    {`<Stack
  ${props}
>
  ...
</Stack>`}
  </Code>
);

const ExampleContainer = ({
  title,
  code,
  children,
}: {
  title: string;
  code: React.ReactNode;
  children: React.ReactNode;
}) => (
  <GridLayout
    areas={{
      xs: `
         "A"
         "B"
         "C"
         `,
      md: ` 
          "A A"
          "B C"
        `,
      lg: `
          "A A"
          "B C"
        `,
    }}
    columns={{xs: '1fr', md: '1fr 1fr'}}
    rowGap={{xs: 'space010', md: 'space050'}}
    columnGap={{md: 'space050', lg: 'space050'}}
  >
    <>
      <GridLayoutItem area="A">
        <TextBlock
          as="div"
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline020"
        >
          {title}
        </TextBlock>
      </GridLayoutItem>
      <GridLayoutItem area="B" alignSelf="center">
        {children}
      </GridLayoutItem>
      <GridLayoutItem area="C">{code}</GridLayoutItem>
    </>
  </GridLayout>
);

const StackFlowDistDemo = ({
  title,
  flow,
  distribution,
  height,
  width,
}: StackDemoProps) => (
  <ExampleContainer title={title} code={codeFlowDistSample(flow, distribution)}>
    <StackContainer height={height} width={width}>
      <Stack flow={flow} stackDistribution={distribution as StackDistribution}>
        <StackItem>1</StackItem>
        <StackItem>2</StackItem>
        <StackItem>3</StackItem>
        <StackItem>4</StackItem>
        <StackItem>5</StackItem>
      </Stack>
    </StackContainer>
  </ExampleContainer>
);

const StackComponent = (layoutProps: LayoutProps) => (
  <ComponentPageBasicTemplate
    headTags={{
      title: 'Stack',
      description:
        'A stack is a layout component that abstracts the implementation of flexbox',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Stack',
      hero: {
        illustration: 'components/stack-illustration',
      },
      introduction: (
        <>
          A stack is a layout component that abstracts the implementation of{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
            target="_blank"
          >
            flexbox
          </Link>{' '}
        </>
      ),
    }}
    componentDefaultsKey="stack"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.7.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/stack',
      storybookId: 'components-stack--story-stack-with-defaults-only',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=2057%3A5&t=iP77Jd8O6cCJYM4p-1',
    }}
  >
    <ComponentPageCell>
      <Block marginBlockEnd="space100">
        <InlineMessage
          icon={infoIcon}
          role="region"
          aria-label="component notice"
        >
          We recommend using the{' '}
          <Link href="/components/grid-layout/">grid layout component</Link>{' '}
          instead of the Stack component.
        </InlineMessage>
      </Block>
    </ComponentPageCell>
    <CommonSection
      title="Interactive demo"
      id="interactive-demo"
      introduction="This demo allows you to preview the stack, its variations, and configuration options."
    >
      <ComponentPageCell>
        <Block marginBlockEnd="space050">
          <Playground
            componentName="Stack"
            component={(state: StackProps) => (
              <LegacyBlock width="100%" height="300px" overflowY="scroll">
                <Stack {...state}>
                  {[
                    'This',
                    'Is',
                    'A',
                    'Stack',
                    'Example',
                    'Showing',
                    'Multiple',
                    'Tags',
                  ].map(item => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </Stack>
              </LegacyBlock>
            )}
            knobs={[
              {
                name: 'Stack Flow',
                propName: 'flow',
                options: (() =>
                  [
                    'vertical-left',
                    'vertical-center',
                    'vertical-right',
                    'vertical-stretch',
                    'horizontal-top',
                    'horizontal-center',
                    'horizontal-bottom',
                    'horizontal-stretch',
                  ].map((flow, i) => ({
                    label: flow,
                    value: flow,
                    isDefault: !i,
                  })))(),
              },
              {
                name: 'Inline',
                propName: 'inline',
                value: false,
              },
              {
                name: 'Stack Distribution',
                propName: 'stackDistribution',
                options: (() =>
                  [
                    'flex-start',
                    'center',
                    'flex-end',
                    'space-around',
                    'space-between',
                    'space-evenly',
                  ].map((flow, i) => ({
                    label: flow,
                    value: flow,
                    isDefault: !i,
                  })))(),
              },
              {
                name: 'spaceInline',
                propName: 'spaceInline',
                options: (() =>
                  [{label: 'Unset', value: '', isDefault: true}].concat(
                    ['space010', 'space020', 'space030', 'space040'].map(
                      size => ({
                        label: size,
                        value: size,
                        isDefault: false,
                      }),
                    ),
                  ))(),
              },
              {
                name: 'spaceStack',
                propName: 'spaceStack',
                options: (() =>
                  [{label: 'Unset', value: '', isDefault: true}].concat(
                    ['space010', 'space020', 'space030', 'space040'].map(
                      (size, i) => ({
                        label: size,
                        value: size,
                        isDefault: !i,
                      }),
                    ),
                  ))(),
              },
              {
                name: 'Height',
                propName: 'height',
                options: [
                  {
                    label: 'Default (100%)',
                    value: '100%',
                    isDefault: true,
                  },
                  {
                    label: 'Auto',
                    value: 'auto',
                  },
                  {
                    label: 'Custom (500px)',
                    value: '500px',
                  },
                ],
              },
              {
                name: 'Wrap',
                propName: 'wrap',
                options: [
                  {
                    label: 'wrap',
                    value: 'wrap',
                  },
                  {
                    label: 'Default (nowrap)',
                    value: 'nowrap',
                    isDefault: true,
                  },
                ],
              },
              {
                name: 'List',
                propName: 'list',
                value: false,
              },
              {
                name: 'AriaLabel',
                propName: 'ariaLabel',
                value: 'list content label',
              },
            ]}
          />
        </Block>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Anatomy"
      id="anatomy"
      introduction="The stack is comprised of one required element and one optional element"
    >
      <ComponentPageCell>
        <Block spaceStack="space050">
          {renderIfReactComponent(
            getIllustrationComponent('components/stack/anatomy'),
          )}
        </Block>
        <Block spaceStack="space000">
          <Table
            columns={['Item', 'Name', 'Description', 'Component', 'Optional']}
            rows={[
              {
                name: 'Stack',
                description: 'Defines the layout of child elements.',
              },
              {
                name: 'StackChild',
                description:
                  'A container for the elements of the stack which can be used per element for ordering and alignment.',
                optional: true,
              },
            ]}
          />
        </Block>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      id="stack-overview"
      title="Overview"
      introduction={
        <>
          The stack specifies the layout of its children components and can be
          used to quickly and easily layout elements on a page without needing
          to write any CSS.{' '}
          <Link
            href="https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties"
            target="_blank"
          >
            Auto-layout
          </Link>{' '}
          is the equivalent of a stack in Figma.
        </>
      }
    />
    <CommonSection
      title="Distribution"
      id="distribution"
      introduction={
        <>
          Its children can be distributed by using the ‘distribution’ property,
          which is a direct mapping to the flexbox property{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
            target="_blank"
          >
            justify-content
          </Link>
        </>
      }
    >
      <ComponentPageCell>
        <GridLayout rowGap={{xs: 'space050', md: 'space080'}}>
          {[
            'center',
            'flex-start',
            'flex-end',
            'space-around',
            'space-between',
            'space-evenly',
          ].map(distribution => (
            <StackFlowDistDemo
              key={`stack-${distribution}`}
              title={capitalize(distribution)}
              flow="horizontal-center"
              distribution={distribution as StackDistribution}
            />
          ))}
        </GridLayout>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Flow"
      id="flow"
      introduction={
        <>
          The stack supports eight different flows: four vertical and four
          horizontal. For elements to expand on the cross-axis, they will need
          to be either <InlineCode>display:flex</InlineCode> or{' '}
          <InlineCode>display:flex-inline</InlineCode>.
        </>
      }
    >
      <ComponentPageCell>
        <GridLayout rowGap={{xs: 'space050', md: 'space080'}}>
          {[
            'horizontal-stretch',
            'horizontal-top',
            'horizontal-center',
            'horizontal-bottom',
            'vertical-left',
            'vertical-center',
            'vertical-right',
            'vertical-stretch',
          ].map(flow => (
            <StackFlowDistDemo
              key={`stack-${flow}`}
              height="350px"
              title={capitalize(flow)}
              distribution="center"
              flow={flow as Flow}
            />
          ))}
        </GridLayout>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Wrap"
      id="wrap"
      introduction="The stack has the ability to wrap elements to prevent them from overflowing."
    >
      <ComponentPageCell>
        <GridLayout rowGap={{xs: 'space050', md: 'space080'}}>
          <ExampleContainer
            title="Horizontal-top"
            code={codeSample(`wrap="wrap" 
  flow="horizontal-top"`)}
          >
            <StackContainer width="300px">
              <Stack flow="horizontal-top" wrap="wrap">
                <StackItem>1</StackItem>
                <StackItem>2</StackItem>
                <StackItem>3</StackItem>
                <StackItem>4</StackItem>
                <StackItem>5</StackItem>
                <StackItem>6</StackItem>
                <StackItem>7</StackItem>
                <StackItem>8</StackItem>
                <StackItem>9</StackItem>
                <StackItem>10</StackItem>
              </Stack>
            </StackContainer>
          </ExampleContainer>
          <ExampleContainer
            title="Vertical-left"
            code={codeSample(`wrap="wrap"
  flow="vertical-left"`)}
          >
            <StackContainer height="300px">
              <Stack flow="vertical-left" wrap="wrap">
                <StackItem>1</StackItem>
                <StackItem>2</StackItem>
                <StackItem>3</StackItem>
                <StackItem>4</StackItem>
                <StackItem>5</StackItem>
                <StackItem>6</StackItem>
                <StackItem>7</StackItem>
                <StackItem>8</StackItem>
                <StackItem>9</StackItem>
                <StackItem>10</StackItem>
              </Stack>
            </StackContainer>
          </ExampleContainer>
        </GridLayout>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Spacing"
      id="spacing"
      introduction={
        <>
          The stack supports adding a fixed space between its children and rows
          of children when the stack is wrapping{' '}
          <InlineCode>spaceInline</InlineCode> will be applied in the flow of
          the elements.
        </>
      }
    >
      <ComponentPageCell>
        <GridLayout rowGap={{xs: 'space050', md: 'space080'}}>
          <ExampleContainer
            title="Horizontal - spaceInline"
            code={codeSample(`flow="horizontal-top"
  spaceInline="space040"`)}
          >
            <StackContainer>
              <Stack flow="horizontal-top" spaceInline="space040">
                <StackItem>1</StackItem>
                <StackItem>2</StackItem>
                <StackItem>3</StackItem>
                <StackItem>4</StackItem>
                <StackItem>5</StackItem>
              </Stack>
            </StackContainer>
          </ExampleContainer>
          <ExampleContainer
            title="Horizontal - spaceStack"
            code={codeSample(`flow="horizontal-top"
  spaceStack="space040"
  width="150px"
  wrap="wrap"`)}
          >
            <StackContainer width="150px">
              <Stack flow="horizontal-top" spaceStack="space040" wrap="wrap">
                <StackItem>1</StackItem>
                <StackItem>2</StackItem>
                <StackItem>3</StackItem>
                <StackItem>4</StackItem>
                <StackItem>5</StackItem>
              </Stack>
            </StackContainer>
          </ExampleContainer>

          <ExampleContainer
            title="Vertical - spaceInline"
            code={codeSample(`flow="vertical-left"
  spaceInline="space040"`)}
          >
            <StackContainer>
              <Stack flow="vertical-left" spaceInline="space040" wrap="wrap">
                <StackItem>1</StackItem>
                <StackItem>2</StackItem>
                <StackItem>3</StackItem>
                <StackItem>4</StackItem>
                <StackItem>5</StackItem>
              </Stack>
            </StackContainer>
          </ExampleContainer>
          <ExampleContainer
            title="Vertical-spaceStack"
            code={codeSample(`flow="vertical-left"
  spaceStack="space040"
  height="150px"
  wrap="wrap"`)}
          >
            <StackContainer height="150px">
              <Stack flow="vertical-left" spaceStack="space040" wrap="wrap">
                <StackItem>1</StackItem>
                <StackItem>2</StackItem>
                <StackItem>3</StackItem>
                <StackItem>4</StackItem>
                <StackItem>5</StackItem>
              </Stack>
            </StackContainer>
          </ExampleContainer>
        </GridLayout>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Ordering"
      id="ordering"
      introduction="The stack supports the ability to define the order of the elements within the stack."
    >
      <ComponentPageCell>
        <ExampleContainer
          code={
            <Code>{`<Stack flow="horizontal-center">
    <StackChild order={2}>
        <StackItem>1</StackItem>
    </StackChild>
    <StackChild order={3}>
        <StackItem>2</StackItem>
    </StackChild>
    <StackChild order={1}>
        <StackItem>3</StackItem>
    </StackChild>
</Stack>`}</Code>
          }
          title="Ordering"
        >
          <StackContainer>
            <Stack flow="horizontal-center" flexGrow={1}>
              <StackChild order={2}>
                <StackItem>1</StackItem>
              </StackChild>
              <StackChild order={3}>
                <StackItem>2</StackItem>
              </StackChild>
              <StackChild order={1}>
                <StackItem>3</StackItem>
              </StackChild>
            </Stack>
          </StackContainer>
        </ExampleContainer>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Reverse"
      id="reverse"
      introduction="The stack supports the ability to be reversed"
    >
      <ComponentPageCell>
        <ExampleContainer
          code={
            <Code>{`<Stack flowReverse flow="horizontal-center">
    <StackItem>1</StackItem>
    <StackItem>2</StackItem>
    <StackItem>3</StackItem>
</Stack>`}</Code>
          }
          title="flowReverse"
        >
          <StackContainer>
            <Stack flow="horizontal-center" flowReverse>
              <StackItem>1</StackItem>
              <StackItem>2</StackItem>
              <StackItem>3</StackItem>
            </Stack>
          </StackContainer>
        </ExampleContainer>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="StackChild"
      id="stackChild"
      introduction={
        <>
          The <InlineCode>StackChild</InlineCode> provides a utility that allows
          items to be placed out of order. This is particularly useful for
          building accessible interfaces. It is required for the component to be
          used within a stack. Its behaviour is derived from the functionality
          of a child element in a classic{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
            target="_blank"
          >
            flexbox container
          </Link>{' '}
          .
        </>
      }
    >
      <ComponentPageCell>
        <ExampleContainer
          code={
            <Code>{`<Stack flow="horizontal-center">
    <StackChild>
        <StackItem>1</StackItem>
    </StackChild>
    <StackChild>
        <StackItem>2</StackItem>
    </StackChild>
    <StackChild>
        <StackItem>3</StackItem>
    </StackChild>
</Stack>`}</Code>
          }
          title="StackChild"
        >
          <StackContainer>
            <Stack flow="horizontal-center" flexGrow={1}>
              <StackChild>
                <StackItem>1</StackItem>
              </StackChild>
              <StackChild>
                <StackItem>2</StackItem>
              </StackChild>
              <StackChild>
                <StackItem>3</StackItem>
              </StackChild>
            </Stack>
          </StackContainer>
        </ExampleContainer>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      title="Accessibility considerations"
      id="accessibility"
      toc="Accessibility"
      introduction="The stack can be used to build accessible interfaces."
    >
      <Cell xs={12}>
        <Grid xsRowGutter="space100" xsMargin="space000">
          <ComponentPageCell>
            <A11yTable
              columns={[
                'Element',
                'Attribute',
                'Value',
                'Description',
                'User supplied',
              ]}
              title="WAI-ARIA"
              tableRows={[
                {
                  element: 'stack (list)',
                  attribute: 'ariaLabel',
                  value: 'string',
                  description:
                    'The aria-label attribute can be used when the stack is rendered as a list. This allows screen readers to label the content of the list.',
                  userSupplied: true,
                },
              ]}
            />
            <InlineMessage role="region" aria-label="WAI-ARIA" icon={infoIcon}>
              StackChild can accept an order prop to visually display elements
              in a different order than they appear on the DOM, while preserving
              the tab order.
            </InlineMessage>
          </ComponentPageCell>
        </Grid>
      </Cell>
    </CommonSection>
    <ComponentAPISection
      components={[
        {
          title: 'Stack',
          summary:
            'The stack has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'Content of the Stack',
            },
            {
              name: 'inline',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  If true, the stack container will be displayed as{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
                    target="_blank"
                  >
                    inline-flex
                  </Link>
                </>
              ),
            },
            {
              name: 'flow',
              type: [
                'vertical-left |',
                'vertical-center |',
                'vertical-right |',
                'vertical-stretch |',
                'horizontal-top |',
                'horizontal-center |',
                'horizontal-bottom |',
                'horizontal-stretch',
              ],
              default: 'vertical-left',
              description: 'Defines the flow direction of the stack contents.',
            },
            {
              name: 'stackDistribution',
              type: [
                'flex-start |',
                'flex-end |',
                'center |',
                'space-around |',
                'space-between |',
                'space-evenly',
              ],
              default: 'flex-start',
              description:
                'Defines how the elements are distributed in the stack.',
            },
            {
              name: 'spaceInline',
              type: 'string',
              description: (
                <>
                  If provided, and the stack has a horizontal flow, this
                  property is used to set horizontal spacing between each item.
                  <br />
                  <br />
                  If provided, and the stack has a vertical flow, this property
                  is used to set vertical spacing between each item.
                </>
              ),
            },
            {
              name: 'spaceStack',
              type: 'string',
              description: (
                <>
                  If provided, and the stack has a horizontal flow and its items
                  are allowed to wrap, this property is used to set space
                  between the rows.
                  <br />
                  <br />
                  If provided, and the stack has a vertical flow and its items
                  are allowed to wrap, this property is used to set space
                  between the columns.
                </>
              ),
            },
            {
              name: 'height',
              type: 'string',
              default: '100%',
              description:
                'Used to set height:auto where the stack will be the height of its children. By default the stack will have 100% of the height of its parent container.',
            },
            {
              name: 'wrap',
              type: 'wrap | nowrap | wrap-reverse',
              default: 'nowrap',
              description: 'Defines how the content wraps within a stack.',
            },
            {
              name: 'list',
              type: 'boolean',
              default: 'false',
              description:
                'If true, the stack container renders as an ul, and every child element is wrapped inside a li.',
            },
            {
              name: 'flowGrow',
              type: 'boolean | number',
              default: 'false',
              description: (
                <>
                  CSS attribute that defines the flex grow factor of a{' '}
                  <Link
                    href="https://www.w3.org/TR/css-flexbox/#main-size"
                    target="_blank"
                  >
                    flex item main size
                  </Link>
                  . If true, <InlineCode>flexGrow</InlineCode> is set to 1.
                </>
              ),
            },
            {
              name: 'flexShrink',
              type: 'boolean | number',
              default: 'false',
              description: (
                <>
                  CSS attribute that defines the flex shrink factor of a flex
                  item. If the size of all flex items is larger than the flex
                  container, items shrink to fit according to{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"
                    target="_blank"
                  >
                    flexShrink
                  </Link>
                  . If true, <InlineCode>flexShrink</InlineCode> is set to 1.
                </>
              ),
            },
            {
              name: 'flowReverse',
              type: 'boolean',
              default: 'false',
              description:
                'If true, reverses the display order of elements. Keyboard focus order will be the same as the DOM order.',
            },
            {
              name: 'ariaLabel',
              type: 'string',
              description: 'If provided, defines the Aria-label of the stack.',
            },
            ...(commonLogicalProps('propsRow') as PropsRowsProps[]),
          ],
        },
        {
          title: 'StackChild',
          summary:
            'The stackChild has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'order',
              type: 'MQ<number>',
              description:
                'Defines the position of this element within the stack.',
            },
            {
              name: 'alignSelf',
              type: 'MQ<string>',
              description: 'Aligns the item on the cross axis',
            },
            {
              name: 'children',
              type: 'React.ReactNode | string',
              description: 'Content of the StackChild',
            },
            ...(commonLogicalProps('propsRow') as PropsRowsProps[]),
          ],
        },
      ]}
    />
    <RelatedComponentsSection
      related={['Grid', 'Grid Layout', 'Block', 'Visibility']}
    />
  </ComponentPageBasicTemplate>
);

export default StackComponent;
