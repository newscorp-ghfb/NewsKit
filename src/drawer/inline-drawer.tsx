import {withDefaultProps} from '../utils/with-default-props';
import {Drawer} from './drawer';

export const InlineDrawer = withDefaultProps(
  Drawer,
  {inline: true},
  'inlineDrawer',
);
