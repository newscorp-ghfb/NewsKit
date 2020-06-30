import {Devices} from '../themes/newskit-light/breakpoints';
import {css, CSSObject, SerializedStyles} from './style';

export const getDeviceQueryFromTheme = (
  targetDevices: Array<Devices>,
  cssRules: CSSObject | SerializedStyles,
) => () => {
  const queries = targetDevices.map(device => {
    switch (device) {
      case Devices.iPadPro:
        return css`
          @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
            ${cssRules}
          }
        `.styles;
      case Devices.iPad:
        return css`
          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
            ${cssRules}
          }
        `.styles;
      default:
        return '';
    }
  });
  return queries.join('');
};
