import {TextBlockProps} from '../text-block/types';
import {TextBlock} from '../text-block';
import {logicalProps} from '../utils/logical-properties';

import {getTypographyPreset, getStylePreset, styled} from '../utils/style';

import {AssistiveTextProps} from './types';

export const StyledAssistiveText = styled(TextBlock)<
  Omit<TextBlockProps, 'overrides'> & AssistiveTextProps
>`
  flex: 1;

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
  ${logicalProps()};
`;
