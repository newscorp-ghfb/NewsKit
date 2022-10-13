import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {useKeypress} from '../index';

import {StorybookSubHeading} from '../../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../style';
import {IconFilledStarOutline} from '../../../icons';
import {Flag} from '../../../flag';
import {CreateThemeArgs, ThemeProvider} from '../../../theme';
import {TextBlock} from '../../../text-block';
import {GridLayout, GridLayoutItem} from '../../../grid-layout';
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
      <StorybookSubHeading>useKeypress</StorybookSubHeading>
      <StyledDiv>
        <IconFilledStarOutline
          overrides={{
            size: 'iconSize040',
            stylePreset: customStylePreset,
          }}
        />
      </StyledDiv>
      <GridLayout rowGap="space045" columns="1fr 1fr" alignItems="center">
        <GridLayoutItem>
          <Key>r</Key>
        </GridLayoutItem>
        <GridLayoutItem>
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialParagraph010"
          >
            Red star
          </TextBlock>
        </GridLayoutItem>
        <GridLayoutItem>
          <Stack flow="horizontal-center" spaceInline="space020">
            <Key>shift</Key>
            <IconDiv> + </IconDiv>
            <Key>b</Key>
          </Stack>
        </GridLayoutItem>
        <GridLayoutItem>
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialParagraph010"
          >
            Blue star
          </TextBlock>
        </GridLayoutItem>
        <GridLayoutItem>
          <Stack flow="horizontal-center" spaceInline="space020">
            <Key>g</Key>
            <IconDiv> / </IconDiv>
            <Key>s</Key>
          </Stack>
        </GridLayoutItem>
        <GridLayoutItem>
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialParagraph010"
          >
            Green star
          </TextBlock>
        </GridLayoutItem>
      </GridLayout>
    </>
  );
};
StoryUseKeyPress.storyName = 'useKeypress';
StoryUseKeyPress.parameters = {
  eyes: {include: false},
};

export default {
  title: 'Utilities/useKeypress',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'useKeypress',
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
