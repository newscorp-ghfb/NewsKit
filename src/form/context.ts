import {createContext, Dispatch, SetStateAction} from 'react';
import {fieldsHadErrorObject} from './types';

export const FormValidationContext = createContext<{
  validationMode: string;
  fieldsHadError: fieldsHadErrorObject;
  setFieldsHadError: Dispatch<SetStateAction<fieldsHadErrorObject>>;
}>({validationMode: '', fieldsHadError: {}, setFieldsHadError: () => {}});
export const FormValidationContextProvider = FormValidationContext.Provider;
