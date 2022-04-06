import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';

import {Checkbox} from '..';
import {compileTheme, createTheme, ThemeProvider} from '../../theme';
import {
  getResponsiveSize,
  getStylePreset,
  styled,
  withDefaultProps,
} from '../../utils';
import {
  Cell,
  Fieldset,
  Grid,
  GridLayout,
  IconFilledCancel,
  IconFilledStarOutline,
  Svg,
  SvgProps,
  toNewsKitIcon,
} from '../..';
import {CheckboxIconProps, CheckboxProps} from '../types';
import {states, sizes} from './helpers';
import {BaseSwitch} from '../../base-switch';
import {withOwnTheme} from '../../utils/with-own-theme';

const myCustomTheme = compileTheme(
  createTheme({
    name: 'checkbox-theme',
    overrides: {
      stylePresets: {
        customCheckboxInput: {
          base: {
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderRadius: '50%',
            backgroundColor: 'orange',
            iconColor: 'red',
          },
          hover: {
            backgroundColor: 'blue',
          },
        },
        customCheckboxFeedback: {
          base: {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '50%',
          },
        },
        customIconFilledCancel: {
          base: {
            backgroundColor: '{{colors.interfaceInformative010}}',
            iconColor: '{{colors.inkInverse}}',
          },
        },
      },
    },
  }),
);

export default {
  title: 'NewsKit Light/checkbox',
  component: () => 'None',
  disabledRules: [],
};

const Container = styled.div`
  margin: 10px;
  display: flex;
`;
export const StoryCheckboxDefault = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Checkbox</StorybookHeading>
    <Grid>
      <Cell xs={8} sm={4}>
        <StorybookSubHeading>States</StorybookSubHeading>

        {states.map(([id, {checked, ...props}]) => (
          <Container>
            <Checkbox {...props} defaultChecked={checked} label={id} />
          </Container>
        ))}
      </Cell>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Sizes</StorybookSubHeading>

        {sizes.map(size => (
          <>
            <Container>
              <Checkbox size={size} label={size} />
            </Container>
            <Container>
              <Checkbox size={size} label={`${size}-checked`} checked />
            </Container>
          </>
        ))}
      </Cell>
    </Grid>
  </ThemeProvider>
);

StoryCheckboxDefault.storyName = 'checkbox-default';

export const StoryCheckboxLabel = () => {
  const shortLabel = 'Short label';
  const longLabel =
    'Very long label... The array of dependencies is not passed as arguments to the effect function.';
  return (
    <ThemeProvider theme={myCustomTheme}>
      <StorybookHeading>Checkbox - Labels</StorybookHeading>
      <Grid>
        {sizes.map(size => (
          <Cell xs={8} sm={4}>
            <StorybookSubHeading>Size {size}</StorybookSubHeading>
            <Container>
              <Checkbox label={shortLabel} size={size} />
            </Container>
            <hr />
            <Container>
              <Checkbox label={longLabel} size={size} />
            </Container>
            <hr />
            <Container>
              <Checkbox label={shortLabel} size={size} labelPosition="start" />
            </Container>
            <hr />
            <Container>
              <Checkbox label={longLabel} size={size} labelPosition="start" />
            </Container>
          </Cell>
        ))}
      </Grid>
      <StorybookSubHeading>No label</StorybookSubHeading>
      <Container>
        <span>This is checkbox</span> <Checkbox id="custom-label" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="custom-label"> with custom label</label>
      </Container>
    </ThemeProvider>
  );
};

StoryCheckboxLabel.storyName = 'checkbox-label';

const CustomCheck = ({checked}: CheckboxIconProps) =>
  checked ? (
    <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
  ) : (
    <IconFilledCancel
      overrides={{size: 'iconSize020', stylePreset: 'customIconFilledCancel'}}
    />
  );
export const StoryCheckboxOverrides = () => (
  <ThemeProvider theme={myCustomTheme}>
    <StorybookHeading>Checkbox</StorybookHeading>
    <StorybookSubHeading>Style overrides</StorybookSubHeading>
    <Container>
      <Checkbox
        value="10"
        label="Style overrides"
        overrides={{
          spaceStack: 'space060',
          input: {
            stylePreset: 'customCheckboxInput',
            size: '100px',
          },
          feedback: {
            size: '120px',
            stylePreset: 'customCheckboxFeedback',
          },
          label: {
            typographyPreset: 'utilityHeading010',
            stylePreset: 'inkSubtle',
          },
          icon: {
            size: 'iconSize050',
          },
        }}
      />
    </Container>
    <StorybookSubHeading>Icon Prop override</StorybookSubHeading>
    <Container>
      <Checkbox
        label="prop overrides"
        overrides={{
          icon: {
            props: {
              overrides: {
                size: 'iconSize010',
              },
            },
          },
        }}
      />
    </Container>
    <StorybookSubHeading>Icon Component override</StorybookSubHeading>
    <Container>
      <Checkbox
        label="component overrides"
        overrides={{
          icon: CustomCheck,
        }}
      />
    </Container>
    <StorybookSubHeading>Icon Override</StorybookSubHeading>
    <Container>
      <Checkbox
        label="overrides"
        overrides={{
          icon: {
            stylePreset: 'bannerInformative',
            size: 'iconSize030',
          },
        }}
      />
    </Container>
  </ThemeProvider>
);
StoryCheckboxOverrides.storyName = 'checkbox-overrides';

const myCustomTransitionPresets = createTheme({
  name: 'my-custom-transition-presets',
  overrides: {
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '500ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customBorderColourChange: {
        base: {
          transitionProperty: 'border-color',
          transitionDuration: '500ms',
          transitionDelay: '0ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
  },
});
export const StoryCheckboxTransitions = () => (
  <ThemeProvider theme={myCustomTransitionPresets}>
    <StorybookSubHeading>Checkbox with Transition Presets</StorybookSubHeading>
    <Container>
      <GridLayout rowGap="space040">
        <Checkbox defaultChecked label="default transition" />
        <Checkbox
          overrides={{
            input: {
              transitionPreset: [
                'customBackgroundColorChange',
                'customBorderColourChange',
              ],
            },
          }}
          defaultChecked
          label="with overrides using custom transitions"
        />
        <Checkbox
          overrides={{
            input: {
              transitionPreset: [
                {
                  extend: 'backgroundColorChange',
                  base: {
                    transitionDuration: '{{motions.motionDuration050}}',
                  },
                },
                {
                  extend: 'borderColorChange',
                  base: {
                    transitionDuration: '{{motions.motionDuration010}}',
                  },
                },
              ],
            },
          }}
          defaultChecked
          label="with overrides using extend on transitionDuration"
        />
      </GridLayout>
    </Container>
  </ThemeProvider>
);

StoryCheckboxTransitions.storyName = 'checkbox-transitions';

const toggleStylePresets = {
  toggleTrack: {
    base: {
      backgroundColor: 'rgb(159 158 159)',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
    checked: {
      backgroundColor: 'rgb(143 185 232)',
    },
  },
  toggleThumb: {
    base: {
      backgroundColor: 'white',
      borderRadius: '{{borders.borderRadiusCircle}}',
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
    },
    checked: {
      backgroundColor: 'rgb(25 118 210)',
    },
  },
};

const toggleDefaults = {
  toggle: {
    medium: {
      spaceStack: 'space000',
      track: {
        stylePreset: 'toggleTrack',
        size: '16px',
      },
      thumb: {
        stylePreset: 'toggleThumb',
        size: '24px',
      },
      // this is coming from base-switch
      input: {
        blockSize: '32px',
        inlineSize: '48px',
        spaceInline: 'space030',
      },
      label: {
        stylePreset: 'controlLabel',
        typographyPreset: 'utilityBody020',
      },
    },
  },
};

const Track = styled.div<{checked: boolean}>`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  ${props =>
    getStylePreset('toggle.medium.track', 'track', {isChecked: props.checked})}
  ${getResponsiveSize('height', 'toggle.medium.track', 'track', 'size')};
  transition: all 0.2s ease-in-out;
`;
const Thumb = styled.div<{checked: boolean}>`
  ${props =>
    getStylePreset('toggle.medium.thumb', 'thumb', {isChecked: props.checked})}
  ${getResponsiveSize(
    rectSize => ({width: rectSize, height: rectSize}),
    'toggle.medium.thumb',
    'thumb',
    'size',
  )}
  ${props => (!props.checked ? 'left: 0' : 'left: calc(100% - 24px)')};
  position: absolute;
  aspect-ratio: 1/1;
  transition: all 0.2s ease-in-out;
  display: grid;
  place-items: center;
`;

const DefaultToggleComponent = ({checked}: CheckboxIconProps) => (
  <Track checked={checked}>
    <Thumb checked={checked} />
  </Track>
);

const ThemeToggleComponent = ({checked}: CheckboxIconProps) => (
  <Track checked={checked} aria-hidden='true'>
    <Thumb checked={checked}>
      {checked ? (
        <IconFilledLight overrides={{size: 'iconSize010'}} />
      ) : (
        <IconFilledDark overrides={{size: 'iconSize010'}} />
      )}
    </Thumb>
  </Track>
);

const ThemelessToggle = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, inputRef) => (
    <BaseSwitch
      path="toggle"
      ref={inputRef}
      type="checkbox"
      role='switch'
      {...props}
      defaultSwitchSelectorComponent={DefaultToggleComponent}
    />
  ),
);

export const Toggle = withOwnTheme(ThemelessToggle)({
  defaults: toggleDefaults,
  stylePresets: toggleStylePresets,
});

export const StoryCheckboxAsToggle = () => (
  <>
    <Toggle defaultChecked />
    <Toggle label="change theme" overrides={{icon: ThemeToggleComponent}} />

    <Fieldset legend="Breakfast menu">
      <Toggle defaultChecked />
      <Toggle label="change theme" overrides={{icon: ThemeToggleComponent}} />
    </Fieldset>
  </>
);

const Dark: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 17 17" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7349 0C12.9152 0 13.0614 0.146193 13.0614 0.326531C13.0614 1.76923 14.2309 2.93878 15.6736 2.93878C15.854 2.93878 16.0002 3.08497 16.0002 3.26531V3.59184C16.0002 3.77217 15.854 3.91837 15.6736 3.91837C14.2309 3.91837 13.0614 5.08791 13.0614 6.53061C13.0614 6.71095 12.9152 6.85714 12.7349 6.85714H12.4083C12.228 6.85714 12.0818 6.71095 12.0818 6.53061C12.0818 5.08791 10.9123 3.91837 9.46956 3.91837C9.28922 3.91837 9.14303 3.77217 9.14303 3.59184V3.26531C9.14303 3.08497 9.28922 2.93878 9.46956 2.93878C10.9123 2.93878 12.0818 1.76923 12.0818 0.326531C12.0818 0.146193 12.228 0 12.4083 0H12.7349ZM14.8384 9.78689C15.2381 9.50799 15.8414 9.80867 15.7022 10.2758C14.7157 13.5862 11.6485 16 8.01747 16C3.58955 16 0 12.4105 0 7.98253C0 4.35151 2.41376 1.28426 5.72424 0.29782C6.19133 0.158637 6.49201 0.761872 6.21311 1.16157C5.51277 2.16524 5.10203 3.38598 5.10203 4.70265C5.10203 8.12423 7.87577 10.898 11.2973 10.898C12.614 10.898 13.8348 10.4872 14.8384 9.78689Z"
      fill="#577FFB"
    />
  </Svg>
);

export const IconFilledDark = withDefaultProps(toNewsKitIcon(Dark), {
  title: 'Dark icon',
  overrides: {size: 'iconSize020'},
});

IconFilledDark.displayName = 'IconFilledDark';

const Light: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.95857 0.606282C8.15777 0.323947 8.57647 0.323948 8.77567 0.606283L10.1795 2.596C10.4021 2.91144 10.7863 3.0706 11.1667 3.00492L13.5663 2.59063C13.9068 2.53185 14.2029 2.82791 14.1441 3.16841L13.7298 5.56801C13.6641 5.94843 13.8233 6.33268 14.1387 6.55523L16.1285 7.95906C16.4108 8.15826 16.4108 8.57696 16.1285 8.77616L14.1387 10.18C13.8233 10.4025 13.6641 10.7868 13.7298 11.1672L14.1441 13.5668C14.2029 13.9073 13.9068 14.2034 13.5663 14.1446L11.1667 13.7303C10.7863 13.6646 10.4021 13.8238 10.1795 14.1392L8.77567 16.1289C8.57647 16.4113 8.15777 16.4113 7.95857 16.1289L6.55475 14.1392C6.33219 13.8238 5.94794 13.6646 5.56752 13.7303L3.16792 14.1446C2.82743 14.2034 2.53136 13.9073 2.59015 13.5668L3.00443 11.1672C3.07011 10.7868 2.91095 10.4025 2.59551 10.18L0.605794 8.77616C0.323459 8.57696 0.323459 8.15826 0.605794 7.95906L2.59551 6.55523C2.91095 6.33268 3.07011 5.94843 3.00443 5.56801L2.59015 3.16841C2.53136 2.82791 2.82743 2.53185 3.16792 2.59063L5.56752 3.00492C5.94794 3.0706 6.33219 2.91144 6.55475 2.596L7.95857 0.606282ZM13.003 8.36878C13.003 10.9285 10.928 13.0035 8.3683 13.0035C5.80861 13.0035 3.73358 10.9285 3.73358 8.36878C3.73358 5.8091 5.80861 3.73406 8.3683 3.73406C10.928 3.73406 13.003 5.8091 13.003 8.36878ZM8.36712 12.0744C10.4144 12.0744 12.074 10.4148 12.074 8.36761C12.074 6.32038 10.4144 4.66077 8.36712 4.66077C6.31989 4.66077 4.66028 6.32038 4.66028 8.36761C4.66028 10.4148 6.31989 12.0744 8.36712 12.0744Z"
      fill="white"
    />
  </Svg>
);

export const IconFilledLight = withDefaultProps(toNewsKitIcon(Light), {
  title: 'Light icon',
  overrides: {size: 'iconSize020'},
});

IconFilledLight.displayName = 'IconFilledLight';
