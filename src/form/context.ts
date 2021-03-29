import {createContext, Dispatch, SetStateAction} from 'react';
import {fieldsHadErrorObject} from './types';

/* istanbul ignore next */
const noop = () => {
  /* no op */
};

export const FormValidationContext = createContext<{
  validationMode: string;
  fieldsHadError: fieldsHadErrorObject;
  setFieldsHadError: Dispatch<SetStateAction<fieldsHadErrorObject>>;
}>({
  validationMode: '',
  fieldsHadError: {},
  setFieldsHadError: noop,
});
export const FormValidationContextProvider = FormValidationContext.Provider;
