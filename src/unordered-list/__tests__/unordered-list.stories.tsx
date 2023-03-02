import * as React from 'react';
import {UnorderedList} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {
  IconFilledChevronRight,
  IconOutlinedStarOutline,
  IconFilledStar,
} from '../../icons';
import {LinkStandalone} from '../../link';
import {getColorCssFromTheme, styled} from '../../utils';

const LIST_DATA = [
  `Actions & Inputs`,
  `Feedback & Status`,
  `Layout`,
  `Media`,
  `Navigation`,
  'Text',
];

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

export const StoryUnorderedListDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <UnorderedList>{LIST_DATA}</UnorderedList>
    </StorybookCase>
  </StorybookPage>
);
StoryUnorderedListDefault.storyName = 'Default';

export const StoryUnorderedListVariations = () => (
  <StorybookPage columns={{xs: '1fr', md: '1fr 1fr'}}>
    <StorybookCase title="Text default">
      <UnorderedList>{['Actions & Inputs', 'Actions & Inputs']}</UnorderedList>
    </StorybookCase>
    <StorybookCase title="Icons">
      <UnorderedList>
        {[
          <IconFilledStar overrides={{size: 'iconSize010'}} />,
          <IconOutlinedStarOutline overrides={{size: 'iconSize010'}} />,
        ]}
      </UnorderedList>
    </StorybookCase>
    <StorybookCase title="Link">
      <UnorderedList overrides={{content: {stylePreset: 'linkStandalone'}}}>
        {[
          <LinkStandalone href="/">
            Click here
            <IconFilledChevronRight overrides={{size: 'iconSize020'}} />
          </LinkStandalone>,
          <LinkStandalone href="/">
            Click here
            <IconFilledChevronRight overrides={{size: 'iconSize020'}} />
          </LinkStandalone>,
        ]}
      </UnorderedList>
    </StorybookCase>
    <StorybookCase title="External link">
      <UnorderedList overrides={{content: {stylePreset: 'linkStandalone'}}}>
        {[
          <LinkStandalone href="https://newskit.co.uk/">
            Click here
          </LinkStandalone>,
          <LinkStandalone href="https://newskit.co.uk/">
            Click here
          </LinkStandalone>,
        ]}
      </UnorderedList>
    </StorybookCase>
  </StorybookPage>
);
StoryUnorderedListVariations.storyName = 'Variations';

export const StoryUnorderedListWithMarker = () => (
  <StorybookPage>
    <StorybookCase title="Markers overridden marker">
      <UnorderedList listItemMarker={IconFilledStar}>{LIST_DATA}</UnorderedList>
    </StorybookCase>
    <StorybookCase title="Markers overridden marker iconSize">
      <UnorderedList
        overrides={{marker: {size: 'iconSize020'}}}
        listItemMarker={IconFilledStar}
      >
        {LIST_DATA}
      </UnorderedList>
    </StorybookCase>
  </StorybookPage>
);
StoryUnorderedListWithMarker.storyName = 'Unordered list with marker';

export const StoryUnorderedListAlignment = () => {
  const multiLineListData = [
    `Unordered list items are not numbered, so use them in instances where ordering is not a factor. Where items are required to appear in numerical order use an ordered list.`,
    `Use unordered lists to break up blocks of related content into manageable bulleted items to make the information easier for users to read.`,
  ];
  return (
    <StorybookPage columns="1fr">
      <StorybookCase title="Marker in the center (default)">
        <UnorderedList>{multiLineListData}</UnorderedList>
      </StorybookCase>
      <StorybookCase title="Marker at the start">
        <UnorderedList markerAlign="start">{multiLineListData}</UnorderedList>
      </StorybookCase>
      <StorybookCase title="Marker at the end">
        <UnorderedList markerAlign="end">{multiLineListData}</UnorderedList>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryUnorderedListAlignment.storyName = 'Alignment';

export const StoryUnorderedListLogicalProps = () => (
  <StorybookPage>
    <StorybookCase>
      <MarginOverridesWrapper>
        <UnorderedList
          overrides={{
            paddingBlock: 'space050',
            marginBlock: 'space050',
            paddingInline: 'space050',
            marginInline: 'space050',
          }}
        >
          {LIST_DATA}
        </UnorderedList>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryUnorderedListLogicalProps.storyName = 'Logical props';

export default {
  title: 'Components/Unordered list',
  component: UnorderedList,
  parameters: {
    nkDocs: {
      title: 'Unordered list',
      url: 'https://newskit.co.uk/components/unordered-list',
      description:
        'Unordered lists make blocks of related text easier to read, structuring information of equal value into manageable bulleted items.',
    },
  },
};
