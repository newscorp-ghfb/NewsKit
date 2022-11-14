import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {useKeypress} from '../index';

import {
  StorybookCase,
  StorybookPage,
  StorybookParah,
} from '../../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../style';
import {IconFilledStarOutline} from '../../../icons';
import {Flag} from '../../../flag';
import {CreateThemeArgs, ThemeProvider} from '../../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../../test/theme-select-object';
import {Stack} from '../../../stack';

const StyledDiv = styled.div`
  margin: 15px;
  width: 200px;
  height: 100px;
`;

const IconDiv = styled.div`
  ${getColorCssFromTheme('color', 'inkBase')};
`;

const twoFlagCols = {
  xs: 'repeat(1, minmax(150px, max-content))',
  sm: 'repeat(2, minmax(150px, max-content))',
};

const useKeyPressCustomTheme: CreateThemeArgs = {
  name: 'keypress-theme',
  overrides: {
    stylePresets: {
      flagSolidNeutral: {
        base: {
          color: '{{colors.inkBase}}',
          backgroundColor: '{{colors.interface020}}',
          borderRadius: '{{borders.borderRadiusRounded010}}',
          whiteSpace: 'nowrap',
        },
      },
    },
  },
};
const Key = ({children}: {children: string}) => (
  <Flag
    overrides={{
      typographyPreset: 'utilityLabel010',
      stylePreset: 'flagSolidNeutral',
    }}
    size="medium"
    as="span"
  >
    {children}
  </Flag>
);

export const StoryUseKeyPress = () => {
  const [customStylePreset, setCustomStylePreset] = React.useState(
    'inkBrand010',
  );

  const onPressSingle = React.useCallback(() => {
    setCustomStylePreset('inkNegative');
  }, [setCustomStylePreset]);

  const onPressMulti = React.useCallback(() => {
    setCustomStylePreset('inkBrand010');
  }, [setCustomStylePreset]);

  const onPressEitherKey = React.useCallback(() => {
    setCustomStylePreset('inkPositive');
  }, [setCustomStylePreset]);

  useKeypress('r', onPressSingle, {eventType: 'keydown'});
  useKeypress('shift + b', onPressMulti, {eventType: 'keydown'});
  useKeypress(['g', 's'], onPressEitherKey, {eventType: 'keydown'});

  return (
    <>
      <StyledDiv>
        <IconFilledStarOutline
          overrides={{
            size: 'iconSize040',
            stylePreset: customStylePreset,
          }}
        />
      </StyledDiv>
      <StorybookPage
        columns={twoFlagCols}
        rowGap={{xs: 'space050', sm: 'space080'}}
        alignItems="center"
      >
        <StorybookCase>
          <Key>r</Key>
        </StorybookCase>
        <StorybookParah>Red star</StorybookParah>
        <StorybookCase>
          <Stack flow="horizontal-center" spaceInline="space020">
            <Key>shift</Key>
            <IconDiv> + </IconDiv>
            <Key>b</Key>
          </Stack>
        </StorybookCase>
        <StorybookParah>Blue star</StorybookParah>
        <StorybookCase>
          <Stack flow="horizontal-center" spaceInline="space020">
            <Key>g</Key>
            <IconDiv> / </IconDiv>
            <Key>s</Key>
          </Stack>
        </StorybookCase>
        <StorybookParah>Green star</StorybookParah>
      </StorybookPage>
    </>
  );
};
StoryUseKeyPress.storyName = 'useKeypress';
StoryUseKeyPress.parameters = {
  eyes: {include: false},
  percy: {skip: true},
};

export default {
  title: 'Utilities/useKeypress',
  component: useKeypress,
  parameters: {
    nkDocs: {
      title: 'Hooks',
      url: 'https://newskit.co.uk/components/utils/hooks/',
      description:
        'useKeypress is a custom hook that detects when the user is pressing one single key or multiple keys.',
    },
  },
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          useKeyPressCustomTheme,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
