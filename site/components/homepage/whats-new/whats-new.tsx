import * as React from 'react';
import {FeatureCard} from '../../feature-card';
import {Release} from '../../../utils/release-notes/types';

interface WhatsNewProps {
  releases: Release[];
}

export const WhatsNew = ({releases = []}: WhatsNewProps) => {
  const [latestRelease = {tag_name: ''}] = releases;

  return (
    <FeatureCard
      flagLabel="Latest release"
      title={`NewsKit ${latestRelease.tag_name}`}
      description="This latest release includes new features, bug fixes and other changes."
      buttonLabel="View the release notes"
      stylePrefix="latestReleaseCard"
      layout="horizontal"
      overrides={{
        title: {
          typographyPreset: 'editorialHeadline060',
          stylePreset: 'inkContrast',
        },
        description: {
          typographyPreset: 'editorialSubheadline010',
          stylePreset: 'inkBase',
        },
        button: {
          paddingInline: 'space000',
          stylePreset: 'linkStandalone',
        },
      }}
      buttonHref="/about/release-notes/"
    />
  );
};
