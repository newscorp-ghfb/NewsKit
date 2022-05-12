import React from 'react';
import {
  EnhancerOverrides,
  CommonInputProps,
  FormInputState,
} from '../form/types';
import {EventData} from '../instrumentation';
import {MQ} from '../utils/style';

export type TextFieldSizeType = TextFieldSize | 'small' | 'medium' | 'large';

export enum TextFieldSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface FormInputTextFieldProps
  extends Omit<CommonInputProps, 'size'> {
  size?: TextFieldSizeType; // remove this override when https://nidigitalsolutions.jira.com/browse/PPDSC-1872 is implemented
  overrides?: EnhancerOverrides & {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    minHeight?: MQ<string>;
    width?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    spaceInline?: MQ<string>;
  };
  spellCheck?: boolean;
}

export interface TextFieldProps extends FormInputTextFieldProps, EventData {
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
