import {createContext, Dispatch, SetStateAction} from 'react';
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

export const FormInputContext = createContext<{
  name?: string;
  size?: TextFieldSize;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  state?: FormInputState;
  error?: string;
  ref?: React.Ref<HTMLInputElement>;
  id?: string;
  labelId?: string;
  assistiveTextId?: string;
  setAssistiveTextId?: (id: string) => void;
  statusIcon?: React.ReactNode;
  isRequired?: boolean;
}>({});
