import * as React from 'react';
import {toNewsKitIcon} from 'newskit';

import {ErrorOutline as FilledErrorOutline} from '@emotion-icons/material/ErrorOutline';

const IconFilledErrorOutline = toNewsKitIcon(FilledErrorOutline);

export const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => r + r + g + g + b + b,
    ),
  );
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export const luminance = (r: number, g: number, b: number) => {
  const a = [r, g, b].map(v => {
    const vdiv = v / 255;
    return vdiv <= 0.03928 ? vdiv / 12.92 : ((vdiv + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const getContrast = (color1: string, color2: string) => {
  const rgb1 = hexToRgb(color1)!;
  const rgb2 = hexToRgb(color2)!;
  if (!rgb1 || !rgb2) {
    return 0;
  }
  const luminances = [luminance(...rgb1), luminance(...rgb2)];
  return (Math.min(...luminances) + 0.05) / (Math.max(...luminances) + 0.05);
};

export const getContrastRating = (ratio: number) => {
  switch (true) {
    case ratio < 1 / 7:
      return 'AAA';
    case ratio < 1 / 4.5:
      // return 'AAA(L) / AA';
      return 'AA';
    case ratio < 1 / 3:
      return 'AA(L)';
    default:
      return <IconFilledErrorOutline overrides={{size: 'iconSize020'}} />;
  }
};

export const getBrightness = (rgbString: string) => {
  const g = parseInt(rgbString.slice(3, 5), 16) / 255;
  const r = parseInt(rgbString.slice(1, 3), 16) / 255;
  const b = parseInt(rgbString.slice(5, 7), 16) / 255;
  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
};
