import React from 'react';
import {Block, LinkStandalone, TextBlock} from 'newskit';
import {format} from 'date-fns';
import {FullRelease} from '../../utils/release-notes/types';
import ReleaseBadges from './release-badges';
import {GITHUB_URL, REPO} from '../../utils/release-notes/constants';

const ReleaseHeader = ({
  tag_name,
  published_at,
  created_at,
  change_level,
}: Pick<
  FullRelease,
  'tag_name' | 'published_at' | 'change_level' | 'created_at'
>) => (
  <div>
    <Block as="span">
      <LinkStandalone href={`${GITHUB_URL}/${REPO}/releases/tag/${tag_name}`}>
        {tag_name}
      </LinkStandalone>
    </Block>
    <TextBlock
      marginInlineStart="space020"
      as="span"
      stylePreset="inkSubtle"
      typographyPreset="utilityBody030"
    >
      {format(new Date(published_at || created_at), 'MMM d y')}
    </TextBlock>
    <Block as="span" marginInlineStart="space040">
      <ReleaseBadges change_level={change_level} />
    </Block>
  </div>
);

export default ReleaseHeader;
