import * as React from 'react';
import {Svg, IconSizeKeys, ColorKeys, Theme, withTheme} from 'newskit';

interface TonalityProps {
  size: IconSizeKeys;
  color: ColorKeys;
}

const Tonality: React.FC<TonalityProps & {theme: Theme}> = props => (
  <Svg viewBox="0 0 40 40" {...props} title="Tonality icon">
    <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M11,19.93 C7.06,19.44 4,16.08 4,12 C4,7.92 7.05,4.56 11,4.07 L11,19.93 L11,19.93 Z M13,4.07 C14.03,4.2 15,4.52 15.87,5 L13,5 L13,4.07 L13,4.07 Z M13,7 L18.24,7 C18.49,7.31 18.72,7.65 18.92,8 L13,8 L13,7 L13,7 Z M13,10 L19.74,10 C19.82,10.33 19.89,10.66 19.93,11 L13,11 L13,10 L13,10 Z M13,19.93 L13,19 L15.87,19 C15,19.48 14.03,19.8 13,19.93 L13,19.93 Z M18.24,17 L13,17 L13,16 L18.92,16 C18.72,16.35 18.49,16.69 18.24,17 L18.24,17 Z M19.74,14 L13,14 L13,13 L19.93,13 C19.89,13.34 19.82,13.67 19.74,14 L19.74,14 Z" />
  </Svg>
);

export default withTheme(Tonality);
