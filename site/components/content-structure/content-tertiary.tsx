import {withDefaultProps} from 'newskit';
import {ContentBase} from './content-base';

export const ContentTertiary = withDefaultProps(
  ContentBase,
  {},
  'contentTertiary',
);
ContentTertiary.displayName = 'ContentTertiary';
