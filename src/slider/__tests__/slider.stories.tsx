import React from 'react';

import {Story as StoryType} from '@storybook/react';
import {StatefulSlider} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {
  StorybookCase,
  StorybookPage,
  StorybookHeading,
} from '../../test/storybook-comps';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {IconFilledAddCircleOutline, IconFilledRemove} from '../../icons';

const sliderCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-slider-theme',
  overrides: {
    stylePresets: {
      customTrackStylePreset: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          borderRadius: '999px',
        },
      },
      customIndicatorStylePreset: {
        base: {
          backgroundColor: '{{colors.inkBrand010}}',
        },
      },
      customThumbStylePreset: {
        base: {
          backgroundColor: '{{colors.inkBrand010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          borderColor: '{{colors.interface010}}',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
      customThumbLabelStylePreset: {
        base: {
          borderColor: 'black',
          borderWidth: '1px',
          borderRadius: '{{borders.borderRadiusCircle}}',
          borderStyle: 'dashed',
          color: 'green',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        },
      },
      customLabelStylePreset: {
        base: {
          color: '{{colors.inkBrand010}}',
        },
      },
      customFeedback: {
        base: {
          backgroundColor: '{{colors.interactiveSecondary030}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          opacity: '{{overlays.opacity000}}',
        },
        hover: {
          opacity: '{{overlays.opacity020}}',
        },
      },
      customPlaceholderIcon: {
        base: {
          iconColor: '{{colors.inkBase}}',
        },
      },
      customOutlineColor: {
        base: {
          boxShadow: '{{shadows.shadow010}}',
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          outlineColor: '{{colors.red060}}',
          outlineStyle: 'solid',
          outlineWidth: '1px',
          outlineOffset: '10px',
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
      customThumbStyle: {
        base: {
          boxShadow: '{{shadows.shadow010}}',
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary010}}',
          borderWidth: '{{borders.borderWidth010}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
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

      customThumbOnHover: {
        base: {
          backgroundColor: '{{colors.interactivePrimary040}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary010}}',
        },
      },
      disabledSliderTrack: {
        disabled: {
          backgroundColor: '{{colors.interactiveDisabled010}}',
          borderRadius: '{{borders.borderRadiusPill}}',
        },
      },
      customThumbOnActive: {
        base: {
          backgroundColor: '{{colors.interactivePrimary050}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactivePrimary010}}',
        },
      },
    },
  },
};

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

const CustomMinLabel: React.FC = () => (
  <IconFilledRemove
    overrides={{size: 'iconSize020', stylePreset: 'customPlaceholderIcon'}}
  />
);

// eslint-disable-next-line react/prefer-stateless-function
class CustomMaxLabel extends React.Component {
  render() {
    return (
      <IconFilledAddCircleOutline
        overrides={{size: 'iconSize020', stylePreset: 'customPlaceholderIcon'}}
      />
    );
  }
}

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

export const StorySliderWithStates = () => (
  <>
    <StorybookHeading>Horizontal</StorybookHeading>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Base">
        <StatefulSlider values={[10]} max={20} min={0} />
      </StorybookCase>
      <StorybookCase title="Hover">
        <StatefulSlider
          values={[10]}
          max={20}
          min={0}
          overrides={{
            thumb: {
              stylePreset: 'customThumbOnActive',
            },
          }}
        />
      </StorybookCase>
      <StorybookCase title="Active">
        <StatefulSlider
          values={[10]}
          max={20}
          min={0}
          overrides={{
            thumb: {
              stylePreset: 'customThumbOnActive',
            },
          }}
        />
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Focus">
        <StatefulSlider values={[30]} max={40} min={0} />
      </StorybookCase>
      <StorybookCase title="Disabled">
        <StatefulSlider
          values={[150]}
          max={200}
          min={100}
          disabled
          overrides={{
            track: {
              stylePreset: 'disabledSliderTrack',
            },
          }}
        />
      </StorybookCase>
    </StorybookPage>
    <StorybookHeading>Vertical</StorybookHeading>
    <StorybookPage columns="1fr 1fr 1fr 1fr">
      <StorybookCase title="Base">
        <VerticalContainerWithBorder>
          <StatefulSlider values={[10]} max={20} min={0} vertical />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Hover">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[10]}
            max={20}
            min={0}
            vertical
            overrides={{
              thumb: {
                stylePreset: 'customThumbOnHover',
              },
            }}
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Active">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[10]}
            max={20}
            min={0}
            vertical
            overrides={{
              thumb: {
                stylePreset: 'customThumbOnActive',
              },
            }}
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Focus">
        <VerticalContainerWithBorder>
          <StatefulSlider values={[10]} max={20} min={0} vertical />
        </VerticalContainerWithBorder>
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr">
      <StorybookCase title="Disabled">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[150]}
            max={200}
            min={100}
            disabled
            vertical
            overrides={{
              track: {
                stylePreset: 'disabledSliderTrack',
              },
            }}
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
    </StorybookPage>
  </>
);
StorySliderWithStates.storyName = 'States';
StorySliderWithStates.parameters = {
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
          <StatefulSlider values={[30, 60]} max={100} min={0} vertical />
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
      <StorybookCase title="Inline min labels positioned before">
        <StatefulSlider values={[10]} max={20} min={0} minLabel="0%" />
      </StorybookCase>
      <StorybookCase title="Inline min labels positioned after">
        <StatefulSlider values={[10]} max={20} min={0} maxLabel="100%" />
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Both min and max inline labels">
        <StatefulSlider
          values={[10]}
          max={20}
          min={0}
          minLabel="0%"
          maxLabel="100%"
        />
      </StorybookCase>
      <StorybookCase title="Label posotion above thumb">
        <StatefulSlider
          values={[30]}
          max={40}
          min={0}
          thumbLabel
          overrides={{
            marginBlock: 'space020',
            thumbLabel: {
              space: 'space050',
            },
          }}
        />
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Label posotion before">
        <StatefulSlider
          values={[150]}
          max={200}
          min={100}
          minLabel="0%"
          maxLabel="100%"
          labelPosition="before"
        />
      </StorybookCase>
      <StorybookCase title="Label posotion after">
        <StatefulSlider
          values={[150]}
          max={200}
          min={100}
          minLabel="0%"
          maxLabel="100%"
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
      <StorybookCase title="Inline min labels positioned before">
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
      <StorybookCase title="Inline min label positioned after">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[10]}
            max={20}
            min={0}
            minLabel="0%"
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Both min and max inline labels">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[10]}
            max={20}
            min={0}
            minLabel="100%"
            maxLabel="0%"
            vertical
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Label position right of thumb">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[30]}
            max={40}
            min={0}
            thumbLabel
            vertical
            overrides={{thumbLabel: {}}}
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
    </StorybookPage>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Label posotion before">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[150]}
            max={200}
            min={100}
            minLabel="100%"
            maxLabel="0%"
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
            minLabel="100%"
            maxLabel="0%"
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

export const StorySliderWithStylingOverrides = () => (
  <>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase>
        <StatefulSlider
          values={[50]}
          max={100}
          min={0}
          minLabel="Label"
          maxLabel="Label"
          labelPosition="before"
          overrides={{
            track: {
              stylePreset: 'customTrackStylePreset',
              size: 'sizing020',
            },
            indicator: {
              stylePreset: 'customIndicatorStylePreset',
            },
            thumb: {
              stylePreset: 'customThumbStylePreset',
              size: 'sizing060',
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
      </StorybookCase>
    </StorybookPage>
  </>
);
StorySliderWithStylingOverrides.storyName = 'Styling overrides';
StorySliderWithStylingOverrides.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export const StorySliderWithOverrides = () => (
  <>
    <StorybookPage columns="1fr 1fr 1fr">
      <StorybookCase title="Icon compoenent">
        <ContainerWithBorder>
          <StatefulSlider
            values={[40]}
            max={50}
            min={0}
            minLabel={CustomMinLabel}
            maxLabel={CustomMaxLabel}
            labelPosition="before"
          />
        </ContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Custom outline">
        <ContainerWithBorder>
          <StatefulSlider
            values={[40]}
            max={50}
            min={0}
            overrides={{
              thumb: {
                stylePreset: 'customOutlineColor',
              },
            }}
          />
        </ContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Thumb border radius">
        <ContainerWithBorder>
          <StatefulSlider
            values={[40]}
            max={50}
            min={0}
            overrides={{
              thumb: {
                stylePreset: 'customThumbStyle',
              },
            }}
          />
        </ContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Track size">
        <ContainerWithBorder>
          <StatefulSlider
            values={[40]}
            max={50}
            min={0}
            overrides={{
              track: {
                size: 'sizing060',
              },
            }}
          />
        </ContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Label size">
        <VerticalContainerWithBorder>
          <StatefulSlider
            values={[50]}
            max={50}
            min={0}
            vertical
            minLabel="Label"
            maxLabel="Label"
            labelPosition="after"
          />
        </VerticalContainerWithBorder>
      </StorybookCase>
      <StorybookCase title="Logical props">
        <MarginOverridesWrapper>
          <ContainerWithBorder>
            <StatefulSlider
              values={[50]}
              max={50}
              min={0}
              overrides={{paddingInline: '20px', paddingBlock: '0px'}}
            />
          </ContainerWithBorder>
        </MarginOverridesWrapper>
      </StorybookCase>
    </StorybookPage>
  </>
);
StorySliderWithOverrides.storyName = 'Overrides';
StorySliderWithOverrides.parameters = {
  percy: {
    enableJavaScript: true,
  },
};

export default {
  title: 'Components/Slider',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Slider',
      url: 'https://newskit.co.uk/components/slider/',
      description:
        'Sliders allow users to choose a single value or range between min and max values by sliding a thumb.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          sliderCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
