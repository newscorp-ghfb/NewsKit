import React from 'react';
import {StatefulVolumeControl} from './stateful-volume-control';
import {styled} from '../../utils/style';
import {ButtonSize} from '../../button';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-slider-theme',
  overrides: {
    stylePresets: {
      customTrackStylePreset: {
        base: {
          backgroundColor: 'red',
          borderColor: 'blue',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
      customIndicatorStylePreset: {
        base: {
          backgroundColor: 'yellow',
        },
      },
      customThumbStylePreset: {
        base: {
          backgroundColor: 'green',
          borderColor: 'black',
          borderWidth: '2px',
          borderStyle: 'solid',
        },
      },
      customThumbLabelStylePreset: {
        base: {
          borderColor: 'black',
          borderWidth: '1px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          color: 'green',
        },
      },
      customLabelStylePreset: {
        base: {
          borderColor: 'purple',
          borderWidth: '2px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          color: 'purple',
        },
      },
      customButtonStylePreset: {
        base: {
          borderColor: 'purple',
          borderWidth: '2px',
          borderRadius: '999px',
          borderStyle: 'dashed',
          iconColor: 'purple',
          backgroundColor: '{{colors.interface010}}',
        },
      },
    },
  },
});

const HorizontalContainer = styled.div`
  display: inline-flex;
  border: solid 1px red;
  margin: 0 24px;
  width: 250px;
`;

const VerticalContainer = styled.div`
  display: inline-flex;
  border: solid 1px red;
  margin: 24px 0;
  height: 250px;
`;

export default {
  title: 'NewsKit Light/volume-control',
  component: () => 'None',
};

export const StoryVolumeControl = () => (
  <React.Fragment>
    <StorybookHeading>VolumeControl</StorybookHeading>
    <StorybookSubHeading>horizontal</StorybookSubHeading>
    <HorizontalContainer>
      <StatefulVolumeControl volume={1} />
    </HorizontalContainer>
    <HorizontalContainer>
      <StatefulVolumeControl volume={0.5} />
    </HorizontalContainer>
    <HorizontalContainer>
      <StatefulVolumeControl volume={0} />
    </HorizontalContainer>
    <br />
    <StorybookSubHeading>vertical</StorybookSubHeading>
    <VerticalContainer>
      <StatefulVolumeControl vertical volume={1} />
    </VerticalContainer>
    <VerticalContainer>
      <StatefulVolumeControl vertical volume={0.5} />
    </VerticalContainer>
    <VerticalContainer>
      <StatefulVolumeControl vertical volume={0} />
    </VerticalContainer>
  </React.Fragment>
);
StoryVolumeControl.storyName = 'volume-control';

export const StoryVolumeControlWithOverrides = () => (
  <React.Fragment>
    <StorybookHeading>VolumeControl with overrides</StorybookHeading>
    <VerticalContainer>
      <ThemeProvider theme={myCustomTheme}>
        <StatefulVolumeControl
          vertical
          volume={0.5}
          overrides={{
            slider: {
              track: {
                stylePreset: 'customTrackStylePreset',
                size: 'sizing020',
              },
              indicator: {
                stylePreset: 'customIndicatorStylePreset',
              },
              thumb: {
                stylePreset: 'customThumbStylePreset',
                size: 'sizing040',
              },
              labels: {
                stylePreset: 'customLabelStylePreset',
                space: 'spacing060',
              },
              thumbLabel: {
                stylePreset: 'customThumbLabelStylePreset',
              },
            },
            button: {
              stylePreset: 'customButtonStylePreset',
              iconSize: 'iconSize020',
              size: ButtonSize.Small,
            },
          }}
        />
      </ThemeProvider>
    </VerticalContainer>
  </React.Fragment>
);
StoryVolumeControlWithOverrides.storyName = 'volume-control-with-overrides';
