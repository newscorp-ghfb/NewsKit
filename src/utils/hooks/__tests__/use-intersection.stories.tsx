import * as React from 'react';
import {useIntersection} from '../index';

import {StorybookSubHeading} from '../../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../style';

export default {
  title: 'Utilities/useIntersection',
  component: () => 'None',
};

const StyledDiv = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'inkBase')};
  ${getColorCssFromTheme('color', 'inkBase')};
`;

const Section = ({title}: {title: string}) => {
  const [ref, isIntersected] = useIntersection({rootMargin: '120px'});

  const isVisible = isIntersected;

  console.log(`Render Section ${title}`, {isVisible});

  return <StyledDiv ref={ref}>{title}</StyledDiv>;
};

export const StoryUseIntersection = () => (
  <>
    <StorybookSubHeading>useInteraction</StorybookSubHeading>
    <StorybookSubHeading>Check console</StorybookSubHeading>
    <>
      {Array.from({length: 5}).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Section key={index + 1} title={`${index + 1}`} />
      ))}
    </>
  </>
);
StoryUseIntersection.storyName = 'useIntersection';
StoryUseIntersection.parameters = {
  eyes: {include: false},
};
