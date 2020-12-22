import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormMethods,
} from 'react-hook-form';

export interface FormError extends Object {
  type: string;
  types: string;
  message: string;
  ref: React.RefObject<HTMLInputElement>;
}

export interface FormProps {
  children: Array<React.ReactElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: SubmitHandler<Record<string, any>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmitInvalid?: SubmitErrorHandler<Record<string, any>>;
  validationMode?: 'onBlur' | 'onSubmit';
  reValidationMode?: 'onBlur' | 'onSubmit';
  defaultValues?: Record<string, string>;
}

export interface FormRef {
  reset: UseFormMethods['reset'];
  watch: UseFormMethods['watch'];
  setError: UseFormMethods['setError'];
  clearErrors: UseFormMethods['clearErrors'];
  setValue: UseFormMethods['setValue'];
  getValues: UseFormMethods['getValues'];
  trigger: UseFormMethods['trigger'];
  element: HTMLFormElement | null;
}
