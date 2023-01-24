import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Layer as UnstyledLayer, LayerOrganizer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../utils/style';

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
    <StorybookHeading>Basic layer</StorybookHeading>
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
    <StorybookHeading>Nested layers</StorybookHeading>
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
      <StorybookHeading>append layer to custom parent</StorybookHeading>
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
      <StorybookHeading>Append nested layers to custom parent</StorybookHeading>
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

const Wrapper = styled.div<{
  width?: string;
  height?: string;
  border?: string;
  color?: string;
  offset?: string;
}>`
  box-sizing: border-box;
  position: fixed;
  top: ${({offset}) => offset || '0%'};
  left: ${({offset}) => offset || '0%'};
  width: 300px;
  heigh: 200px;
  padding: 20px;
  ${({color = 'transparent', ...props}) =>
    getColorCssFromTheme('background', color)(props)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoryBasicLayerOrganizer = () => (
  <>
    <StorybookHeading>basic layer organizer</StorybookHeading>
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
    <StorybookHeading>basic layer organizer zIndex</StorybookHeading>
    <Box width="300px" height="200px" border="black">
      This is is the main content
    </Box>
    <Layer>
      <Wrapper offset="20%" color="amber040">
        A
      </Wrapper>
    </Layer>
    <LayerOrganizer zIndex={100}>
      <Layer>
        <Wrapper offset="22%" color="red040">
          B1
        </Wrapper>
      </Layer>
      <Layer>
        <Wrapper offset="24%" color="teal040">
          B2 should be on top
        </Wrapper>
      </Layer>
    </LayerOrganizer>
    <Layer>
      <Wrapper offset="26%" color="green040">
        C
      </Wrapper>
    </Layer>
  </>
);
StoryBasicLayerOrganizerZindex.storyName = 'basic layer organizer zindex';

export const StoryNestedLayerOrganizerZindex = () => (
  <>
    <StorybookHeading>nested layer organizer zIndex</StorybookHeading>
    <Box width="300px" height="200px" border="black">
      This is is the main content
    </Box>
    <Layer>
      <Wrapper offset="20%" color="amber040">
        A
      </Wrapper>
    </Layer>
    <LayerOrganizer zIndex={1}>
      <LayerOrganizer zIndex={1}>
        <Layer>
          <Wrapper offset="22%" color="red040">
            B1 should be on top
          </Wrapper>
        </Layer>
      </LayerOrganizer>
      <Layer>
        <Wrapper offset="24%" color="teal040">
          B2
        </Wrapper>
      </Layer>
    </LayerOrganizer>
    <Layer>
      <Wrapper offset="26%" color="green040">
        C
      </Wrapper>
    </Layer>
  </>
);
StoryNestedLayerOrganizerZindex.storyName = 'nested layer organizer zindex';

export default {
  title: 'Components/Layer',
  component: Layer,
  disabledRules: ['color-contrast'],
  parameters: {
    nkDocs: {
      title: 'Layer',
      url: 'https://newskit.co.uk/components/layer',
      description:
        'Layers allow for the stacking of components and other elements, giving control over how they interact together and appear to users.',
    },
  },
  decorators: [(Story: StoryType) => <Story />],
};
