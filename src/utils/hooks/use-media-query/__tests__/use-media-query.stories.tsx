import * as React from 'react';
import {useMediaQueryObject, useBreakpointKey, useMediaQuery} from '../index';

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

export default {
  title: 'Utilities/useMediaQuery',
  component: () => 'None',
};

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
      <div data-testid="use-media-query">
        Resize your browser windows to see changes.
        <br />
        <br />
        <StyledDiv>sm: {small ? 'yes' : 'no'}</StyledDiv>
        <StyledDiv>md: {medium ? 'yes' : 'no'}</StyledDiv>
        <StyledDiv>lg: {large ? 'yes' : 'no'}</StyledDiv>
        <StyledDiv>xl: {extraLarge ? 'yes' : 'no'}</StyledDiv>
      </div>
    </>
  );
};
StoryUseMediaQuery.storyName = 'useMediaQuery';
StoryUseMediaQuery.parameters = {
  eyes: {include: false},
};

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
