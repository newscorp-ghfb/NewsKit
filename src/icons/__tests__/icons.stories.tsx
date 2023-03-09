/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {Story as StoryType} from '@storybook/react';

import {createTheme, ThemeProvider, CreateThemeArgs} from '../../theme';
import {styled, getColorCssFromTheme} from '../../utils/style';

import {
  StorybookSubHeading,
  StorybookCase,
  StorybookPage,
} from '../../test/storybook-comps';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

import {
  IconOutlinedClose,
  Svg,
  NewsKitIcon,
  IconFilledAddCircle,
  IconFilledAddCircleOutline,
} from '..';
import * as customIcons from '../filled/custom';
import {customToNewsKitIcon} from '../custom-to-newskit-icon';
import {InlineMessage} from '../../inline-message';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {LinkInline} from '../../link';

const MarginOverridesWrapper = styled.div`
  width: min-content;
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

const iconsCustomThemeObject: CreateThemeArgs = {
  name: 'icons-custom-theme',
  overrides: {
    stylePresets: {
      iconCustom: {
        base: {
          iconColor: '{{colors.inkBase}}',
        },
      },
      iconCustomWithTransitions: {
        base: {
          iconColor: '{{colors.inkBase}}',
        },
        hover: {
          iconColor: '{{colors.interactivePrimary030}}',
        },
      },
    },
  },
};

// IndeterminateProgressIndicator is excluded from Storybook because visual testing of animated
// components like ProgressIndicator (https://newskit.co.uk/components/progress-indicator/)
// is always likely to be problematic
const {IndeterminateProgressIndicator, ...remainingCustomIcons} = customIcons;

export const StoryDefaultIcons = () => (
  <StorybookPage>
    <StorybookCase>
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize040',
        }}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryDefaultIcons.storyName = 'Default';

export const StorySizeIcons = () => (
  <StorybookPage
    columns="repeat(5, 1fr)"
    columnGap="space080"
    rowGap="space080"
  >
    <StorybookCase title="iconSize005 (8px)">
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize005',
        }}
      />
    </StorybookCase>
    <StorybookCase title="iconSize010 (16px)">
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize010',
        }}
      />
    </StorybookCase>
    <StorybookCase title="iconSize020 (24px)">
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize020',
        }}
      />
    </StorybookCase>
    <StorybookCase title="iconSize030 (32px)">
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize030',
        }}
      />
    </StorybookCase>
    <StorybookCase title="iconSize040 (48px)">
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize040',
        }}
      />
    </StorybookCase>
    <StorybookCase title="iconSize050 (64px)">
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize050',
        }}
      />
    </StorybookCase>
  </StorybookPage>
);
StorySizeIcons.storyName = 'Size';

export const StoryCustomIcons = () => (
  <>
    <StorybookPage columns="repeat(5, 1fr)">
      {Object.entries(remainingCustomIcons).map((entry: any) => {
        const [iconName, Icon] = entry as [string, NewsKitIcon];

        return (
          <StorybookCase title={iconName}>
            <Icon overrides={{size: 'iconSize040'}} />
          </StorybookCase>
        );
      })}
    </StorybookPage>
  </>
);
StoryCustomIcons.storyName = 'Custom icons';

export const StoryMaterialIcons = () => (
  <GridLayout columns="1fr 1fr" columnGap="space080" rowGap="space080">
    <StorybookCase title="IconFilledAddCircle">
      <IconFilledAddCircle overrides={{size: 'iconSize040'}} />
    </StorybookCase>
    <StorybookCase title="IconFilledAddCircleOutline">
      <IconFilledAddCircleOutline overrides={{size: 'iconSize040'}} />
    </StorybookCase>
    <GridLayoutItem column="1 / 3">
      <InlineMessage>
        For the full libary of Material icons available, please refer to{' '}
        <LinkInline href="fonts.google.com/icons">
          fonts.google.com/icons
        </LinkInline>
      </InlineMessage>
    </GridLayoutItem>
  </GridLayout>
);
StoryMaterialIcons.storyName = 'Material icons';

export const StoryIconsTransition = () => (
  <StorybookPage>
    <StorybookCase title="Transition preset override on hover">
      <IconFilledAddCircle
        overrides={{
          size: 'iconSize040',
          stylePreset: 'iconCustomWithTransitions',
        }}
      />
    </StorybookCase>
  </StorybookPage>
);
StoryIconsTransition.storyName = 'Transitions';

export const StoryOverriddenIcons = () => {
  const MyCustomIcon = customToNewsKitIcon('IconFilledStop', props => (
    <Svg {...props} viewBox="0 0 48 48">
      <circle opacity="0.3" cx="27.5" cy="27.5" r="19.5" fill="#D60000" />
      <circle opacity="0.3" cx="21.5" cy="20.5" r="19.5" fill="#007B22" />
      <path
        opacity="0.8"
        d="M24.5 4.5C13.7478 4.5 5 13.2478 5 24C5 34.7522 13.7478 43.5 24.5 43.5C35.2522 43.5 44 34.7522 44 24C44 13.2478 35.2522 4.5 24.5 4.5ZM32.6216 30L30.5 32.1216L24.5 26.1216L18.5 32.1216L16.3784 30L22.3784 24L16.3784 18L18.5 15.8784L24.5 21.8784L30.5 15.8784L32.6216 18L26.6216 24L32.6216 30Z"
        fill="#3358CC"
      />
      <path
        d="M32.622 30L30.5005 32.1215L24.5005 26.1215L18.5005 32.1215L16.3789 30L22.3789 24L16.3789 18L18.5005 15.8784L24.5005 21.8784L30.5005 15.8784L32.622 18L26.622 24L32.622 30Z"
        fill="white"
      />
    </Svg>
  ));
  const themeWithOverridenIcons = createTheme({
    name: 'my-custom-overridden-icons-theme',
    overrides: {
      icons: {
        IconOutlinedClose: MyCustomIcon,
        Another: MyCustomIcon,
      },
    },
  });

  return (
    <StorybookPage>
      <StorybookCase>
        <StorybookSubHeading>icon-outlined-close default</StorybookSubHeading>
        <IconOutlinedClose
          overrides={{
            size: 'iconSize050',
          }}
        />
      </StorybookCase>
      <StorybookCase>
        <StorybookSubHeading>
          icon-outlined-close - overridden
        </StorybookSubHeading>
        <ThemeProvider theme={themeWithOverridenIcons}>
          <IconOutlinedClose
            overrides={{
              size: 'iconSize050',
            }}
          />
        </ThemeProvider>
      </StorybookCase>
      <StorybookCase>
        <StorybookSubHeading>Logical props</StorybookSubHeading>
        <MarginOverridesWrapper>
          <IconFilledAddCircle
            overrides={{
              marginBlock: 'space010',
              marginInline: 'space010',
              size: 'iconSize050',
            }}
          />
        </MarginOverridesWrapper>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryOverriddenIcons.storyName = 'Overrides';

export default {
  title: 'Components/Icons',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          iconsCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
