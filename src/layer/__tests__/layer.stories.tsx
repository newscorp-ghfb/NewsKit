import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Layer, LayerOrganizer} from '..';
import {
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
  styled,
} from '../../utils/style';
import {TextBlock} from '../../text-block';

const Box = styled.div<{
  height?: string;
}>`
  box-sizing: border-box;
  border: solid 1px;
  ${getColorCssFromTheme('borderColor', 'interfaceBrand010')};
  height: ${({height}) => height || '100px'};
  padding: 20px;
`;

const ColorBlock = styled.div<{
  color?: string;
  height?: string;
}>`
  ${({color}) =>
    getColorCssFromTheme('backgroundColor', color || 'transparent')}
  ${getColorCssFromTheme('color', 'inkBase')};
  ${getTypographyPresetFromTheme('utilityBody020')}
  height: ${({height}) => height || '80px'};
  border: solid 1px;
  ${getColorCssFromTheme('borderColor', 'interfaceBrand010')};
  margin-bottom: 24px;
  padding: 20px;
`;

export const StoryLayerDefault = () => (
  <>
    <Box>
      <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
        Basic layer content
      </TextBlock>
    </Box>
    <Layer>Layer outside of main content</Layer>
  </>
);
StoryLayerDefault.storyName = 'Default';
StoryLayerDefault.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

export const StoryNestedLayer = () => (
  <>
    <Box>
      <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
        Nested Layer
      </TextBlock>
    </Box>
    <Layer>
      <div>Layer 1</div>
      <Layer>
        <div>Layer 1-1</div>
      </Layer>
      <Layer>
        <div>Layer 1-2</div>
        <Layer>
          <div>Layer 1-2-1</div>
        </Layer>
      </Layer>
    </Layer>
  </>
);
StoryNestedLayer.storyName = 'Nested layer';
StoryNestedLayer.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

export const StoryAppendLayerToCustomParentStory = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Box height="350px" ref={ref}>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="utilityBody020"
          marginBlockEnd="space040"
          ref={ref}
        >
          This is the parent div
        </TextBlock>
      </Box>
      <Layer appendToRef={ref}>
        <ColorBlock color="red010">Child layer A</ColorBlock>
      </Layer>
      <Layer appendToRef={ref}>
        <ColorBlock color="teal010">Child layer B</ColorBlock>
      </Layer>
    </>
  );
};
StoryAppendLayerToCustomParentStory.storyName = 'Append-layer-to-custom-parent';
StoryAppendLayerToCustomParentStory.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

export const StoryAppendNestedLayerToCustomParentStory = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Box height="350px" ref={ref}>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="utilityBody020"
          marginBlockEnd="space040"
        >
          This is the parent div
        </TextBlock>
      </Box>
      <Layer>
        <div>A and B boxes sit below this box in the code</div>
        <Layer appendToRef={ref}>
          <ColorBlock color="red010">Child layer A</ColorBlock>
        </Layer>
        <Layer appendToRef={ref}>
          <ColorBlock color="teal010">Child layer B</ColorBlock>
        </Layer>
      </Layer>
    </>
  );
};
StoryAppendNestedLayerToCustomParentStory.storyName =
  'Append-nested-layers-to-custom-parent';
StoryAppendNestedLayerToCustomParentStory.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

export const StoryMultipleLayers = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Box height="350px" ref={ref}>
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="utilityBody020"
          marginBlockEnd="space040"
        >
          This is the parent div
        </TextBlock>
      </Box>
      <Layer appendToRef={ref}>
        <ColorBlock color="blue010">
          Parent Layer
          <Layer>
            <ColorBlock>Child Layer</ColorBlock>
          </Layer>
        </ColorBlock>
      </Layer>
    </>
  );
};
StoryMultipleLayers.storyName = 'Multiple-layers';
StoryMultipleLayers.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

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
    <Box>
      <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
        Basic layer content
      </TextBlock>
    </Box>
    <Layer>Layer outside of layer organizer sibling</Layer>
    <LayerOrganizer>
      <Layer>Layer inside layer organizer</Layer>
    </LayerOrganizer>
  </>
);
StoryBasicLayerOrganizer.storyName = 'Basic layer organizer';
StoryBasicLayerOrganizer.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

export const StoryBasicLayerOrganizerZindex = () => (
  <>
    <Box height="350px">
      <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
        Basic layer content
      </TextBlock>
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
StoryBasicLayerOrganizerZindex.storyName = 'Basic layer organizer zindex';
StoryBasicLayerOrganizerZindex.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

export const StoryNestedLayerOrganizerZindex = () => (
  <>
    <Box height="350px">
      <TextBlock stylePreset="inkBase" typographyPreset="utilityBody020">
        Basic layer content
      </TextBlock>
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
StoryNestedLayerOrganizerZindex.storyName = 'Nested layer organizer zindex';
StoryNestedLayerOrganizerZindex.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

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
