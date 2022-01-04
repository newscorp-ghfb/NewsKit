import * as React from 'react';

import {ShareBar} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Icon} from '../icon';
import {styled} from '../../utils/style';

export const name = 'share-bar';

const CustomComponent = () => <div>hello</div>;

const Container = styled.div`
  width: 800px;
  margin: auto;
`;

export const component = () => (
  <Container>
    <StorybookHeading>Share bar with left aligned items</StorybookHeading>
    <ShareBar
      leftIcons={[{type: 'twitter', href: '/'}, {type: 'facebook', href: '/'}]}
    />

    <StorybookHeading>
      Share bar with left and right aligned items
    </StorybookHeading>
    <ShareBar
      leftIcons={[{type: 'twitter', href: '/'}, {type: 'facebook', href: '/'}]}
      rightIcons={[
        {
          type: 'bookmark',
          href: '/',
          $borderEnabled: true,
        },
      ]}
    />
    <StorybookHeading>Share bar with left and right labels</StorybookHeading>
    <ShareBar
      leftLabel="Share"
      rightLabel="Save"
      leftIcons={[{type: 'twitter', href: '/'}, {type: 'facebook', href: '/'}]}
      rightIcons={[
        {
          type: 'bookmark',
          href: '/',
          $borderEnabled: true,
        },
      ]}
    />
    <StorybookHeading>Share bar with custom components</StorybookHeading>
    <ShareBar
      leftLabel="Share"
      rightLabel="Save"
      leftIcons={[{type: 'twitter', href: '/'}, <CustomComponent />]}
      rightIcons={[
        <Icon type="save" />,
        {
          type: 'bookmark',
          href: '/',
          $borderEnabled: true,
        },
      ]}
    />
  </Container>
);
