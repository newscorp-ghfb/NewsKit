import * as React from 'react';
import {Stack} from '../../stack';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {Tag} from '../../tag/tag';
import {StackChild} from '..';
import {LinkInline} from '../../link';

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  max-height: 768px;
`;

const Container = styled.div<{
  hasHeight?: boolean;
  hasWidth?: boolean;
  hasBorder?: boolean;
  hasBackgroundColor?: boolean;
}>`
  border: ${({hasBorder}) => (hasBorder ? 'dotted 1px red' : 'undefined')};
  ${({hasBackgroundColor}) =>
    hasBackgroundColor
      ? getColorCssFromTheme('backgroundColor', 'blue010')
      : undefined};
`;

export default {
  title: 'Components/Stack child',
  component: StackChild,
  parameters: {
    nkDocs: {
      title: 'Stack child',
      url: 'https://newskit.co.uk/components/stack',
      description: (
        <>
          A stack is a layout component that abstracts the implementation of{' '}
          <LinkInline
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
            target="_blank"
          >
            flexbox.
          </LinkInline>
        </>
      ),
    },
  },
};

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase>
      <Container hasBackgroundColor>
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
    </StorybookCase>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StoryStackChildCustomOrder = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase>
      <Container hasBackgroundColor>
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
    </StorybookCase>
  </StorybookPage>
);
StoryStackChildCustomOrder.storyName = 'Custom order';

export const StoryStackChildWithStackList = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase>
      <Container hasBackgroundColor>
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
    </StorybookCase>
  </StorybookPage>
);
StoryStackChildWithStackList.storyName = 'Stack list';

export const StoryStackChildWithLogicalProps = () => (
  <MainContainer>
    <Container hasBorder>
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
StoryStackChildWithLogicalProps.storyName = 'Logical props';
