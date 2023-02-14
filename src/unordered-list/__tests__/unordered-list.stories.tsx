import * as React from 'react';
import {UnorderedList} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {IconFilledTwitter, IconFilledMood} from '../../icons';
import {LinkStandalone} from '../../link';

const listData = [
  `alpha`,
  <IconFilledTwitter
    key="uniqueIconKey"
    title="twitter logo"
    overrides={{size: 'iconSize010'}}
  />,
  2,
  `Lorem ipsum dolor sit amet...`,
  <LinkStandalone key="uniqueLinkKey" href="http://localhost:6006">
    Click me!
  </LinkStandalone>,
];

export default {
  title: 'Components/unordered-list',
  component: () => 'None',
};

export const StoryUnorderedListDefault = () => (
  <>
    <StorybookHeading>Unordered list defaults</StorybookHeading>
    <UnorderedList>{listData}</UnorderedList>
  </>
);
StoryUnorderedListDefault.storyName = 'unordered-list-default';

export const StoryUnorderedListWithMarker = () => (
  <>
    <StorybookHeading>Unordered list</StorybookHeading>
    <StorybookSubHeading>with markers overridden marker</StorybookSubHeading>
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
  </>
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
    <>
      <StorybookHeading>Unordered list</StorybookHeading>
      <StorybookSubHeading>
        with marker in the center (default)
      </StorybookSubHeading>
      <UnorderedList>{multiLineListData}</UnorderedList>
      <StorybookSubHeading>with marker at the start</StorybookSubHeading>
      <UnorderedList markerAlign="start">{multiLineListData}</UnorderedList>
      <StorybookSubHeading>with marker at the end</StorybookSubHeading>
      <UnorderedList markerAlign="end">{multiLineListData}</UnorderedList>
    </>
  );
};
StoryUnorderedListWithMarkerAlignment.storyName =
  'unordered-list-with-marker-alignment';

export const StoryUnorderedListWithLogicalProps = () => (
  <>
    <StorybookHeading>Unordered list</StorybookHeading>
    <StorybookSubHeading>with logical props</StorybookSubHeading>
    <UnorderedList
      overrides={{
        paddingInline: 'space020',
        paddingBlock: 'space040',
        marginBlock: 'space060',
        marginInline: 'space080',
      }}
    >
      {listData}
    </UnorderedList>
  </>
);
StoryUnorderedListWithLogicalProps.storyName =
  'unordered-list-with-logical-props';
