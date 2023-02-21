import * as React from 'react';
import {Label} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../..';

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryLabelDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <Label>Label</Label>
    </StorybookCase>
  </StorybookPage>
);
StoryLabelDefault.storyName = 'Default';

export const StoryLabelSize = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <StorybookCase title="Small">
      <Label size="small">Label</Label>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Label size="medium">Label</Label>
    </StorybookCase>
    <StorybookCase title="Large">
      <Label size="large">Label</Label>
    </StorybookCase>
  </StorybookPage>
);
StoryLabelSize.storyName = 'Size';

export const StoryLabelStates = () => (
  <StorybookPage>
    <StorybookCase title="Disabled">
      <Label state="disabled">Please enter your email address</Label>
    </StorybookCase>
  </StorybookPage>
);
StoryLabelStates.storyName = 'States';

export const StoryLabelLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <MarginOverridesWrapper>
        <Label overrides={{marginBlock: 'space070', marginInline: 'space050'}}>
          Label
        </Label>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryLabelLogicalProps.storyName = 'Logical props';

export default {
  title: 'Components/Label',
  component: Label,
  parameters: {
    nkDocs: {
      url: 'https://www.newskit.co.uk/components/form',
      title: 'Label',
      description:
        'Labels provide captions for elements that informs users what information belongs in a given input or action.',
    },
  },
};
