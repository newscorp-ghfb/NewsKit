import {TextBlock} from '../text-block';

import {
  getTypographyPreset,
  getStylePreset,
  styled,
  getResponsiveSize,
} from '../utils/style';
import {CharacterCountProps} from './types';
import {FormInputState} from '../form/types';
import {logicalProps} from '../utils/logical-properties';

export const StyledCharacterCount = styled(TextBlock)<
  Pick<CharacterCountProps, 'size' | 'overrides'> & {state: FormInputState}
>`
  ${({size, state}) =>
    getStylePreset(`characterCount.${size}`, '', {
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })}
  ${({size}) =>
    getTypographyPreset(`characterCount.${size}`, '', {
      withCrop: true,
    })}

  ${({size}) =>
    getResponsiveSize('minHeight', `characterCount.${size}`, '', 'minHeight')}

  ${({size}) => logicalProps(`characterCount.${size}`)};
`;
