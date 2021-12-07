import {EnhancerOverrides} from '../form/types';
import {MQ} from '../utils/style';
import {WithEnhancersProps} from '../with-enhancers/types';

export type AssistiveTextProps = React.HTMLAttributes<HTMLParagraphElement> &
  Omit<
    WithEnhancersProps,
    'enhancersType' | 'isFocused' | 'componentDefaultsPath'
  > & {
    overrides?: EnhancerOverrides & {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      minHeight?: MQ<string>;
    };
  };
