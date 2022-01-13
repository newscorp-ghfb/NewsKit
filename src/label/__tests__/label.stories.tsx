import * as React from 'react';

import {Label} from '..';
import {styled, getSizingCssFromTheme} from '../../utils/style';
import {Stack, StackDistribution} from '../../stack';
import {Block} from '../../block';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {TextFieldSize} from '../..';

const Container = styled.div`
  ${getSizingCssFromTheme('margin', {
    xs: 'sizing000',
    md: 'sizing100',
  })};
`;

export default {
  title: 'NewsKit Light/label',
  component: () => 'None',
};

export const LabelSizes = () => (
  <>
    <StorybookHeading>Label Sizes</StorybookHeading>
    <Container>
      <Stack
        stackDistribution={StackDistribution.SpaceBetween}
        flow="horizontal-center"
      >
        <Block>
          <StorybookSubHeading>Small</StorybookSubHeading>
          <Label size={'small' as TextFieldSize}>Label</Label>
        </Block>
        <Block>
          <StorybookSubHeading>Medium</StorybookSubHeading>
          <Label size={'medium' as TextFieldSize}>Label</Label>
        </Block>
        <Block>
          <StorybookSubHeading>Large</StorybookSubHeading>
          <Label size={'large' as TextFieldSize}>Label</Label>
        </Block>
      </Stack>
    </Container>
  </>
);
LabelSizes.storyName = 'label-size';

export const LabelVariants = () => (
  <>
    <StorybookHeading>Label Variations</StorybookHeading>
    <Container>
      <Stack wrap spaceInline="space020">
        <Block>
          <StorybookSubHeading>Disabled</StorybookSubHeading>
          <Label state="disabled">Test</Label>
        </Block>
      </Stack>
    </Container>
  </>
);
LabelVariants.storyName = 'label-variations';
