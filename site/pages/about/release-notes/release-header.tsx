import React from 'react';
import {Block, LinkStandalone, TextBlock} from 'newskit';
import {format} from 'date-fns';
import {FullRelease} from './types';
import ReleaseBadges from './release-badges';
import {GITHUB_URL, REPO} from './utils';

// todo: change_level badge
// todo: link to version
// todo: format date
const ReleaseHeader = ({
  tag_name,
  published_at,
  change_level,
}: Pick<FullRelease, 'tag_name' | 'published_at' | 'change_level'>) => (
  <div>
    <Block as="span">
      <LinkStandalone href={`${GITHUB_URL}/${REPO}/releases/tag/${tag_name}`}>
        {tag_name}
      </LinkStandalone>
    </Block>
    <Block as="span" marginInlineStart="space020">
      <TextBlock as="span">
        {format(new Date(published_at), 'MMM d y')}
      </TextBlock>
    </Block>
    <Block as="span" marginInlineStart="space040">
      <ReleaseBadges change_level={change_level} />
    </Block>
  </div>
);

export default ReleaseHeader;
