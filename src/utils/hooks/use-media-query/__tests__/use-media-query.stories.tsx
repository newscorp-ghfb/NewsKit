/* eslint-disable no-nested-ternary */
import * as React from 'react';
import {useMediaQueryObject, useBreakpointKey, useMediaQuery} from '../index';

import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../../../test/storybook-comps';
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
const ComponentMediaQuery = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 768px) and (max-width : 1023px)',
  );
  const isLargeDevice = useMediaQuery(
    'only screen and (min-width : 1024px) and (max-width : 1439px)',
  );
  const isExtraLargeDevice = useMediaQuery(
    'only screen and (min-width : 1440px)',
  );

  return (
    <div>
      Resize your browser windows to see changes.
      <br />
      <br />
      <StyledDiv>
        Small device (max-width : 767px): {}
        {isSmallDevice === undefined ? 'unknown' : isSmallDevice ? 'yes' : 'no'}
      </StyledDiv>
      <StyledDiv>
        Medium device (max-width : 1023px): {}
        {isMediumDevice === undefined
          ? 'unknown'
          : isMediumDevice
          ? 'yes'
          : 'no'}
      </StyledDiv>
      <StyledDiv>
        Large device (max-width : 1439px): {}
        {isLargeDevice === undefined ? 'unknown' : isLargeDevice ? 'yes' : 'no'}
      </StyledDiv>
      <StyledDiv>
        Extra large device (min-width : 1440px): {}
        {isExtraLargeDevice === undefined
          ? 'unknown'
          : isExtraLargeDevice
          ? 'yes'
          : 'no'}
      </StyledDiv>
    </div>
  );
};

const ComponentMediaQueryObject = ({mq}: {mq: MQ<string>}) => {
  const bp = useMediaQueryObject(mq);
  return <StyledDiv data-testid="use-media-query-object">{bp}</StyledDiv>;
};

const ComponentBreakpoint = () => {
  const bp = useBreakpointKey();

  return <StyledDiv data-testid="use-breakpoint">{bp || 'unknown'}</StyledDiv>;
};

export default {
  title: 'NewsKit Light/use-media-query-hook',
  component: () => 'None',
};

export const StoryUseMediaQueryHook = () => (
  <>
    <StorybookHeading>useMediaQueryHooks </StorybookHeading>
    <StorybookSubHeading>useMediaQuery</StorybookSubHeading>
    <ComponentMediaQuery />
    <StorybookSubHeading>useMediaQueryObject</StorybookSubHeading>
    <ComponentMediaQueryObject
      mq={{
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
      }}
    />
    <StorybookSubHeading>useBreakpointKey</StorybookSubHeading>
    <ComponentBreakpoint />
  </>
);
StoryUseMediaQueryHook.storyName = 'use-media-query-hook';
StoryUseMediaQueryHook.parameters = {
  eyes: {include: false},
};
