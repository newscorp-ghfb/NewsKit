import {createContext, Dispatch, SetStateAction} from 'react';
import {UseFormRegisterReturn} from 'react-hook-form/dist/types/form';
import {TextFieldSize} from '../text-field';
import {FieldsHadErrorObject, FormInputState} from './types';

/* istanbul ignore next */
const noop = () => {
  /* no op */
};

export const FormValidationContext = createContext<{
  validationMode: string;
  fieldsHadError: FieldsHadErrorObject;
  setFieldsHadError: Dispatch<SetStateAction<FieldsHadErrorObject>>;
}>({
  validationMode: '',
  fieldsHadError: {},
  setFieldsHadError: noop,
});
export const FormValidationContextProvider = FormValidationContext.Provider;

// todo: update name, onChange and onBlur to match UseFormRegisterReturn types
export const FormInputContext = createContext<{
  name?: string;
  size?: TextFieldSize;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  state?: FormInputState;
  error?: string;
  ref?: UseFormRegisterReturn['ref']; // this is the react-form callback that we need to pass to the input element
  refObject?: React.RefObject<HTMLInputElement>; // this is a ref to the input element itself
  id?: string;
  labelId?: string;
  assistiveTextId?: string;
  setAssistiveTextId?: (id: string) => void;
  statusIcon?: React.ReactNode;
  isRequired?: boolean;
}>({});
