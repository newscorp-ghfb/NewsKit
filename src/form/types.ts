import {
  Resolver,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

export interface FormError extends Object {
  type: string;
  types: string;
  message: string;
  ref: React.RefObject<HTMLInputElement>;
}

export interface FormProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: SubmitHandler<Record<string, any>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmitInvalid?: SubmitErrorHandler<Record<string, any>>;
  validationMode?: 'onBlur' | 'onSubmit';
  reValidationMode?: 'onBlur' | 'onSubmit';
  defaultValues?: Record<string, string>;
  resolver?: Resolver<Record<string, string>, object>;
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
