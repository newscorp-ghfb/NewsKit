import * as React from 'react';
import {Stack} from '../../stack';

import {styled} from '../../utils/style';
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
  height: ${({hasHeight}) => (hasHeight ? '200px' : 'auto')};
  width: ${({hasWidth}) => (hasWidth ? '400px' : 'auto')};
`;

export default {
  title: 'Components/stack-child',
  component: () => 'None',
};

export const StoryStackChildCustomOrder = () => (
  <MainContainer>
    <StorybookHeading>StackChild with custom order</StorybookHeading>
    <Container>
      <Stack spaceInline="space050" flow="horizontal-top">
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
      <Stack spaceInline="space050" flow="horizontal-top" list>
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

export const StoryStackChildWithLogicalProps = () => (
  <MainContainer>
    <StorybookHeading>StackChild with logical props</StorybookHeading>
    <Container>
      <Stack spaceInline="space050" flow="horizontal-top">
        <StackChild order={1} paddingInline="30px" paddingBlock="20px">
          <Tag>With padding props</Tag>
        </StackChild>
        <StackChild order={2} marginInline="30px" marginBlock="20px">
          <Tag>With margin props</Tag>
        </StackChild>
      </Stack>
    </Container>
  </MainContainer>
);
StoryStackChildWithLogicalProps.storyName = 'stack-child-with-logical-props';
