import {EnhancerOverrides, FormInputState} from '../form/types';
import {MQ} from '../utils/style';

export type WithEnhancersType = 'input' | 'icons';

type WithEnhancerSelfAlign = 'start' | 'center' | 'end';
type WithEnhancerMarginPosition = 'inside' | 'outside';

export interface EnhancerProps {
  componentDefaultsPath: string;
  valid?: boolean;
  invalid?: boolean;
  position: 'startEnhancer' | 'endEnhancer';
  children: React.ReactNode;
  marginPosition?: WithEnhancerMarginPosition;
  alignSelf?: WithEnhancerSelfAlign;
  overrides?: {
    spaceInline?: MQ<string>;
  };
}

export interface WithEnhancersProps {
  componentDefaultsPath: string;
  isFocused?: boolean;
  children: React.ReactNode;
  overrides?: EnhancerOverrides;
  marginPosition?: WithEnhancerMarginPosition;
  alignSelf?: WithEnhancerSelfAlign;
  size?: 'small' | 'medium' | 'large';
  state?: FormInputState;
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
}
