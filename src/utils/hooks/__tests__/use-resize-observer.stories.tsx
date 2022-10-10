import * as React from 'react';
import {useResizeObserver} from '../index';

import {StorybookSubHeading} from '../../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../style';

const StyledDiv = styled.div`
  padding: 10px;
  ${getColorCssFromTheme('color', 'inkBase')};
  ${getColorCssFromTheme('borderColor', 'black')};
  border: 1px solid;
  resize: both;
  overflow: auto;
`;

export default {
  title: 'Utilities/useResizeObserver',
  component: () => 'None',
};

export const StoryUseResizeObserver = () => {
  const [, setDimensions] = React.useState({top: 0, left: 0});
  const ref = React.useRef<HTMLDivElement>(null);

  // Optional callback to access the full DOMRect object if required.
  const optionalCallback = (entry: DOMRectReadOnly) =>
    setDimensions({top: entry.x, left: entry.left});

  // Access the width and the height returned from the observed element.
  const [width, height] = useResizeObserver(ref, optionalCallback);
  return (
    <>
      <StorybookSubHeading>useResizeObserver</StorybookSubHeading>
      <StyledDiv ref={ref}>
        {width} x {height}
      </StyledDiv>
    </>
  );
};
StoryUseResizeObserver.storyName = 'useResizeObserver';
StoryUseResizeObserver.parameters = {
  eyes: {include: false},
};
