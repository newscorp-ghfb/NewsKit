import React from 'react';
import {
  EnhancerOverrides,
  CommonInputProps,
  FormInputState,
} from '../form/types';
import {MQ} from '../utils/style';

export enum TextFieldSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface FormInputTextFieldProps
  extends Omit<CommonInputProps, 'size'> {
  size?: TextFieldSize | 'small' | 'medium' | 'large'; // remove this override when https://nidigitalsolutions.jira.com/browse/PPDSC-1872 is implemented
  overrides?: EnhancerOverrides & {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    minHeight?: string;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    spaceInline?: MQ<string>;
  };
  spellCheck?: boolean;
}

export interface TextFieldProps extends FormInputTextFieldProps {
  rules?: FormValidationRules;
  name?: string;
}

type FormEntryChildrenProps = {
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: FormInputState;
  ref: React.Ref<HTMLInputElement>;
  error?: string;
};

type FormValidationRules = Record<string, string | object>;

export type FormEntryProps = {
  rules?: FormValidationRules;
  name?: string;
  children: (props: FormEntryChildrenProps) => React.ReactElement;
};
