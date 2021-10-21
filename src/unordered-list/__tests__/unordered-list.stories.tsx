import * as React from 'react';
import {UnorderedList} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledTwitter, IconFilledMood} from '../../icons';
import {Link} from '../../link';

const listData = [
  `alpha`,
  <IconFilledTwitter
    key="uniqueIconKey"
    title="twitter logo"
    overrides={{size: 'iconSize010'}}
  />,
  2,
  `Lorem ipsum dolor sit amet...`,
  <Link key="uniqueLinkKey" href="http://localhost:6006">
    Click me!
  </Link>,
];

export default {
  title: 'NewsKit Light/unordered-list',
  component: () => 'None',
};

export const StoryUnorderedListDefault = () => (
  <React.Fragment>
    <StorybookHeading>Unordered list defaults</StorybookHeading>
    <UnorderedList>{listData}</UnorderedList>
  </React.Fragment>
);
StoryUnorderedListDefault.storyName = 'unordered-list-default';

export const StoryUnorderedListWithMarker = () => (
  <React.Fragment>
    <StorybookHeading>Unordered list</StorybookHeading>
    <StorybookSubHeading>with markers</StorybookSubHeading>
    <UnorderedList listItemMarker={IconFilledMood}>{listData}</UnorderedList>
    <br />
    <StorybookSubHeading>
      with markers and overridden marker iconSize
    </StorybookSubHeading>
    <UnorderedList
      overrides={{marker: {size: 'iconSize020'}}}
      listItemMarker={IconFilledMood}
    >
      {listData}
    </UnorderedList>
  </React.Fragment>
);
StoryUnorderedListWithMarker.storyName = 'unordered-list-with-marker';

export const StoryUnorderedListWithMarkerAlignment = () => {
  const multiLineListData = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    `It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  ];
  return (
    <React.Fragment>
      <StorybookHeading>Unordered list</StorybookHeading>
      <StorybookSubHeading>
        with marker in the center (default)
      </StorybookSubHeading>
      <UnorderedList listItemMarker={IconFilledMood}>
        {multiLineListData}
      </UnorderedList>
      <StorybookSubHeading>with marker at the start</StorybookSubHeading>
      <UnorderedList listItemMarker={IconFilledMood} markerAlign="start">
        {multiLineListData}
      </UnorderedList>
      <StorybookSubHeading>with marker at the end</StorybookSubHeading>
      <UnorderedList listItemMarker={IconFilledMood} markerAlign="end">
        {multiLineListData}
      </UnorderedList>
    </React.Fragment>
  );
};
StoryUnorderedListWithMarkerAlignment.storyName =
  'unordered-list-with-marker-alignment';
