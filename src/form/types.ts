import React from 'react';
import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
} from 'react-hook-form';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface FormError extends Object {
  type: string;
  types: string;
  message: string;
  ref: React.RefObject<HTMLInputElement>;
}

export interface FormProps
  extends React.HtmlHTMLAttributes<HTMLFormElement>,
    LogicalProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: SubmitHandler<Record<string, any>>;
  onSubmitInvalid?: SubmitErrorHandler<Record<string, string>>;
  validationMode?: 'onBlur' | 'onSubmit';
  reValidationMode?: 'onBlur' | 'onSubmit';
  defaultValues?: Record<string, string>;
  resolver?: UseFormProps['resolver'];
}

export interface FormRef {
  clearValidation: () => void;
  reset: UseFormReturn['reset'];
  watch: UseFormReturn['watch'];
  setError: UseFormReturn['setError'];
  setValue: UseFormReturn['setValue'];
  getValues: UseFormReturn['getValues'];
  trigger: UseFormReturn['trigger'];
  control: UseFormReturn['control'];
  element: HTMLFormElement | null;
}

export type FieldsHadErrorObject = Record<string, {hadError: boolean}>;

export type FormInputState = 'disabled' | 'valid' | 'invalid' | undefined;

export type CommonInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  size?: 'small' | 'medium' | 'large';
  state?: FormInputState;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
};

export interface EnhancerOverrides extends LogicalProps {
  startEnhancer?: {
    spaceInline?: MQ<string>;
    iconSize?: MQ<string>;
  };
  endEnhancer?: {
    spaceInline?: MQ<string>;
    iconSize?: MQ<string>;
  };
}
