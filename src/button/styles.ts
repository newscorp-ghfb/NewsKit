import {ButtonCommonSizeOption, ButtonSize} from './types';

export const buttonSizeStyleTokens: Record<
  ButtonSize,
  ButtonCommonSizeOption
> = {
  [ButtonSize.Large]: {
    minHeight: 'sizing040',
    borderRadiusSize: 'sizing020',
    typePreset: 'button030',
    iconSize: 'iconSize030',
  },
  [ButtonSize.Medium]: {
    minHeight: 'sizing030',
    borderRadiusSize: 'sizing020',
    typePreset: 'button020',
    iconSize: 'iconSize020',
  },
  [ButtonSize.Small]: {
    minHeight: 'sizing020',
    borderRadiusSize: 'sizing020',
    typePreset: 'button010',
    iconSize: 'iconSize010',
  },
};
