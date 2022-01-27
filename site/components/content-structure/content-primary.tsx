import {withDefaultProps} from 'newskit';
import {ContentBase} from './content-base';
import {ContentPrimaryProps} from './types';

export const ContentPrimary = withDefaultProps<ContentPrimaryProps>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ContentBase as any,
  {},
  'contentPrimary',
);
ContentPrimary.displayName = 'ContentPrimary';
