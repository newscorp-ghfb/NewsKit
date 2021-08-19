import * as React from 'react';
import {Flow, Stack} from '../../stack';

import {styled, getColorFromTheme} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {StackChild} from '..';

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

export default {
  title: 'NewsKit Light/stack-child',
  component: () => 'None',
};

export const StoryStackChildCustomOrder = () => (
  <MainContainer>
    <StorybookHeading>StackChild with custom order</StorybookHeading>
    <Container>
      <Stack spaceInline="space050" flow={Flow.HorizontalTop}>
        <StackChild order={3}>
          <Tag>Child 1</Tag>
        </StackChild>
        <StackChild order={1}>
          <Tag>Child 2</Tag>
        </StackChild>
        <StackChild order={1}>
          <Tag>Child 3</Tag>
        </StackChild>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackChildCustomOrder.storyName = 'stack-child-custom-order';

export const StoryStackChildWithStackList = () => (
  <MainContainer>
    <StorybookHeading>StackChild with stack list</StorybookHeading>
    <Container>
      <Stack spaceInline="space050" flow={Flow.HorizontalTop} list>
        <StackChild order={3}>
          <Tag>Child 1</Tag>
        </StackChild>
        <StackChild order={1}>
          <Tag>Child 2</Tag>
        </StackChild>
        <StackChild order={1}>
          <Tag>Child 3</Tag>
        </StackChild>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackChildWithStackList.storyName = 'stack-child-with-stack-list';
