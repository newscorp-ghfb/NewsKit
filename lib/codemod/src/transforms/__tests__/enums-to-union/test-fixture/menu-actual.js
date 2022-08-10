import {MenuItemAlign, MenuItemSize, Menu, MenuItem} from 'newskit';

const Component = () => (
  <Menu vertical align={MenuItemAlign.Start} size={MenuItemSize.Small}>
    <MenuItem href={href}>Menu item knickknackatory 1</MenuItem>
    <MenuItem href={href}>Menu item knickknackatory 2</MenuItem>
    <MenuItem href={href}>Menu item knickknackatory 3</MenuItem>
  </Menu>
);
