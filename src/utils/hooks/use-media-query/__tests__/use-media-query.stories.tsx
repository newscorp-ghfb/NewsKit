import * as React from 'react';
import {useMediaQuery} from '../index';

import {StorybookHeading} from '../../../../test/storybook-comps';
import {
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
  styled,
} from '../../../style';
import {InlineMessage} from '../../../../inline-message';
import {IconFilledInfo} from '../../../../icons';

interface WrapperProps {
  active: boolean;
}

const StyledDiv = styled.div<WrapperProps>`
  ${({active}) =>
    active
      ? getColorCssFromTheme('backgroundColor', 'green010')
      : getColorCssFromTheme('backgroundColor', 'red010')}
  ${getTypographyPresetFromTheme('utilityLabel030')}
  text-align: center;
  height: 64px;
  line-height: 64px;
  color: #3b3b3b;
  margin-bottom: 24px;
`;

export const StoryUseMediaQuery = () => {
  const small = useMediaQuery('screen and (max-width : 767px)');
  const medium = useMediaQuery(
    'screen and (min-width : 768px) and (max-width : 1023px)',
  );
  const large = useMediaQuery(
    'screen and (min-width : 1024px) and (max-width : 1439px)',
  );
  const extraLarge = useMediaQuery('screen and (min-width : 1440px)');

  return (
    <>
      <StorybookHeading>useMediaQuery</StorybookHeading>
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
        Resize the browser window to return the active media query.
      </InlineMessage>
      <div data-testid="use-media-query">
        <StyledDiv active={small}>sm: {small ? 'yes' : 'no'}</StyledDiv>
        <StyledDiv active={medium}>md: {medium ? 'yes' : 'no'}</StyledDiv>
        <StyledDiv active={large}>lg: {large ? 'yes' : 'no'}</StyledDiv>
        <StyledDiv active={extraLarge}>
          xl: {extraLarge ? 'yes' : 'no'}
        </StyledDiv>
      </div>
    </>
  );
};
StoryUseMediaQuery.storyName = 'useMediaQuery';
StoryUseMediaQuery.parameters = {
  eyes: {include: false},
};

export default {
  title: 'Utilities/useMediaQuery',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'useMediaQuery',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useMediaQuery is a custom hook used to help detect whether a single media query matches',
    },
  },
};
