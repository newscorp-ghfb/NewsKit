import React from 'react';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

export const isLinkExternal = (href: string) => {
  const hostName = href?.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);

  if (hostName && typeof window !== 'undefined') {
    const hostLocation = window.location.host;
    if (hostName[1] !== hostLocation.replace('www.', '')) {
      return true;
    }
  }
  return false;
};

export const withLinkTheme = <P extends {}>(
  BaseComponent: React.ComponentType<P> | React.ForwardRefExoticComponent<P>,
) => withOwnTheme(BaseComponent)({defaults, stylePresets});
