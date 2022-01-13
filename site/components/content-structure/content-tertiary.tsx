import {withDefaultProps} from 'newskit';
import {ContentBase} from './content-base';
import {ContentTertiaryProps} from './types';

export const ContentTertiary = withDefaultProps<ContentTertiaryProps>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ContentBase as any,
  {},
  'contentTertiary',
);
ContentTertiary.displayName = 'ContentTertiary';
