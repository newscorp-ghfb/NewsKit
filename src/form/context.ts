import {createContext} from 'react';
import { fieldsHadErrorObject } from './types';

// TODO can I avoid using Function?
export const FormValidationContext= createContext<{validationMode: string, fieldsHadError: fieldsHadErrorObject, setFieldsHadError: Function}>({validationMode: '', fieldsHadError: {}, setFieldsHadError: ()=> {} });
export const FormValidationContextProvider = FormValidationContext.Provider;
