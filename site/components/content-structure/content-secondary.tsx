import {withDefaultProps} from 'newskit';
import {ContentBase} from './content-base';

export const ContentSecondary = withDefaultProps(
  ContentBase,
  {},
  'contentSecondary',
);
ContentSecondary.displayName = 'ContentSecondary';
