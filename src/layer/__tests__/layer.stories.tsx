import * as React from 'react';
import {Layer as UnstyledLayer, LayerOrganizer} from '..';
// import {
//   StorybookHeading,
//   StorybookSubHeading,
// } from '../../test/storybook-comps';
// import {createTheme, ThemeProvider} from '../../theme';
import {getColorCssFromTheme, styled} from '../../utils/style';

export default {
  title: 'NewsKit Light/layer',
  component: () => 'None',
};

const Layer = styled(UnstyledLayer)<{color?: string}>`
  border: 1px dotted;
  ${({color = 'gray', ...props}) =>
    getColorCssFromTheme('borderColor', color)(props)};
`;

const Box = styled.div<{
  width?: string;
  height?: string;
  border?: string;
  background?: string;
}>`
  box-sizing: border-box;
  border: ${({border}) => `1px solid ${border || 'transparent'}`};
  background: ${({background}) => background || 'transparent'};
  height: ${({height}) => height || '100px'};
  width: ${({width}) => width || '100px'};
  padding: 4px;
`;

export const StoryBasicLayer = () => (
  <>
    {/* <StorybookHeading>Byline</StorybookHeading> */}
    <Box width="300px" height="200px" border="black">
      <p>This is is the main content</p>
      <Layer color="purple040">
        <Box>Layer outside of main content</Box>
      </Layer>
      <Layer color="purple040">
        <Box>Layer outside of main content</Box>
      </Layer>
    </Box>
  </>
);
StoryBasicLayer.storyName = 'basic layer';

export const StoryNestedLayer = () => (
  <>
    {/* <StorybookHeading>Byline</StorybookHeading> */}
    <Box width="300px" height="200px" border="black">
      <p>This is is the main content</p>
      <Layer color="teal040">
        <Box width="300px" height="200px">
          Layer 1
        </Box>
        <Layer color="purple040">
          <Box>Layer 1-1</Box>
        </Layer>
        <Layer color="purple040">
          <Box>Layer 1-2</Box>
          <Layer color="amber040">
            <Box>Layer 1-2-1</Box>
          </Layer>
        </Layer>
      </Layer>
    </Box>
  </>
);
StoryNestedLayer.storyName = 'nested layer';

export const StoryAppendLayerToCustomParentStory = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <>
      {/* <StorybookHeading>Byline</StorybookHeading> */}
      <p>Welcome</p>
      <Box width="300px" height="300px" border="black" ref={ref}>
        This is the parent div
      </Box>
      <Layer appendToRef={ref} color="purple040">
        <Box>Child layer A</Box>
      </Layer>
      <Layer appendToRef={ref} color="purple040">
        <Box>Child layer B</Box>
      </Layer>
    </>
  );
};
StoryAppendLayerToCustomParentStory.storyName = 'append-layer-to-custom-parent';

export const StoryAppendNestedLayerToCustomParentStory = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      {/* <StorybookHeading>Byline</StorybookHeading> */}
      <p>Welcome</p>
      <Box width="300px" height="300px" border="black" ref={ref}>
        This is the parent div
      </Box>
      <Layer color="teal040">
        <Box>A and B boxes sit below this box in the code</Box>
        <Layer appendToRef={ref} color="purple040">
          <Box>Child layer A</Box>
        </Layer>
        <Layer appendToRef={ref} color="purple040">
          <Box>Child layer B</Box>
        </Layer>
      </Layer>
    </>
  );
};
StoryAppendNestedLayerToCustomParentStory.storyName =
  'append-nested-layers-to-custom-parent';

export const StoryTestingLayerPowers = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <p>Welcome</p>
      <Box width="300px" height="300px" border="black" ref={ref}>
        This is the parent div
      </Box>

      <Layer appendToRef={ref} color="purple040">
        <div className="inside-layer">
          Parent Layer
          <Layer color="amber040">Child Layer</Layer>
        </div>
      </Layer>
    </>
  );
};
StoryTestingLayerPowers.storyName = 'testing-layer-powers';

export const StoryBasicLayerOrganizer = () => (
  <>
    {/* <StorybookHeading>Byline</StorybookHeading> */}
    <Box width="300px" height="200px" border="black">
      <p>This is is the main content</p>
      <Layer color="purple040">
        <Box>Layer outside of main content</Box>
      </Layer>
      <LayerOrganizer>
        <Layer color="purple040">
          <Box>Layer outside of main content</Box>
        </Layer>
      </LayerOrganizer>
    </Box>
  </>
);
StoryBasicLayerOrganizer.storyName = 'basic layer organizer';

export const StoryBasicLayerOrganizerZindex = () => (
  <>
    {/* <StorybookHeading>Byline</StorybookHeading> */}
    <Box width="300px" height="200px" border="black">
      <p>This is is the main content</p>
      <Layer color="purple040">
        <Box>Layer outside of main content</Box>
      </Layer>
      <LayerOrganizer zIndex={3}>
        <Layer color="purple040">
          <Box>Layer outside of main content</Box>
        </Layer>
      </LayerOrganizer>
    </Box>
  </>
);
StoryBasicLayerOrganizerZindex.storyName = 'basic layer organizer zindex';
