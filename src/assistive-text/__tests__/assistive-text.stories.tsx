import * as React from 'react';

import {AssistiveText} from '..';
import {styled, getSizingCssFromTheme} from '../../utils/style';
import {Stack, StackDistribution} from '../../stack';
import {Block} from '../../block';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {TextFieldSize} from '../../text-field';

const Container = styled.div`
  ${getSizingCssFromTheme('margin', {
    xs: 'sizing000',
    md: 'sizing100',
  })};
`;

export default {
  title: 'NewsKit Light/assistive-text',
  component: () => 'None',
};

export const AssistiveTextSizes = () => (
  <>
    <StorybookHeading>Assistive Text Sizes</StorybookHeading>
    <Container>
      <Stack
        stackDistribution={StackDistribution.SpaceBetween}
        flow="horizontal-center"
      >
        <Block>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <AssistiveText size={'small' as TextFieldSize}>Test</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <AssistiveText size={'medium' as TextFieldSize}>Test</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <AssistiveText size={'large' as TextFieldSize}>Test</AssistiveText>
        </Block>
      </Stack>
    </Container>
  </>
);
AssistiveTextSizes.storyName = 'assistive-text-size';

export const AssistiveTextVariants = () => (
  <>
    <StorybookHeading>Assistive Text Variations</StorybookHeading>
    <Container>
      <Stack wrap spaceInline="space020">
        <Block>
          <StorybookSubHeading>Valid</StorybookSubHeading>
          <AssistiveText state="valid">Test</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Invalid</StorybookSubHeading>
          <AssistiveText state="invalid">Test</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Disabled</StorybookSubHeading>
          <AssistiveText state="disabled">Test</AssistiveText>
        </Block>
      </Stack>
    </Container>
  </>
);
AssistiveTextVariants.storyName = 'assistive-text-variations';
