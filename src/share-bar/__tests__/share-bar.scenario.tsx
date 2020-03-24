import * as React from 'react';

import {ShareBar} from '..';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Icon} from '../icon';
import {styled} from '../../utils/style';

export const name = 'share-bar';

const CustomComponent = () => <div>hello</div>;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const component = () => (
  <Container>
    <StorybookSubHeading>Share bar with left aligned items</StorybookSubHeading>
    <ShareBar
      leftIcons={[{type: 'twitter', href: '/'}, {type: 'facebook', href: '/'}]}
    />

    <StorybookSubHeading>
      Share bar with left and right aligned items
    </StorybookSubHeading>
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
    <StorybookSubHeading>
      Share bar with left and right labels
    </StorybookSubHeading>
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
    <StorybookSubHeading>Share bar with custom components</StorybookSubHeading>
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
