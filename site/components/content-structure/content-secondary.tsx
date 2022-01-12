import {withDefaultProps} from 'newskit';
import {ContentBase} from './content-base';
import {ContentSecondaryProps} from './types';

export const ContentSecondary = withDefaultProps<ContentSecondaryProps>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ContentBase as any,
  {},
  'contentSecondary',
);
ContentSecondary.displayName = 'ContentSecondary';
