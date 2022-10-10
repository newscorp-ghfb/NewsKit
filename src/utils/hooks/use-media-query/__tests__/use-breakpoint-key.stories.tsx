import * as React from 'react';
import {useBreakpointKey} from '../index';

import {StorybookHeading} from '../../../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../../style';

const StyledDiv = styled.div`
  border: 2px solid;
  ${getColorCssFromTheme('borderColor', 'black')};
  ${getColorCssFromTheme('color', 'inkBase')};
  font-weight: bold;
  text-align: center;
  background: orange;
`;

export const StoryUseBreakpointKey = () => {
  const bp = useBreakpointKey();

  return (
    <>
      <StorybookHeading>useBreakpointKey</StorybookHeading>
      <StyledDiv data-testid="use-breakpoint-key">{bp || 'unknown'}</StyledDiv>
    </>
  );
};
StoryUseBreakpointKey.storyName = 'useBreakpointKey';
StoryUseBreakpointKey.parameters = {
  eyes: {include: false},
};
export default {
  title: 'Utilities/useBreakpointKey',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'useBreakpointKey',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useBreakpointKey is a custom hook that returns the active breakpoint key: xs | sm | md | lg | xl',
    },
  },
};
