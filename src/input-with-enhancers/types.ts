import {EnhancerOverrides, CommonInputProps} from '../form/types';
import {MQ} from '../utils/style';

export interface EnhancerProps {
  componentDefaultsPath: string;
  valid?: boolean;
  invalid?: boolean;
  position?: 'startEnhancer' | 'endEnhancer';
  children: React.ReactNode;
  overrides?: {
    spaceInline?: MQ<string>;
  };
}

export interface InputWithEnhancersProps extends CommonInputProps {
  componentDefaultsPath: string;
  isFocused: boolean;
  children: React.ReactNode;
  overrides?: EnhancerOverrides;
}
