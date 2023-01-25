import {Theme} from 'newskit';
import {Dispatch, SetStateAction} from 'react';
import {ThemeNames} from '../colors-theme-list';

export interface ThemeControlsProps {
  hexesObj: object;
  getThemeFromList: (themeName: ThemeNames, version: 'light' | 'dark') => Theme;
  svgCodeGroup?: [string];
  setSvgCodeGroup: Dispatch<SetStateAction<[string] | undefined>>;
  baseSvgCodeGroup?: [{figmaSvg: string; name: string}];
  currentThemeName: ThemeNames;
  setCurrentThemeName: Dispatch<SetStateAction<ThemeNames>>;
}

export interface DownloadControlsProps {
  hexesObj: object;
  baseSvgCodeGroup?: [{figmaSvg: string; name: string}];
  svgCodeGroup?: [string];
}
