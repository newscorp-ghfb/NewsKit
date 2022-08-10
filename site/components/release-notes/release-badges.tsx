import React from 'react';
import {Block, Flag} from 'newskit';
import {FullRelease, ReleaseBadge} from '../../utils/release-notes/types';

const releaseBadgePresets: {[key in ReleaseBadge]: string} = {
  patch: 'flagSolidPatch',
  prepatch: 'flagSolidPatch',
  minor: 'flagSolidMinor',
  preminor: 'flagSolidMinor',
  major: 'flagSolidMajor',
  premajor: 'flagSolidMajor',
  prerelease: 'flagSolidPatch',
  'breaking change': 'flagSolidBreakingChange',
};

const ReleaseBadges = ({change_level}: Pick<FullRelease, 'change_level'>) => {
  const badges: ReleaseBadge[] = [change_level];
  if (change_level === 'major') {
    badges.push('breaking change');
  }
  return (
    <>
      {badges.map(badge => (
        <Block key={badge} as="span" marginInlineEnd="space020">
          <Flag
            overrides={{
              stylePreset: releaseBadgePresets[badge],
              typographyPreset: 'utilityLabel010',
            }}
          >
            {`${badge.slice(0, 1).toUpperCase()}${badge.substr(1)}`}
          </Flag>
        </Block>
      ))}
    </>
  );
};

export default ReleaseBadges;
