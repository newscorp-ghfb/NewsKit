import * as React from 'react';
import {Flow, StackDistribution, Stack} from '..';
import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';

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
  width: ${({hasWidth}) => (hasWidth ? '400px' : 'auto')};
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stackDistributionSet: any = () => {
  const sets = Object.values(['nowrap', 'wrap']).map(wrapType =>
    Object.values(Flow).map((flowKey: Flow) =>
      Object.values(StackDistribution).map(stackDistributionKey => ({
        name: `stack distribution set ${stackDistributionKey}, ${flowKey}${
          wrapType === 'wrap' ? ', wrap' : ''
        }`,
        type: 'story',
        parameters: {eyes: {include: wrapType !== 'wrap'}}, // TODO: Include all test when snapshots limit increases.
        component: () => (
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
                ].includes(flowKey)
              }
            >
              <Stack
                flow={flowKey}
                stackDistribution={stackDistributionKey}
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

const stackSets = stackDistributionSet().flat(2);

export default {
  name: 'stack',
  children: [
    {
      name: 'stack-with-defaults-only',
      type: 'story',
      component: () => (
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
      ),
    },
    {
      name: 'stack-vertical-using-spaceInline-token',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack vertical using spaceInline token
          </StorybookHeading>
          <Container>
            <Stack spaceInline="space050">
              <Tag>Example 1</Tag>
              <Tag>Example 2</Tag>
              <Tag>Example 3</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-horizontal-using-spaceInline-token',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack horizontal using spaceInline token
          </StorybookHeading>
          <Container>
            <Stack spaceInline="space050" flow={Flow.HorizontalTop}>
              <Tag>Example 1</Tag>
              <Tag>Example 2</Tag>
              <Tag>Example 3</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-vertical-using-spaceInline-spaceStack-tokens',
      type: 'story',
      component: () => (
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
      ),
    },
    {
      name: 'stack-horizontal-using-spaceInline-spaceStack-tokens',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack horizontal using spaceInline spaceStack token
          </StorybookHeading>
          <Container hasHeight hasWidth>
            <Stack
              spaceInline="space050"
              spaceStack="space050"
              wrap="wrap"
              flow={Flow.HorizontalTop}
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
      ),
    },
    {
      name: 'stack-horizontal-inline',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Stack horizontal inline</StorybookHeading>
          <Container hasWidth>
            <Stack flow={Flow.HorizontalTop} inline>
              <Tag>Example 1</Tag>
              <Tag>Example 2</Tag>
              <Tag>Example 3</Tag>
              <Tag>Example 4</Tag>
              <Tag>Example 5</Tag>
              <Tag>Example 6</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-vertical-inline',
      type: 'story',
      component: () => (
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
      ),
    },
    {
      name: 'stack-vertical-with-custom-height',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack vertical with custom height (200px)
          </StorybookHeading>
          <Container>
            <Stack
              flow={Flow.VerticalLeft}
              stackDistribution={StackDistribution.SpaceBetween}
              height="200px"
            >
              <Tag>Nested Item 1</Tag>
              <Tag>Nested Item 2</Tag>
              <Tag>Nested Item 3</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-vertical-with-siblings',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack vertical with siblings within a container that has height
            defined
          </StorybookHeading>
          <Container hasHeight>
            <Block spaceStack="space020">
              <TextBlock>Sibling</TextBlock>
              <TextBlock>Sibling</TextBlock>
            </Block>
            <Stack
              flow={Flow.VerticalLeft}
              stackDistribution="space-between"
              height="auto"
            >
              <Tag>Nested Item 1</Tag>
              <Tag>Nested Item 2</Tag>
              <Tag>Nested Item 3</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-horizontal-reverse',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Stack horizontal reverse</StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop} flowReverse>
              <Tag>Example 1</Tag>
              <Tag>Example 2</Tag>
              <Tag>Example 3</Tag>
              <Tag>Example 4</Tag>
              <Tag>Example 5</Tag>
              <Tag>Example 6</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-horizontal-reverse-with-space',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack horizontal reverse with space
          </StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop} flowReverse spaceInline="space030">
              <Tag>Example 1</Tag>
              <Tag>Example 2</Tag>
              <Tag>Example 3</Tag>
              <Tag>Example 4</Tag>
              <Tag>Example 5</Tag>
              <Tag>Example 6</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-stacks',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Nested stacks</StorybookHeading>
          <Container>
            <Stack flow={Flow.VerticalLeft}>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-horizontal-stacks',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Nested horizontal stacks</StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop}>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-stacks-with-space',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Nested stacks with space</StorybookHeading>
          <Container>
            <Stack spaceInline="space030">
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-horizontal-stacks-with-space',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Nested horizontal stacks with space
          </StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop} spaceInline="space050">
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-stacks-mixed-content',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Nested stacks with mixed content</StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop} spaceInline="space040">
              <Tag>Item 1</Tag>
              <Tag>Item 2</Tag>
              <Tag>Item 3</Tag>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-horizontal-stacks-inline',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Nested horizontal stacks inline</StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop} inline>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-horizontal-stacks-as-span',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Nested horizontal stacks as span</StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop} as="span">
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-horizontal-stacks-as-span-with-space',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Nested horizontal stacks as span with space
          </StorybookHeading>
          <Container>
            <Stack flow={Flow.HorizontalTop} as="span" spaceInline="space030">
              <Stack flow={Flow.HorizontalTop} spaceInline="space010">
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop} spaceInline="space010">
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-as-list',
      type: 'story',
      component: () => (
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
      ),
    },
    {
      name: 'stack-as-list-with-space',
      type: 'story',
      component: () => (
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
      ),
    },
    {
      name: 'stack-as-list-with-space-wrap',
      type: 'story',
      component: () => (
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
      ),
    },
    {
      name: 'stack-horizontal-as-list',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Stack horizontal as a list</StorybookHeading>
          <Container>
            <Stack list ariaLabel="Tag list" flow={Flow.HorizontalTop}>
              <Tag>Example 1</Tag>
              <Tag>Example 2</Tag>
              <Tag>Example 3</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-horizontal-as-list-with-space',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack horizontal as list with space
          </StorybookHeading>
          <Container>
            <Stack
              list
              spaceInline="space030"
              ariaLabel="Tag list"
              flow={Flow.HorizontalTop}
            >
              <Tag>Example 1</Tag>
              <Tag>Example 2</Tag>
              <Tag>Example 3</Tag>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-horizontal-as-list-with-space-wrap',
      type: 'story',
      component: () => (
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
              flow={Flow.HorizontalTop}
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
      ),
    },
    {
      name: 'stack-as-list-with-nested-stack-as-child',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack as a list with nested stack as child
          </StorybookHeading>
          <Container>
            <Stack list>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-as-list-with-space-and-nested-stack-as-child',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack as list with space and nested stack as child
          </StorybookHeading>
          <Container>
            <Stack list spaceInline="space030">
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-stacks-both-as-list',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Nested stacks both as list</StorybookHeading>
          <Container>
            <Stack list>
              <Stack list flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack list flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack list flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'nested-stacks-both-as-list-with-space',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Nested stacks both as list with space
          </StorybookHeading>
          <Container>
            <Stack list spaceInline="space030">
              <Stack list flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack list flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
              <Stack list flow={Flow.HorizontalTop}>
                <Tag>Nested Item 1</Tag>
                <Tag>Nested Item 2</Tag>
                <Tag>Nested Item 3</Tag>
              </Stack>
            </Stack>
          </Container>
        </MainContainer>
      ),
    },
    ...stackSets,
  ],
};
