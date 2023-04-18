import React from 'react';

import {StatefulSlider} from '..';
import {styled} from '../../utils/style';
import {ThumbLabelProps, SliderProps} from '../types';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookCase,
  StorybookPage,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {IconOutlinedImage} from '../../icons';
import {withDefaultProps} from '../../utils/with-default-props';

const myCustomTheme = createTheme({
  name: 'my-custom-slider-theme',
  overrides: {
    stylePresets: {
      customTrackStylePreset: {
        base: {
          backgroundColor: 'red',
          borderColor: 'blue',
          borderWidth: '5px',
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
          borderWidth: '5px',
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
          textAlign: 'center',
          whiteSpace: 'nowrap',
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
      customFeedback: {
        base: {
          backgroundColor: '{{colors.red060}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          opacity: '{{overlays.opacity000}}',
        },
        hover: {
          opacity: '{{overlays.opacity020}}',
        },
      },
      customPlaceholderIcon: {
        base: {
          iconColor: '{{colors.inkNonEssential}}',
        },
      },
      customOutlineColor: {
        base: {
          boxShadow: '{{shadows.shadow010}}',
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary010}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          boxShadow: '{{shadows.shadow010}}',
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary010}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          boxShadow: '{{shadows.shadow010}}',
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary010}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          boxShadow: '{{shadows.shadow010}}',
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary010}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
});

const CustomTrack = styled.div`
  width: 100%;
  height: 32px;
  background-image: linear-gradient(red, yellow);
`;
const renderCustomTrack: SliderProps['renderTrack'] = ({props, children}) => (
  <CustomTrack {...props}>{children}</CustomTrack>
);

const CustomThumb = styled.div`
  height: 40px;
  padding: 4px;
  border-radius: 50% 0 50% 0;
  background: black;
  border: dashed 2px yellow;
`;

const renderCustomThumb: SliderProps['renderThumb'] = ({props}) => (
  <CustomThumb {...props} aria-label="custom slider thumb">
    <IconOutlinedImage
      overrides={{size: 'iconSize030', stylePreset: 'customPlaceholderIcon'}}
    />
  </CustomThumb>
);

const Svg = styled.svg`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;

const CustomMinLabel: React.FC = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" />
  </Svg>
);

// eslint-disable-next-line react/prefer-stateless-function
class CustomMaxLabel extends React.Component {
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
      </Svg>
    );
  }
}

const FlexContainer = styled.div`
  margin: 48px 0;
  display: flex;
  flex-wrap: wrap;
`;

const ContainerWithBorder = styled.div`
  margin: 48px 0;
  display: flex;
`;

type FlexContainerWithBorderType = {
  direction?: 'vertical' | 'horizontal';
  children: React.ReactNode;
};

const FlexContainerWithBorder = styled.div<FlexContainerWithBorderType>`
  display: inline-flex;
  height: 124px;
  margin: 0 24px;
  ${({direction}) =>
    direction === 'vertical' ? 'height: 124px' : 'width: 185px'}}
`;

const VerticalContainerWithBorder = (props: FlexContainerWithBorderType) => (
  <FlexContainerWithBorder direction="vertical" {...props} />
);
const HorizontalContainerWithBorder = (props: FlexContainerWithBorderType) => (
  <FlexContainerWithBorder direction="horizontal" {...props} />
);

const StyledCustomThumbLabel = styled.h1`
  margin: 0;
  font-family: Arial;
  color: seagreen;
  bottom: -35px;
  position: relative;
`;
const CustomThumbLabel: React.FC<ThumbLabelProps> = ({children, ...props}) => (
  <StyledCustomThumbLabel {...props}>{`${children}%`}</StyledCustomThumbLabel>
);

export default {
  title: 'Components/Slider',
  component: () => 'None',
};
export const StorySliderDefault = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <StorybookCase>
      <StatefulSlider values={[50]} max={100} min={0} />
    </StorybookCase>
  </StorybookPage>
);
StorySliderDefault.storyName = 'Default';
StorySliderDefault.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySlider1And2Thumbs = () => (
  <>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Single thumb">
        <StatefulSlider values={[50]} max={100} min={0} />
      </StorybookCase>
      <StorybookCase title="Two thumb">
        <StatefulSlider values={[30, 60]} max={100} min={0} />
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Single thumb">
        <VerticalContainerWithBorder>
          <StatefulSlider values={[20]} max={50} min={0} vertical />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Two thumb">
        <VerticalContainerWithBorder>
          <StatefulSlider values={[0, 50]} max={50} min={0} vertical />
        </VerticalContainerWithBorder>
      </StorybookCase>
    </StorybookPage>
  </>
);
StorySlider1And2Thumbs.storyName = 'Multiple thumbs';
StorySlider1And2Thumbs.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithTextLabels = () => (
  <>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Two thumb">
        <StatefulSlider values={[10]} max={20} min={0} minLabel="0" />
      </StorybookCase>
      <StorybookCase title="Two thumb">
        <StatefulSlider values={[10]} max={20} min={0} maxLabel="100%" />
      </StorybookCase>
      <StorybookCase title="Two thumb">
        <StatefulSlider
          values={[10]}
          max={20}
          min={0}
          minLabel="0"
          maxLabel="100%"
        />
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Label posotion above thumb">
        <StatefulSlider
          values={[30]}
          max={40}
          min={0}
          minLabel="0"
          maxLabel="40"
          thumbLabel
        />
      </StorybookCase>
      <StorybookCase title="Label posotion before">
        <StatefulSlider
          values={[150]}
          max={200}
          min={100}
          minLabel="100"
          maxLabel="200"
          labelPosition="before"
        />
      </StorybookCase>
      <StorybookCase title="Label posotion after">
        <StatefulSlider
          values={[150]}
          max={200}
          min={100}
          minLabel="100"
          maxLabel="200"
          labelPosition="after"
        />
      </StorybookCase>
    </StorybookPage>
  </>
);
StorySliderWithTextLabels.storyName = 'Horizontal slider with labels';
StorySliderWithTextLabels.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithVerticalTextLabels = () => (
  <>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Two thumb">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[10]}
            max={20}
            min={0}
            minLabel="0"
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Two thumb">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[10]}
            max={20}
            min={0}
            maxLabel="100%"
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Two thumb">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[10]}
            max={20}
            min={0}
            minLabel="0"
            maxLabel="100%"
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Label posotion above thumb">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[30]}
            max={40}
            min={0}
            minLabel="0"
            maxLabel="40"
            thumbLabel
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Label posotion before">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[150]}
            max={200}
            min={100}
            minLabel="100"
            maxLabel="200"
            labelPosition="before"
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Label posotion after">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[150]}
            max={200}
            min={100}
            minLabel="100"
            maxLabel="200"
            labelPosition="after"
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
    </StorybookPage>
  </>
);
StorySliderWithVerticalTextLabels.storyName = 'Vertical slider with labels';
StorySliderWithVerticalTextLabels.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithCustomLabels = () => (
  <>
    <StorybookHeading>Slider with custom labels</StorybookHeading>
    <ContainerWithBorder>
      <StatefulSlider
        values={[40]}
        max={50}
        min={0}
        minLabel={CustomMinLabel}
      />
    </ContainerWithBorder>
    <ContainerWithBorder>
      <StatefulSlider
        values={[60]}
        max={70}
        min={0}
        maxLabel={CustomMaxLabel}
      />
    </ContainerWithBorder>
    <ContainerWithBorder>
      <StatefulSlider
        values={[33]}
        max={80}
        min={0}
        minLabel={CustomMinLabel}
        maxLabel={CustomMaxLabel}
        thumbLabel={CustomThumbLabel}
      />
    </ContainerWithBorder>
    <ContainerWithBorder>
      <StatefulSlider
        values={[40, 90]}
        max={100}
        min={0}
        minLabel={CustomMinLabel}
        maxLabel={CustomMaxLabel}
        thumbLabel={CustomThumbLabel}
      />
    </ContainerWithBorder>
  </>
);
StorySliderWithCustomLabels.storyName = 'slider-with-custom-labels';
StorySliderWithCustomLabels.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithCustomStylePreset = () => (
  <>
    <StorybookHeading>Slider with custom style presets</StorybookHeading>
    <ContainerWithBorder>
      <ThemeProvider theme={myCustomTheme}>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0"
          maxLabel="100%"
          thumbLabel
          overrides={{
            track: {
              stylePreset: 'customTrackStylePreset',
              size: 'sizing050',
            },
            indicator: {
              stylePreset: 'customIndicatorStylePreset',
            },
            thumb: {
              stylePreset: 'customThumbStylePreset',
              size: 'sizing070',
            },
            thumbLabel: {
              stylePreset: 'customThumbLabelStylePreset',
              typographyPreset: 'utilityLabel020',
              space: 'space060',
            },
            labels: {
              stylePreset: 'customLabelStylePreset',
              typographyPreset: 'utilityLabel030',
              space: 'space040',
            },
            feedback: {
              size: 'sizing090',
              stylePreset: 'customFeedback',
            },
          }}
        />
      </ThemeProvider>
    </ContainerWithBorder>
  </>
);
StorySliderWithCustomStylePreset.storyName = 'slider-with-custom-style-preset';
StorySliderWithCustomStylePreset.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithCustomRenders = () => (
  <>
    <StorybookHeading>Slider with custom renderers</StorybookHeading>
    <ContainerWithBorder>
      <ThemeProvider theme={myCustomTheme}>
        <StatefulSlider
          values={[40]}
          max={100}
          min={0}
          renderTrack={renderCustomTrack}
        />
      </ThemeProvider>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <ThemeProvider theme={myCustomTheme}>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          renderThumb={renderCustomThumb}
        />
      </ThemeProvider>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <ThemeProvider theme={myCustomTheme}>
        <StatefulSlider
          values={[60]}
          max={100}
          min={0}
          renderTrack={renderCustomTrack}
          renderThumb={renderCustomThumb}
        />
      </ThemeProvider>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <ThemeProvider theme={myCustomTheme}>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          thumbIcon={withDefaultProps(IconOutlinedImage, {
            overrides: {size: 'iconSize030'},
          })}
        />
      </ThemeProvider>
    </ContainerWithBorder>
  </>
);
StorySliderWithCustomRenders.storyName = 'slider-with-custom-renders';
StorySliderWithCustomRenders.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderRendersVertical = () => (
  <>
    <StorybookHeading>Vertical Slider examples</StorybookHeading>
    <FlexContainer>
      <VerticalContainerWithBorder>
        <StatefulSlider values={[20]} max={50} min={0} vertical />
      </VerticalContainerWithBorder>
      <VerticalContainerWithBorder>
        <StatefulSlider values={[0, 50]} max={50} min={0} vertical />
      </VerticalContainerWithBorder>
      <VerticalContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0"
          maxLabel="%"
          vertical
          thumbLabel
        />
      </VerticalContainerWithBorder>
      <VerticalContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0%"
          maxLabel="100%"
          vertical
          thumbLabel
        />
      </VerticalContainerWithBorder>
      <VerticalContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel={CustomMinLabel}
          maxLabel={CustomMaxLabel}
          vertical
        />
      </VerticalContainerWithBorder>
      <VerticalContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel={CustomMinLabel}
          maxLabel={CustomMaxLabel}
          thumbLabel={CustomThumbLabel}
          vertical
        />
      </VerticalContainerWithBorder>
    </FlexContainer>
  </>
);
StorySliderRendersVertical.storyName = 'slider-renders-vertical';
StorySliderRendersVertical.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithLabelsBeforeAndAfter = () => (
  <>
    <StorybookHeading>
      Vertical Slider with labels before and after
    </StorybookHeading>
    <FlexContainer>
      <VerticalContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0%"
          maxLabel="100%"
          vertical
          thumbLabel
          labelPosition="before"
        />
      </VerticalContainerWithBorder>
      <VerticalContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0%"
          maxLabel="100%"
          vertical
          thumbLabel
          labelPosition="after"
        />
      </VerticalContainerWithBorder>
      <HorizontalContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0%"
          maxLabel="100%"
          thumbLabel
          labelPosition="after"
        />
      </HorizontalContainerWithBorder>
    </FlexContainer>
  </>
);
StorySliderWithLabelsBeforeAndAfter.storyName =
  'slider-with-labels-before-and-after';
StorySliderWithLabelsBeforeAndAfter.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderLogicalProps = () => (
  <>
    <StorybookHeading>Padding logical props</StorybookHeading>
    <ContainerWithBorder>
      <StatefulSlider
        values={[50]}
        max={100}
        min={0}
        overrides={{paddingInline: '20px', paddingBlock: '50px'}}
      />
    </ContainerWithBorder>
    <StorybookHeading>Margin logical props</StorybookHeading>
    <ContainerWithBorder>
      <StatefulSlider
        values={[50]}
        max={100}
        min={0}
        overrides={{marginInline: '20px', marginBlock: '50px'}}
      />
    </ContainerWithBorder>
  </>
);
StorySliderLogicalProps.storyName = 'slider-logical-props';
StorySliderLogicalProps.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithOutlineOverride = () => (
  <>
    <StorybookHeading>Slider with custom outline override</StorybookHeading>
    <ThemeProvider theme={myCustomTheme}>
      <StorybookSubHeading>Custom Color</StorybookSubHeading>
      <ContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0"
          maxLabel="100%"
          thumbLabel
          overrides={{
            thumb: {
              stylePreset: 'customOutlineColor',
            },
          }}
        />
      </ContainerWithBorder>
      <StorybookSubHeading>Custom Style</StorybookSubHeading>
      <ContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0"
          maxLabel="100%"
          thumbLabel
          overrides={{
            thumb: {
              stylePreset: 'customOutlineStyle',
            },
          }}
        />
      </ContainerWithBorder>
      <StorybookSubHeading>Custom Width</StorybookSubHeading>
      <ContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0"
          maxLabel="100%"
          thumbLabel
          overrides={{
            thumb: {
              stylePreset: 'customOutlineWidth',
            },
          }}
        />
      </ContainerWithBorder>
      <StorybookSubHeading>Custom Offset</StorybookSubHeading>
      <ContainerWithBorder>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="0"
          maxLabel="100%"
          thumbLabel
          overrides={{
            thumb: {
              stylePreset: 'customOutlineOffset',
            },
          }}
        />
      </ContainerWithBorder>
    </ThemeProvider>
  </>
);
StorySliderWithOutlineOverride.storyName = 'slider-with-custom-outline';
StorySliderWithOutlineOverride.parameters = {
  percy: {
    enableJavaScript: true,
  },
};
