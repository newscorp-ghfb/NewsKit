import React from 'react';
import {MQ} from '../utils/style';

export enum TextFieldSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type FormInputState = 'disabled' | 'valid' | 'invalid' | undefined;

type CommonProps = {
  size?: TextFieldSize;
  state?: FormInputState;
};

export type LabelProps = CommonProps &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    children: React.ReactNode;
    overrides?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      spaceStack?: MQ<string>;
      spaceInline?: MQ<string>;
    };
  };

export type AssistiveTextProps = CommonProps &
  React.HTMLAttributes<HTMLParagraphElement> & {
    children: React.ReactNode;
    overrides?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
      minHeight?: string;
    };
  };
export interface FormInputTextFieldProps
  extends CommonProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  overrides?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
    minHeight?: string;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    spaceInline?: MQ<string>;
    startEnhancer?: {
      spaceInline?: MQ<string>;
      iconSize?: MQ<string>;
    };
    endEnhancer?: {
      spaceInline?: MQ<string>;
      iconSize?: MQ<string>;
    };
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
