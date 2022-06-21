import * as React from 'react';
import {OrderedList} from '../ordered-list';
import {StorybookHeading} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';

const listData = [`alpha`, `bravo`, `charlie`, `delta`, `echo`, `foxtrot`];

const myCustomTheme = createTheme({
  name: 'my-custom-ordered-list',
  overrides: {
    stylePresets: {
      customOrderedListItemCounter: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
      customOrderedListItemContent: {
        base: {
          color: '{{colors.blue090}}',
        },
      },
    },
  },
});

export default {
  title: 'NewsKit Light/ordered-list',
  component: () => 'None',
};

export const StoryOrderedListDefault = () => (
  <>
    <StorybookHeading>Ordered list defaults</StorybookHeading>
    <OrderedList>{listData}</OrderedList>
  </>
);
StoryOrderedListDefault.storyName = 'ordered-list-default';

export const StoryOrderedListOverrides = () => (
  <>
    <StorybookHeading>Ordered list with overrides</StorybookHeading>
    <ThemeProvider theme={myCustomTheme}>
      <OrderedList
        overrides={{
          spaceInline: 'space010',
          content: {
            stylePreset: 'customOrderedListItemContent',
            typographyPreset: 'editorialParagraph030',
          },
          counter: {
            stylePreset: 'customOrderedListItemCounter',
            typographyPreset: 'editorialParagraph020',
            minWidth: 'sizing030',
          },
        }}
      >
        {listData}
      </OrderedList>
    </ThemeProvider>
  </>
);
StoryOrderedListOverrides.storyName = 'ordered-list-overrides';

export const StoryOrderedListLogicalProps = () => (
  <>
    <StorybookHeading>Ordered list with logical props</StorybookHeading>
    <OrderedList
      overrides={{
        paddingInline: '30px',
        marginBlock: '30px',
      }}
    >
      {listData}
    </OrderedList>
  </>
);
StoryOrderedListLogicalProps.storyName = 'ordered-list-logical-props';
