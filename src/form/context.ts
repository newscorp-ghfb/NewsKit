import {createContext, Dispatch, SetStateAction} from 'react';
import {FieldsHadErrorObject} from './types';

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
