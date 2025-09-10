import { Dispatch, SetStateAction } from 'react';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { TextFieldSize } from '../text-field';
import { FieldsHadErrorObject, FormInputState } from './types';
export declare const FormValidationContext: import("react").Context<{
    validationMode: string;
    fieldsHadError: FieldsHadErrorObject;
    setFieldsHadError: Dispatch<SetStateAction<FieldsHadErrorObject>>;
}>;
export declare const FormValidationContextProvider: import("react").Provider<{
    validationMode: string;
    fieldsHadError: FieldsHadErrorObject;
    setFieldsHadError: Dispatch<SetStateAction<FieldsHadErrorObject>>;
}>;
export declare const FormInputContext: import("react").Context<{
    name?: string | undefined;
    size?: TextFieldSize | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    state?: FormInputState;
    error?: string | undefined;
    ref?: import("react-hook-form/dist/types/form").RefCallBack | undefined;
    refObject?: import("react").RefObject<HTMLInputElement | null> | undefined;
    id?: string | undefined;
    labelId?: string | undefined;
    assistiveTextId?: string | undefined;
    setAssistiveTextId?: ((id: string) => void) | undefined;
    statusIcon?: React.ReactNode;
    isRequired?: boolean | undefined;
    rules?: RegisterOptions<import("react-hook-form").FieldValues, string> | undefined;
}>;
//# sourceMappingURL=context.d.ts.map