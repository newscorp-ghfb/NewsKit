import {ReleaseType} from 'semver';

export interface Release {
  published_at: string | null;
  tag_name: string;
  body: string;
  name: string;
  html_url: string;
  created_at: string;
}

export interface FullRelease extends Release {
  change_level: ReleaseType;
  published_at: string;
}

export interface ReleasesPageProps {
  releases: Release[];
}

export type ReleaseBadge = ReleaseType | 'breaking change';
