import * as React from 'react';
import {useMediaQueryObject, useBreakpointKey} from '../index';
import {StorybookHeading} from '../../../../test/storybook-comps';
import {MQ} from '../../../style/types';
import {styled} from '../../../style';

const StyledDiv = styled.div`
  border: 2px solid black;
  color: #fff;
  font-weight: bold;
  text-align: center;
  background: orange;
`;

export default {
  title: 'Utilities/Hooks',
  component: () => 'None',
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
  percy: {skip: true},
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
  percy: {skip: true},
};
