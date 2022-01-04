import * as React from 'react';

import {TagList, TagData} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {BorderRadiusShape} from '../../themes';
import {TagSize} from '../../tag';
import {TagListLayout} from '../types';
import {styled} from '../../utils/style';

export const name = 'tag-list';

const tagData = (): TagData[] => [
  {
    label: `alpha tag`,
    href: 'http://example.com',
  },
  {
    label: `bravo tag`,
    href: 'http://example.com',
  },
  {
    label: `charlie tag`,
    href: 'http://example.com',
  },
  {
    label: `delta tag`,
    href: 'http://example.com',
  },
  {
    label: `echo tag`,
    href: 'http://example.com',
  },
  {
    label: `foxtrot tag`,
    href: 'http://example.com',
  },
];

const Container = styled.div`
  margin-bottom: 75px;
`;

const SmallContainer = styled(Container)`
  width: 300px;
`;

export const component = () => [
  ...Object.entries(BorderRadiusShape).map(([key, shape]) => (
    <Container>
      <StorybookHeading>{key}</StorybookHeading>

      <StorybookSubHeading>Small</StorybookSubHeading>
      <TagList $size={TagSize.Small} $shape={shape} tagData={tagData()} />

      <StorybookSubHeading>Medium</StorybookSubHeading>
      <TagList $size={TagSize.Medium} $shape={shape} tagData={tagData()} />

      <StorybookSubHeading>Large</StorybookSubHeading>
      <TagList $size={TagSize.Large} $shape={shape} tagData={tagData()} />
    </Container>
  )),
  ...Object.entries(TagListLayout).map(([key, layout]) => (
    <SmallContainer>
      <StorybookHeading>{key}</StorybookHeading>
      <TagList
        $size={TagSize.Small}
        $shape={BorderRadiusShape.Rounded}
        $layout={layout}
        tagData={tagData()}
      />
    </SmallContainer>
  )),
];
