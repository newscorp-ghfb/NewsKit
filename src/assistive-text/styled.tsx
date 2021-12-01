import {TextBlockProps} from '../text-block/types';
import {TextBlock} from '../text-block';
import {Block, BlockProps} from '../block';

import {
  getResponsiveSize,
  getTypographyPreset,
  getStylePreset,
  styled,
} from '../utils/style';

import {AssistiveTextProps} from './types';

export const StyledAssistiveTextContainer = styled(Block)<
  Omit<BlockProps, 'overrides'> &
    Pick<AssistiveTextProps, 'size' | 'children' | 'overrides'>
>`
  ${({size}) =>
    getResponsiveSize('minHeight', `assistiveText.${size}`, '', 'minHeight')};
`;

export const StyledAssistiveText = styled(TextBlock)<
  Omit<TextBlockProps, 'overrides'> & AssistiveTextProps
>`
  ${({size, state}) =>
    getStylePreset(`assistiveText.${size}`, '', {
      isInvalid: state === 'invalid',
      isDisabled: state === 'disabled',
      isValid: state === 'valid',
    })}
  ${({size}) =>
    getTypographyPreset(`assistiveText.${size}`, '', {
      withCrop: true,
    })}
`;
