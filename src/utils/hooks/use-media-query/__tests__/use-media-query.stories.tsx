import * as React from 'react';
import {useMediaQuery} from '../index';

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
