import * as React from 'react';
import {useMediaQueryObject} from '../index';

import {StorybookHeading} from '../../../../test/storybook-comps';
import {MQ} from '../../../style/types';
import {getColorCssFromTheme, styled} from '../../../style';

const StyledDiv = styled.div`
  border: 2px solid;
  ${getColorCssFromTheme('borderColor', 'black')};
  ${getColorCssFromTheme('color', 'inkBase')};
  font-weight: bold;
  text-align: center;
  background: orange;
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
      <StorybookHeading>useMediaQueryObject</StorybookHeading>
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
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'useMediaQueryObject',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useMediaQueryObject hook handles scenarios in which you want to render component based on media query breakpoints.',
    },
  },
};
