import {Theme} from '../themes';

// TODO: moved here to stop circular dependency. We should move style types here and make the style utils into a folder.
export interface ThemeProp {
  theme: Theme;
}
