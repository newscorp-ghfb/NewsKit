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
const xlarge = {
  minWidth: '200px',
};
const xxlarge = {
  maxWidth: '500px',
};

export const columnMap: Record<string, ColumnMapObject> = {
  Item: {...small, cellType: 'number'},
  Order: {...small, cellType: 'number'},
  Argument: {...small, cellType: 'number'},
  Optional: {...small, cellType: 'icon'},
  Required: {...small, cellType: 'icon'},
  Status: {...small, cellType: 'icon'},
  'User supplied': {...small, cellType: 'checkIcon'},
  Command: {...medium, cellType: 'keyboardFlag', noWrap: true},
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
  'Token value': {...medium, cellType: 'flag'},
  Token: {...medium, cellType: 'flag'},
  'Border radius': {...medium, cellType: 'borderRadius'},
  'Border width': {...medium, cellType: 'borderWidth'},
  'Outline Style': {...medium, cellType: 'outlineStyle'},
  'Outline Width': {...medium, cellType: 'outlineWidth'},
  'Outline Offset': {...medium, cellType: 'outlineOffset'},
  'Safari Outline Style': {...medium, cellType: 'safariOutlineStyle'},
  'Safari Outline Offset': {...medium, cellType: 'safariOutlineOffset'},
  'Common uses': {...xlarge, cellType: 'text'},
  Duration: {...large, cellType: 'motionDurationSwatch'},
  Timing: {...large, cellType: 'motionTimingSwatch'},
  Shadow: {...medium, cellType: 'boxShadow'},
  Opacity: {...medium, cellType: 'boxOpacity'},
  Tint: {...medium, cellType: 'boxOverlay'},
  Gradient: {...medium, cellType: 'boxGradient'},
  'Font family': {...medium, cellType: 'text'},
  'Font size': {
    ...xxlarge,
    cellType: 'fontSize',
    noWrap: true,
    cellHeader: 'Example',
  },
  'Font weight': {...medium, cellType: 'fontWeight', cellHeader: 'Example'},
  'Font line height': {
    ...medium,
    cellType: 'fontLineHeight',
    cellHeader: 'Example',
  },
  'Font letter spacing': {
    ...medium,
    cellType: 'fontLetterSpacing',
    cellHeader: 'Example',
  },
  'Typography font family': {
    ...medium,
    cellType: 'flag',
    cellHeader: 'Font Family',
  },
  'Typography font size': {
    ...medium,
    cellType: 'flag',
    cellHeader: 'Font Size',
  },
  'Typography line height': {
    ...medium,
    cellType: 'flag',
    cellHeader: 'Line Height',
  },
  'Typography font weight': {
    ...medium,
    cellType: 'flag',
    cellHeader: 'Font Weight',
  },
  'Typography letter spacing': {
    ...medium,
    cellType: 'flag',
    cellHeader: 'Letter Spacing',
  },
  'Typography preset': {
    ...xxlarge,
    cellType: 'typographyPreset',
    cellHeader: 'Example',
  },
  State: {...medium, cellType: 'flag'},
  'Size box': {...medium, cellType: 'sizeBox', cellHeader: 'Example'},
  Key: {...small, cellType: 'text'},
};
