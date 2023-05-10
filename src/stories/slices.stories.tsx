import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  Divider,
  GridLayout,
  GridLayoutItem,
  IconButton,
  ThemeProvider,
  TitleBar,
} from '..';
import {createCustomThemeWithBaseThemeSwitch} from '../test/theme-select-object';
import {IconFilledChevronRight} from '../icons';

import {
  CardVerticalResponsive,
  CardHorizontalResponsive,
  stylePresets as stylePresetsTheSun,
} from '../card-composable/__tests__/the-sun-cards';
import {
  LeadCard as TheTimesLeadCard,
  SecondLevelCard as TheTimesSecondLevelCard,
  ThirdLevelCard as TheTimesThirdLevelCard,
} from '../card-composable/__tests__/the-times-cards';

const themeOverrides = {
  overrides: {
    stylePresets: {
      divider: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interface030}}',
          borderWidth: '{{borders.borderWidthDefault}}',
        },
      },
      cardHeadline: {
        base: {
          color: 'currentColor',
        },
      },
      cardLink: {
        base: {
          textDecoration: 'none',
          color: '{{colors.inkContrast}}',
        },
        hover: {
          color: '{{colors.interactiveLink020}}',
        },
      },
      ...stylePresetsTheSun,
    },
    componentDefaults: {
      cardLink: {
        stylePreset: 'cardLink',
      },
    },
  },
};

export default {
  title: 'Composed/Slices',
  component: () => 'None',
  parameters: {
    previewTabs: {
      'storybook/canvas/panel': {index: -1},
      'storybook/docs/panel': {hidden: true},
    },
    viewMode: 'story',
    docs: {
      page: null,
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
          themeOverrides,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const TheSunStory = () => (
  <GridLayout
    overrides={{
      maxWidth: {xs: '340px', md: '620px', lg: '940px'},
      marginInline: 'auto',
    }}
    columns={{xs: '1fr', lg: '2fr 1fr'}}
    columnGap="space040"
    rowGap="space050"
  >
    <GridLayoutItem>
      <CardVerticalResponsive />
    </GridLayoutItem>
    <GridLayout
      columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr'}}
      columnGap="space040"
      rowGap="space050"
      alignContent="space-between"
    >
      <CardHorizontalResponsive />
      <CardHorizontalResponsive />
      <CardHorizontalResponsive />
      <CardHorizontalResponsive />
    </GridLayout>
  </GridLayout>
);
TheSunStory.storyName = 'The Sun';

const SecondLevelArticlesGroup = () => {
  const areas = {
    xs: `
      p1 d1 p2
      d2 d1 d3
      p3 d1 p4
    `,
    md: `
      p1 d1 p2 d2 p3 d3 p4
    `,
    lg: `
      p1
      d1
      p2
      d2
      p3
      d3
      p4
    `,
    xl: `
      p1 d1 p2
      d2 d1 d3
      p3 d1 p4
    `,
  };

  return (
    <GridLayout
      areas={areas}
      columns={{
        xs: '1fr auto 1fr',
        md: '1fr auto 1fr auto 1fr auto 1fr',
        lg: '1fr',
        xl: '1fr auto 1fr',
      }}
      columnGap="space040"
      rowGap="space040"
    >
      <GridLayoutItem area="p1">
        <TheTimesSecondLevelCard />
      </GridLayoutItem>
      <GridLayoutItem area="d1">
        <Divider vertical={{xs: true, lg: false, xl: true}} />
      </GridLayoutItem>
      <GridLayoutItem area="p2">
        <TheTimesSecondLevelCard />
      </GridLayoutItem>
      <GridLayoutItem area="d2">
        <Divider vertical={{xs: false, md: true, lg: false}} />
      </GridLayoutItem>
      <GridLayoutItem area="p3">
        <TheTimesSecondLevelCard />
      </GridLayoutItem>
      <GridLayoutItem area="d3">
        <Divider vertical={{xs: false, md: true, lg: false}} />
      </GridLayoutItem>
      <GridLayoutItem area="p4">
        <TheTimesSecondLevelCard />
      </GridLayoutItem>
    </GridLayout>
  );
};

const ThirdLevelArticlesGroup = () => (
  <GridLayout
    columns={{
      xs: '1fr',
      md: '1fr auto 1fr',
    }}
    columnGap="space040"
    rowGap="space040"
  >
    <TheTimesThirdLevelCard />
    <Divider vertical={{xs: false, md: true}} />
    <TheTimesThirdLevelCard />
  </GridLayout>
);

export const TheTimesStory = () => {
  const button = () => (
    <IconButton href="/" size="medium">
      <IconFilledChevronRight />
    </IconButton>
  );

  const mainAreas = {
    xs: `
      lead
      d1
      second
      d2
      third
    `,
    lg: `
      lead  d1 second
      d2    d1 second
      third d1 second
    `,
  };

  return (
    <GridLayout
      overrides={{maxWidth: '1300px', marginInline: 'auto'}}
      rowGap="space040"
    >
      <TitleBar
        headingAs="h2"
        actionItem={button}
        overrides={{
          paddingInline: 'space000',
          heading: {
            typographyPreset: 'editorialHeadline040',
          },
        }}
      >
        Title bar
      </TitleBar>
      <GridLayout
        areas={mainAreas}
        columnGap="space040"
        rowGap="space040"
        columns={{
          xs: '1fr',
          lg: '1fr auto 232px',
          xl: '1fr auto 402px',
        }}
      >
        <GridLayoutItem area="lead">
          <TheTimesLeadCard />
        </GridLayoutItem>
        <GridLayoutItem area="d1">
          <Divider vertical={{xs: false, lg: true}} />
        </GridLayoutItem>
        <GridLayoutItem area="second">
          <SecondLevelArticlesGroup />
        </GridLayoutItem>
        <GridLayoutItem area="d2">
          <Divider />
        </GridLayoutItem>
        <GridLayoutItem area="third">
          <ThirdLevelArticlesGroup />
        </GridLayoutItem>
      </GridLayout>
    </GridLayout>
  );
};
TheTimesStory.storyName = 'The Times';
