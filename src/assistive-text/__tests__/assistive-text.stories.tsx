import * as React from 'react';

import {AssistiveText} from '..';
import {styled, getSizingCssFromTheme} from '../../utils/style';
import {Stack} from '../../stack';
import {Block} from '../../block';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {TextFieldSize} from '../../text-field';
import {IconFilledAccountBalance} from '../../icons';

const Container = styled.div`
  ${getSizingCssFromTheme('margin', {
    xs: 'sizing000',
    md: 'sizing100',
  })};
`;

const StyledDiv = styled.div`
  border: 1px red dotted;
`;

export default {
  title: 'NewsKit Light/assistive-text',
  component: () => 'None',
};

export const AssistiveTextSizes = () => (
  <>
    <StorybookHeading>Assistive Text Sizes</StorybookHeading>
    <Container>
      <Stack stackDistribution="space-between" flow="horizontal-center">
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

const enhancer = <IconFilledAccountBalance overrides={{size: 'iconSize020'}} />;

export const AssistiveTextEnhancers = () => (
  <>
    <StorybookHeading>Assistive Text Enhancers</StorybookHeading>
    <Container>
      <Stack wrap spaceInline="space020">
        <Block>
          <StorybookSubHeading>Start</StorybookSubHeading>
          <AssistiveText startEnhancer={enhancer}>Test</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>End</StorybookSubHeading>
          <AssistiveText endEnhancer={enhancer}>Test</AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Start and End</StorybookSubHeading>
          <AssistiveText startEnhancer={enhancer} endEnhancer={enhancer}>
            Test
          </AssistiveText>
        </Block>
      </Stack>
      <Stack wrap spaceInline="space020">
        <Block>
          <StorybookSubHeading>Long long text</StorybookSubHeading>
          <AssistiveText startEnhancer={enhancer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>End</StorybookSubHeading>
          <AssistiveText endEnhancer={enhancer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </AssistiveText>
        </Block>
        <Block>
          <StorybookSubHeading>Start and End</StorybookSubHeading>
          <AssistiveText startEnhancer={enhancer} endEnhancer={enhancer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </AssistiveText>
        </Block>
      </Stack>
    </Container>
  </>
);
AssistiveTextEnhancers.storyName = 'assistive-text-enhancers';

export const AssistiveTextWithLogicalPropsOverrides = () => (
  <>
    <StorybookSubHeading>
      Assistive Text With Logical Paddings and Margins
    </StorybookSubHeading>
    <StyledDiv>
      <AssistiveText
        overrides={{paddingBlock: 'space050', marginBlock: 'space050'}}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </AssistiveText>
    </StyledDiv>
    <StorybookSubHeading>
      Assistive Text With Logical Paddings, Margins and Enhancers
    </StorybookSubHeading>
    <StyledDiv>
      <AssistiveText
        startEnhancer={enhancer}
        endEnhancer={enhancer}
        overrides={{paddingBlock: 'space050', marginBlock: 'space050'}}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </AssistiveText>
    </StyledDiv>
  </>
);
AssistiveTextWithLogicalPropsOverrides.storyName =
  'assistive-text-enhancers-with-logical-props-overrides';
