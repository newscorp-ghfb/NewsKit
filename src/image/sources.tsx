import React from 'react';
import {BreakpointKeys, useTheme} from '../theme';
import {getMediaQueryFromTheme} from '../utils';
import {ImageSource} from './types';
import {getNextBreakpoint} from './utils';

export const Sources = ({sources}: {sources: ImageSource[]}) => {
  const theme = useTheme();
  const {breakpoints} = theme;
  const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];
  const breakpointKeysFromAllSources = sources
    .reduce((bps, {media}) => {
      if (
        breakpointKeys.indexOf(media as BreakpointKeys) >= 0 &&
        bps.indexOf(media as BreakpointKeys) === -1
      ) {
        bps.push(media as BreakpointKeys);
      }
      return bps;
    }, [] as BreakpointKeys[])
    .sort((a, b) => breakpointKeys.indexOf(a) - breakpointKeys.indexOf(b));

  return (
    <>
      {sources.map(({media, ...sourceAttr}) => {
        let mediaQuery = media;
        const usesBreakpointKey =
          breakpointKeys.indexOf(media as BreakpointKeys) >= 0;
        if (media && usesBreakpointKey) {
          const nextBreakpoint = getNextBreakpoint(
            media as BreakpointKeys,
            breakpointKeysFromAllSources,
          );
          mediaQuery = getMediaQueryFromTheme(
            media as BreakpointKeys,
            nextBreakpoint,
          )({
            theme,
          }).replace('@media ', '');
        }

        return (
          <source
            key={`${media}-${sourceAttr.type}-${sourceAttr.srcSet}`}
            media={mediaQuery}
            {...sourceAttr}
          />
        );
      })}
    </>
  );
};
