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
  const small = useMediaQuery('screen and (max-width : 767px)');
  const medium = useMediaQuery(
    'screen and (min-width : 768px) and (max-width : 1023px)',
  );
  const large = useMediaQuery(
    'screen and (min-width : 1024px) and (max-width : 1439px)',
  );
  const extraLarge = useMediaQuery('screen and (min-width : 1440px)');

  return (
    <div data-testid="use-media-query">
      Resize your browser windows to see changes.
      <br />
      <br />
      <StyledDiv>sm: {small ? 'yes' : 'no'}</StyledDiv>
      <StyledDiv>md: {medium ? 'yes' : 'no'}</StyledDiv>
      <StyledDiv>lg: {large ? 'yes' : 'no'}</StyledDiv>
      <StyledDiv>xl: {extraLarge ? 'yes' : 'no'}</StyledDiv>
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
  title: 'Components/use-media-query-hook',
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
