import * as React from 'react';
import {useBreakpointKey} from '../index';

import {
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
  styled,
} from '../../../style';
import {IconFilledInfo} from '../../../../icons';
import {InlineMessage} from '../../../../inline-message';

const StyledDiv = styled.div`
  ${getColorCssFromTheme('backgroundColor', 'red010')};
  ${getTypographyPresetFromTheme('utilityLabel030')}
  color: #3b3b3b;
  text-align: center;
  height: 64px;
  line-height: 64px;
`;

export const StoryUseBreakpointKey = () => {
  const bp = useBreakpointKey();

  return (
    <>
      <InlineMessage
        icon={
          <IconFilledInfo
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        overrides={{marginBlockEnd: 'space050'}}
      >
        Resize the browser window to return the active breakpoint key.
      </InlineMessage>
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
  component: () => 'useBreakpointKey',
  parameters: {
    nkDocs: {
      title: 'Hooks',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useBreakpointKey is a custom hook that returns the active breakpoint key: xs | sm | md | lg | xl',
    },
  },
};
