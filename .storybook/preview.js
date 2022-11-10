import React from 'react';
import {createTheme, NewsKitProvider, toNewsKitIcon} from '../src';
import {addDecorator} from '@storybook/react';
import {withThemes} from '@react-theming/storybook-addon';

// const IconArrowDown = toNewsKitIcon(ArrowDropDown);
export const IconOutlinedCustomClose = toNewsKitIcon(
  (props) => (
    <Svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" />
    </Svg>
  ),
);

export const overrides = {
  icons: {
    IconFilledKeyboardArrowDown: IconOutlinedCustomClose,
  },
};

export const factivaTheme = createTheme({
  name: 'factiva-theme',
  overrides,
});


addDecorator(withThemes(NewsKitProvider, [factivaTheme]));
