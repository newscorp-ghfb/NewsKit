import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form/dist/types/form';
import {
  EnhancerOverrides,
  CommonInputProps,
  FormInputState,
} from '../form/types';
import {EventData} from '../instrumentation';
import {MQ} from '../utils/style';

export type TextFieldSize = 'small' | 'medium' | 'large';

export interface FormInputTextFieldProps
  extends Omit<CommonInputProps, 'size'> {
  size?: TextFieldSize; // remove this override when https://nidigitalsolutions.jira.com/browse/PPDSC-1872 is implemented
  overrides?: EnhancerOverrides & {
    stylePreset?: MQ<string>;
    minHeight?: MQ<string>;
    width?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap for the enhancers. Should be renamed.
  };
  spellCheck?: boolean;
}

export interface TextFieldProps extends FormInputTextFieldProps, EventData {
  name?: string;
}

type FormEntryChildrenProps = {
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: FormInputState;
  ref: UseFormRegisterReturn['ref'];
  refObject: React.RefObject<HTMLInputElement>;
  error?: string;
  hasContent: boolean;
};

type FormValidationRules = Record<string, string | object>;

export type FormEntryProps = {
  rules?: FormValidationRules;
  name?: string;
  children: (props: FormEntryChildrenProps) => React.ReactElement;
};
