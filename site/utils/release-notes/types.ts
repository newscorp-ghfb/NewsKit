import {ReleaseType} from 'semver';

export interface Release {
  published_at: string;
  tag_name: string;
  body: string;
  name: string;
}

export interface FullRelease extends Release {
  change_level: ReleaseType;
}

export interface ReleasesPageProps {
  releases: Release[];
}

export type ReleaseBadge = ReleaseType | 'breaking change';
