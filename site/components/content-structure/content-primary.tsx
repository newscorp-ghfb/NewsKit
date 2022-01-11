import {withDefaultProps} from 'newskit';
import {ContentBase} from './content-base';

export const ContentPrimary = withDefaultProps(
  ContentBase,
  {},
  'contentPrimary',
);
ContentPrimary.displayName = 'ContentPrimary';
