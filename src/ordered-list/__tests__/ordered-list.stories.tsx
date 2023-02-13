import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {OrderedList} from '../ordered-list';
import {StorybookHeading} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const sentence =
  'A paragraph is a short part of a text, consisting of at least one sentence and beginning on a new line. It usually deals with a single event and is indicated by a new line, indentation or numbering.';
const paragraph = `${sentence} ${sentence} ${sentence}`;
const listData = [`alpha`, `bravo`, `charlie`, `delta`, paragraph, `foxtrot`];

const orderedListCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-ordered-list',
  overrides: {
    stylePresets: {
      customOrderedListItemCounter: {
        base: {
          color: '{{colors.interfaceInformative010}}',
        },
      },
      customOrderedListItemContent: {
        base: {
          color: '{{colors.inkNotice}}',
        },
      },
    },
  },
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

export default {
  title: 'Components/ordered-list',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          orderedListCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
