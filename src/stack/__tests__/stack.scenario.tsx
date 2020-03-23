import * as React from 'react';
import {Flow, StackDistribution, Stack} from '..';

import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {newskitLightTheme} from '../../themes';

const MainContainer = styled.div`
  width: 800px;
  margin: auto;
  max-height: 768px;
`;

const Container = styled.div`
  border: solid 1px red;
  background-color: ${getColorFromTheme('neutral020')};
`;

const Block = styled.div<{isBlock?: boolean; hasHeight: boolean}>`
  display: ${({isBlock}) => (isBlock ? 'block' : 'inline-block')};
  height: ${({hasHeight}) => (hasHeight ? '200px' : 'auto')};
  border: dotted 1px ${getColorFromTheme('red040')};
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stackDistributionSet: any = () => {
  const sets = Object.values(Flow).map((flowKey: Flow) =>
    Object.values(StackDistribution).map(stackDistributionKey => ({
      name: `stack distribution set ${stackDistributionKey}, ${flowKey}`,
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack distribution set to {stackDistributionKey} when {flowKey}
          </StorybookHeading>
          <Container theme={newskitLightTheme}>
            <Block
              isBlock={[
                'vertical-center',
                'vertical-right',
                'horizontal-top',
                'horizontal-center',
                'horizontal-bottom',
              ].includes(flowKey)}
              hasHeight={flowKey !== 'horizontal-top'}
            >
              <Stack flow={flowKey} stackDistribution={stackDistributionKey}>
                <Tag>child 1</Tag>
                <Tag>child 2</Tag>
                <Tag>child 3</Tag>
              </Stack>
            </Block>
          </Container>
        </MainContainer>
      ),
    })),
  );
  return sets;
};

const stackSets = stackDistributionSet().flat(1);

export default {
  name: 'stack',
  children: [
    {
      name: 'stack-with-defaults-only',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>Stack with defaults only</StorybookHeading>
          <Container theme={newskitLightTheme}>
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
      name: 'stack-vertical-using-design-system-spacing-token',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            {' '}
            Stack vertical using design system spacing token
          </StorybookHeading>
          <Container theme={newskitLightTheme}>
            <Block hasHeight>
              <Stack space="sizing050">
                <Tag>Example 1</Tag>
                <Tag>Example 2</Tag>
                <Tag>Example 3</Tag>
              </Stack>
            </Block>
          </Container>
        </MainContainer>
      ),
    },
    {
      name: 'stack-horizontal-center-using-design-system-spacing-token',
      type: 'story',
      component: () => (
        <MainContainer>
          <StorybookHeading>
            Stack horizontal center using design system spacing token
          </StorybookHeading>
          <Container theme={newskitLightTheme}>
            <Block hasHeight>
              <Stack space="sizing050" flow={Flow.HorizontalCenter}>
                <Tag>Example 1</Tag>
                <Tag>Example 2</Tag>
                <Tag>Example 3</Tag>
              </Stack>
            </Block>
          </Container>
        </MainContainer>
      ),
    },
    ...stackSets,
  ],
};
