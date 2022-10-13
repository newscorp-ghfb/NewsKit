import * as React from 'react';
import {useMediaQueryObject} from '../index';
import {MQ} from '../../../style/types';
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
  text-align: center;
  height: 64px;
  line-height: 64px;
  color: #3b3b3b;
`;

export const StoryUseMediaQueryObject = () => {
  const mediaQueryObject: MQ<string> = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  };
  const bp = useMediaQueryObject(mediaQueryObject);

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
        Resize the browser window to return the active media query object.
      </InlineMessage>
      <StyledDiv data-testid="use-media-query-object">{bp}</StyledDiv>
    </>
  );
};
StoryUseMediaQueryObject.storyName = 'useMediaQueryObject';
StoryUseMediaQueryObject.parameters = {
  eyes: {include: false},
};

export default {
  title: 'Utilities/useMediaQueryObject',
  component: () => 'useMediaQueryObject',
  parameters: {
    nkDocs: {
      title: 'Hooks',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useMediaQueryObject hook handles scenarios in which you want to render component based on media query breakpoints.',
    },
  },
};
