import * as React from 'react';

import {TagList, TagData} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
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

const tagDataWithoutHref = (): TagData[] => [
  {
    label: `alpha tag`,
  },
  {
    label: `bravo tag`,
  },
];

const Container = styled.div`
  margin-bottom: 35px;
`;

const SmallContainer = styled(Container)`
  width: 300px;
`;

export const component = () => [
  <StorybookHeading>Tags with `href` (render as an anchor)</StorybookHeading>,
  ...Object.entries(TagSize).map(([key, size]) => (
    <Container>
      <StorybookSubHeading>{key}</StorybookSubHeading>
      <TagList $size={size} tagData={tagData()} />
    </Container>
  )),
  ...Object.entries(TagListLayout).map(([key, layout]) => (
    <SmallContainer>
      <StorybookSubHeading>{key}</StorybookSubHeading>
      <TagList $size={TagSize.Small} $layout={layout} tagData={tagData()} />
    </SmallContainer>
  )),
  <StorybookHeading>Tags without `href` (render as a span)</StorybookHeading>,
  ...Object.entries(TagSize).map(([key, size]) => (
    <SmallContainer>
      <StorybookSubHeading>{key}</StorybookSubHeading>
      <TagList $size={size} tagData={tagDataWithoutHref()} />
    </SmallContainer>
  )),
];
