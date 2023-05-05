import * as React from 'react';
import {
  GridLayout,
  GridLayoutItem,
  ThemeProvider,
  createTheme,
  useTheme,
} from '..';
import {
  CardVerticalResponsive,
  CardHorizontalResponsive,
  stylePresets as stylePresetsTheSun,
} from '../card-composable/__tests__/__stories/the-sun-cards';

export default {
  title: 'Composed/Slices',
  component: () => 'None',
};

export const StoryDefault = () => <>Default</>;
StoryDefault.storyName = 'default';

export const TheSunStory = () => {
  const currentTheme = useTheme();
  // @ts-ignore
  currentTheme.compiled = false;
  const theSunTheme = createTheme({
    // @ts-ignore
    baseTheme: currentTheme,
    overrides: {
      stylePresets: stylePresetsTheSun,
    },
  });

  return (
    <ThemeProvider theme={theSunTheme}>
      <GridLayout
        overrides={{
          maxWidth: {xs: '340px', md: '620px', lg: '940px'},
          marginInline: 'auto',
        }}
        columns={{xs: '1fr', md: '1fr 1fr', lg: '2fr 1fr'}}
        rowGap={{xs: 'space050'}}
        columnGap={{xs: 'space040'}}
      >
        <GridLayoutItem row={{lg: '1 / 5'}} column={{md: '1 / 3', lg: '1 / 2'}}>
          <CardVerticalResponsive />
        </GridLayoutItem>
        <GridLayoutItem>
          <CardHorizontalResponsive />
        </GridLayoutItem>
        <GridLayoutItem>
          <CardHorizontalResponsive />
        </GridLayoutItem>
        <GridLayoutItem>
          <CardHorizontalResponsive />
        </GridLayoutItem>
        <GridLayoutItem>
          <CardHorizontalResponsive />
        </GridLayoutItem>
      </GridLayout>
    </ThemeProvider>
  );
};
TheSunStory.storyName = 'The Sun';

export const TheTimesStory = () => <>The Times</>;
TheTimesStory.storyName = 'The Times';
