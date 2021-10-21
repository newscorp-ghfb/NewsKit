import {ColumnMapObject} from './types';

const small = {
  minWidth: {xs: '70px', md: '100px'},
  maxWidth: '100px',
};
const medium = {
  minWidth: '100px',
};
const large = {
  minWidth: '100px',
};

export const columnMap: Record<string, ColumnMapObject> = {
  Item: {...small, cellType: 'number'},
  Order: {...small, cellType: 'number'},
  Argument: {...small, cellType: 'number'},
  Optional: {...small, cellType: 'icon'},
  Required: {...small, cellType: 'icon'},
  Status: {...small, cellType: 'icon'},
  'User Supplied': {...small, cellType: 'checkIcon'},
  Command: {...small, cellType: 'keyboardFlag', noWrap: true},
  Component: {...medium, cellType: 'componentLink', noWrap: true},
  Value: {...medium, cellType: 'flag'},
  Attribute: {...medium, cellType: 'path'},
  Type: {...medium, cellType: 'flag'},
  Default: {...medium, cellType: 'flag'},
  Feature: {...large, cellType: 'text'},
  Date: {...large, cellType: 'text'},
  Element: {...large, cellType: 'text', noWrap: true},
  Description: {...large, cellType: 'text'},
  Notes: {...large, cellType: 'text'},
  'Release Version': {...large, cellType: 'text'},
  Role: {...large, cellType: 'text'},
  Colour: {...medium, cellType: 'colorSwatch'},
  'Colour token': {...medium, cellType: 'colorToken'},
  'Token value': {...medium, cellType: 'token'},
  Token: {...medium, cellType: 'token'},
  'Border radius': {...medium, cellType: 'borderRadius'},
  'Border width': {...medium, cellType: 'borderWidth'},
  'Common uses': {...large, cellType: 'text'},
  'Motion Duration': {...large, cellType: 'motionDurationSwatch'},
  'Motion Timing': {...large, cellType: 'motionTimingSwatch'},
};
