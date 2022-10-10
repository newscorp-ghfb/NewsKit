import * as React from 'react';
import {Flow, Stack, StackDistribution} from '..';
import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {StackChild} from '../../stack-child';

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  max-height: 768px;
`;

const Container = styled.div<{
  hasHeight?: boolean;
  hasWidth?: boolean;
}>`
  border: solid 1px red;
  background-color: ${getColorFromTheme('neutral020')};
  height: ${({hasHeight}) => (hasHeight ? '200px' : 'auto')};
  ${({hasWidth}) =>
    hasWidth ? {maxWidth: '400px', width: '100%'} : {maxWidth: 'auto'}};
  overflow: hidden;
`;

const Tag = styled.div`
  box-sizing: border-box;
  min-height: 32px;
  padding: 5px 12px;
  border: 1px solid #535353;
  color: #2e2e2e;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

const renderChildren = (wrap: 'wrap' | 'nowrap') => {
  const children = [<Tag>child 1</Tag>, <Tag>child 2</Tag>, <Tag>child 3</Tag>];

  if (wrap === 'wrap') {
    return [
      ...children,
      <Tag>child 4</Tag>,
      <Tag>child 5</Tag>,
      <Tag>child 6</Tag>,
      <Tag>child 7</Tag>,
      <Tag>child 8</Tag>,
      <Tag>child 9</Tag>,
    ];
  }

  return children;
};
const FlowTypes = [
  'vertical-left',
  'vertical-center',
  'vertical-right',
  'vertical-stretch',
  'horizontal-top',
  'horizontal-center',
  'horizontal-bottom',
  'horizontal-stretch',
];

const StackDistributionTypes = [
  'flex-start',
  'flex-end',
  'center',
  'space-around',
  'space-between',
  'space-evenly',
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stackDistributionSet: any = () => {
  const sets = Object.values(['nowrap', 'wrap']).map(wrapType =>
    FlowTypes.map(flowKey =>
      StackDistributionTypes.map(stackDistributionKey => ({
        storyName: `stack distribution set ${stackDistributionKey}, ${flowKey}${
          wrapType === 'wrap' ? ', wrap' : ''
        }`,

        parameters: {eyes: {include: wrapType !== 'wrap'}}, // TODO: Include all test when snapshots limit increases.
        storyFn: () => (
          <MainContainer>
            <StorybookHeading>
              Stack distribution set to {stackDistributionKey} when {flowKey}
              {wrapType === 'wrap' ? ', wrap' : ''}
            </StorybookHeading>
            <Container
              hasHeight
              hasWidth={
                wrapType === 'wrap' &&
                [
                  'horizontal-top',
                  'horizontal-center',
                  'horizontal-bottom',
                ].includes(flowKey as string)
              }
            >
              <Stack
                flow={flowKey as Flow}
                stackDistribution={stackDistributionKey as StackDistribution}
                wrap={wrapType as 'wrap' | 'nowrap'}
              >
                {renderChildren(wrapType as 'wrap' | 'nowrap')}
              </Stack>
            </Container>
          </MainContainer>
        ),
      })),
    ),
  );
  return sets;
};

type StoryStackType = {
  storyName: string;
  parameters: object;
  storyFn: () => JSX.Element;
};
const stackSets = stackDistributionSet().flat(2) as StoryStackType[];

export default {
  title: 'Components/stack',
  component: Stack,
};

export const StoryStackWithDefaultsOnly = () => (
  <MainContainer>
    <StorybookHeading>Stack with defaults only</StorybookHeading>
    <Container>
      <Stack>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackWithDefaultsOnly.storyName = 'stack-with-defaults-only';

export const StoryStackVerticalUsingSpaceinlineToken = () => (
  <MainContainer>
    <StorybookHeading>Stack vertical using spaceInline token</StorybookHeading>
    <Container>
      <Stack spaceInline="space050">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackVerticalUsingSpaceinlineToken.storyName =
  'stack-vertical-using-spaceInline-token';

export const StoryStackHorizontalUsingSpaceinlineToken = () => (
  <MainContainer>
    <StorybookHeading>
      Stack horizontal using spaceInline token
    </StorybookHeading>
    <Container>
      <Stack spaceInline="space050" flow="horizontal-top">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalUsingSpaceinlineToken.storyName =
  'stack-horizontal-using-spaceInline-token';

export const StoryStackVerticalUsingSpaceinlineSpacestackTokens = () => (
  <MainContainer>
    <StorybookHeading>
      Stack vertical using spaceInline and spaceStack tokens
    </StorybookHeading>
    <Container hasHeight>
      <Stack spaceInline="space050" spaceStack="space060" wrap="wrap">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 4</Tag>
        <Tag>Example 5</Tag>
        <Tag>Example 6</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackVerticalUsingSpaceinlineSpacestackTokens.storyName =
  'stack-vertical-using-spaceInline-spaceStack-tokens';

export const StoryStackHorizontalUsingSpaceinlineSpacestackTokens = () => (
  <MainContainer>
    <StorybookHeading>
      Stack horizontal using spaceInline spaceStack token
    </StorybookHeading>
    <Container hasHeight hasWidth>
      <Stack
        spaceInline="space050"
        spaceStack="space050"
        wrap="wrap"
        flow="horizontal-top"
      >
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 4</Tag>
        <Tag>Example 5</Tag>
        <Tag>Example 6</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalUsingSpaceinlineSpacestackTokens.storyName =
  'stack-horizontal-using-spaceInline-spaceStack-tokens';

export const StoryStackHorizontalInline = () => (
  <MainContainer>
    <StorybookHeading>Stack horizontal inline</StorybookHeading>
    <Container hasWidth>
      <Stack flow="horizontal-top" inline>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 4</Tag>
        <Tag>Example 5</Tag>
        <Tag>Example 6</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalInline.storyName = 'stack-horizontal-inline';

export const StoryStackVerticalInline = () => (
  <MainContainer>
    <StorybookHeading>Stack vertical inline</StorybookHeading>
    <Container hasHeight>
      <Stack inline>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 4</Tag>
        <Tag>Example 5</Tag>
        <Tag>Example 6</Tag>
        <Tag>Example 7</Tag>
        <Tag>Example 8</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackVerticalInline.storyName = 'stack-vertical-inline';

export const StoryStackVerticalWithCustomHeight = () => (
  <MainContainer>
    <StorybookHeading>
      Stack vertical with custom height (200px)
    </StorybookHeading>
    <Container>
      <Stack
        flow="vertical-left"
        stackDistribution="space-between"
        height="200px"
      >
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackVerticalWithCustomHeight.storyName =
  'stack-vertical-with-custom-height';

export const StoryStackVerticalWithSiblings = () => (
  <MainContainer>
    <StorybookHeading>
      Stack vertical with siblings within a container that has height defined
    </StorybookHeading>
    <Container hasHeight>
      <Block spaceStack="space020">
        <TextBlock>Sibling</TextBlock>
        <TextBlock>Sibling</TextBlock>
      </Block>
      <Stack
        flow="vertical-left"
        stackDistribution="space-between"
        height="auto"
      >
        <Tag>Nested Item 1</Tag>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackVerticalWithSiblings.storyName = 'stack-vertical-with-siblings';

export const StoryStackHorizontalReverse = () => (
  <MainContainer>
    <StorybookHeading>Stack horizontal reverse</StorybookHeading>
    <Container>
      <Stack flow="horizontal-top" flowReverse>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 4</Tag>
        <Tag>Example 5</Tag>
        <Tag>Example 6</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalReverse.storyName = 'stack-horizontal-reverse';

export const StoryStackHorizontalReverseWithSpace = () => (
  <MainContainer>
    <StorybookHeading>Stack horizontal reverse with space</StorybookHeading>
    <Container>
      <Stack flow="horizontal-top" flowReverse spaceInline="space030">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 4</Tag>
        <Tag>Example 5</Tag>
        <Tag>Example 6</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalReverseWithSpace.storyName =
  'stack-horizontal-reverse-with-space';

export const StoryNestedStacks = () => (
  <MainContainer>
    <StorybookHeading>Nested stacks</StorybookHeading>
    <Container>
      <Stack flow="vertical-left">
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedStacks.storyName = 'nested-stacks';

export const StoryNestedHorizontalStacks = () => (
  <MainContainer>
    <StorybookHeading>Nested horizontal stacks</StorybookHeading>
    <Container>
      <Stack flow="horizontal-top">
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedHorizontalStacks.storyName = 'nested-horizontal-stacks';

export const StoryNestedStacksWithSpace = () => (
  <MainContainer>
    <StorybookHeading>Nested stacks with space</StorybookHeading>
    <Container>
      <Stack spaceInline="space030">
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedStacksWithSpace.storyName = 'nested-stacks-with-space';

export const StoryNestedHorizontalStacksWithSpace = () => (
  <MainContainer>
    <StorybookHeading>Nested horizontal stacks with space</StorybookHeading>
    <Container>
      <Stack flow="horizontal-top" spaceInline="space050">
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedHorizontalStacksWithSpace.storyName =
  'nested-horizontal-stacks-with-space';

export const StoryNestedStacksMixedContent = () => (
  <MainContainer>
    <StorybookHeading>Nested stacks with mixed content</StorybookHeading>
    <Container>
      <Stack flow="horizontal-top" spaceInline="space040">
        <Tag>Item 1</Tag>
        <Tag>Item 2</Tag>
        <Tag>Item 3</Tag>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedStacksMixedContent.storyName = 'nested-stacks-mixed-content';

export const StoryNestedHorizontalStacksInline = () => (
  <MainContainer>
    <StorybookHeading>Nested horizontal stacks inline</StorybookHeading>
    <Container>
      <Stack flow="horizontal-top" inline>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedHorizontalStacksInline.storyName = 'nested-horizontal-stacks-inline';

export const StoryNestedHorizontalStacksAsSpan = () => (
  <MainContainer>
    <StorybookHeading>Nested horizontal stacks as span</StorybookHeading>
    <Container>
      <Stack flow="horizontal-top" as="span">
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedHorizontalStacksAsSpan.storyName =
  'nested-horizontal-stacks-as-span';

export const StoryNestedHorizontalStacksAsSpanWithSpace = () => (
  <MainContainer>
    <StorybookHeading>
      Nested horizontal stacks as span with space
    </StorybookHeading>
    <Container>
      <Stack flow="horizontal-top" as="span" spaceInline="space030">
        <Stack flow="horizontal-top" spaceInline="space010">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top" spaceInline="space010">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedHorizontalStacksAsSpanWithSpace.storyName =
  'nested-horizontal-stacks-as-span-with-space';

export const StoryStackAsList = () => (
  <MainContainer>
    <StorybookHeading>Stack as a list</StorybookHeading>
    <Container>
      <Stack list ariaLabel="Tag list">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackAsList.storyName = 'stack-as-list';

export const StoryStackAsListWithSpace = () => (
  <MainContainer>
    <StorybookHeading>Stack as list with space</StorybookHeading>
    <Container>
      <Stack list spaceInline="space030" ariaLabel="Tag list">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackAsListWithSpace.storyName = 'stack-as-list-with-space';

export const StoryStackAsListWithSpaceWrap = () => (
  <MainContainer>
    <StorybookHeading>Stack as list with space wrap</StorybookHeading>
    <Container hasHeight>
      <Stack
        list
        spaceInline="space030"
        spaceStack="space030"
        ariaLabel="Tag list"
        wrap="wrap"
      >
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackAsListWithSpaceWrap.storyName = 'stack-as-list-with-space-wrap';

export const StoryStackHorizontalAsList = () => (
  <MainContainer>
    <StorybookHeading>Stack horizontal as a list</StorybookHeading>
    <Container>
      <Stack list ariaLabel="Tag list" flow="horizontal-top">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalAsList.storyName = 'stack-horizontal-as-list';

export const StoryStackHorizontalAsListWithSpace = () => (
  <MainContainer>
    <StorybookHeading>Stack horizontal as list with space</StorybookHeading>
    <Container>
      <Stack
        list
        spaceInline="space030"
        ariaLabel="Tag list"
        flow="horizontal-top"
      >
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalAsListWithSpace.storyName =
  'stack-horizontal-as-list-with-space';

export const StoryStackHorizontalAsListWithSpaceWrap = () => (
  <MainContainer>
    <StorybookHeading>
      Stack horizontal as list with space wrap
    </StorybookHeading>
    <Container>
      <Stack
        list
        spaceInline="space030"
        spaceStack="space030"
        ariaLabel="Tag list"
        flow="horizontal-top"
        wrap="wrap"
      >
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackHorizontalAsListWithSpaceWrap.storyName =
  'stack-horizontal-as-list-with-space-wrap';

export const StoryStackAsListWithNestedStackAsChild = () => (
  <MainContainer>
    <StorybookHeading>
      Stack as a list with nested stack as child
    </StorybookHeading>
    <Container>
      <Stack list>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackAsListWithNestedStackAsChild.storyName =
  'stack-as-list-with-nested-stack-as-child';

export const StoryStackAsListWithSpaceAndNestedStackAsChild = () => (
  <MainContainer>
    <StorybookHeading>
      Stack as list with space and nested stack as child
    </StorybookHeading>
    <Container>
      <Stack list spaceInline="space030">
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackAsListWithSpaceAndNestedStackAsChild.storyName =
  'stack-as-list-with-space-and-nested-stack-as-child';

export const StoryNestedStacksBothAsList = () => (
  <MainContainer>
    <StorybookHeading>Nested stacks both as list</StorybookHeading>
    <Container>
      <Stack list>
        <Stack list flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack list flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack list flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedStacksBothAsList.storyName = 'nested-stacks-both-as-list';

export const StoryNestedStacksBothAsListWithSpace = () => (
  <MainContainer>
    <StorybookHeading>Nested stacks both as list with space</StorybookHeading>
    <Container>
      <Stack list spaceInline="space030">
        <Stack list flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack list flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
        <Stack list flow="horizontal-top">
          <Tag>Nested Item 1</Tag>
          <Tag>Nested Item 2</Tag>
          <Tag>Nested Item 3</Tag>
        </Stack>
      </Stack>
    </Container>
  </MainContainer>
);
StoryNestedStacksBothAsListWithSpace.storyName =
  'nested-stacks-both-as-list-with-space';

// From GitHub, why dynamic creating stories is not possible anymore
// It's very important for us that CSF be statically analyzable, so we're not planning on adding a dynamic story API
export const StoryAllInOne = () => <>{stackSets.map(c => c.storyFn())}</>;
StoryAllInOne.storyName = 'all-in-one';

export const StoryResponsive = () => (
  <MainContainer>
    <StorybookHeading>Responsive options</StorybookHeading>
    <Container>
      <Stack
        stackDistribution={{sm: 'flex-end', md: 'flex-start'}}
        flow={{sm: 'horizontal-center', lg: 'vertical-center'}}
        spaceStack={{xs: 'space010', md: 'space030'}}
        wrap={{md: true}}
        inline={{md: true}}
        spaceInline={{xs: 'space010', md: 'space030'}}
        flowReverse={{md: true}}
        flexGrow={{xs: 2, sm: 10}}
        flexShrink={{xs: 2, sm: 10}}
        height={{md: '50vh'}}
      >
        <StackChild order={{xs: 10, md: 0}} alignSelf={{sm: 'flex-end'}}>
          <Tag>Nested Item 1</Tag>
        </StackChild>
        <Tag>Nested Item 2</Tag>
        <Tag>Nested Item 3</Tag>
        <Tag>Nested Item 4</Tag>
      </Stack>
    </Container>
  </MainContainer>
);

StoryResponsive.storyName = 'responsive';

export const StoryStackWithLogicalProps = () => (
  <MainContainer>
    <StorybookHeading>Stack with logical margin</StorybookHeading>
    <Container>
      <Stack marginBlock="space050">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
    <StorybookHeading>Stack with logical padding</StorybookHeading>
    <Container>
      <Stack paddingBlock="space050">
        <Tag>Example 1</Tag>
        <Tag>Example 2</Tag>
        <Tag>Example 3</Tag>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackWithLogicalProps.storyName = 'stack-with-logical-props';

// @ts-ignore
const StoryStackTemplate = ({wrap, ...args}) => (
  <Stack {...args} wrap={wrap}>
    {renderChildren(wrap as 'wrap' | 'nowrap')}
  </Stack>
);

// @ts-ignore
export const StoryStackWithArgs = StoryStackTemplate.bind({});
// @ts-ignore
StoryStackWithArgs.args = {
  spaceStack: 'space000',
  spaceInline: 'space000',
  flow: 'vertical-left',
  wrap: 'nowrap',
  stackDistribution: 'flex-start',
  flexGrow: false,
  flexShrink: false,
  flowReverse: false,
  inline: false,
};

// @ts-ignore
StoryStackWithArgs.argTypes = {
  spaceStack: {
    control: {type: 'text'},
  },
  spaceInline: {
    control: {type: 'text'},
  },
  flow: {
    options: [
      'vertical-left',
      'vertical-center',
      'vertical-right',
      'vertical-stretch',
      'horizontal-top',
      'horizontal-center',
      'horizontal-bottom',
      'horizontal-stretch',
    ],
    control: {type: 'select'},
  },
  wrap: {
    options: ['wrap', 'nowrap'],
    control: {type: 'select'},
  },
  stackDistribution: {
    options: [
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
      'space-evenly',
    ],
    control: {type: 'select'},
  },
  flexGrow: {
    control: {type: 'boolean'},
  },
  flexShrink: {
    control: {type: 'boolean'},
  },
  flowReverse: {
    control: {type: 'boolean'},
  },
  inline: {
    control: {type: 'boolean'},
  },
};
// @ts-ignore
StoryStackWithArgs.storyName = 'stack-with-args';
// @ts-ignore
StoryStackWithArgs.parameters = {eyes: {include: false}};
