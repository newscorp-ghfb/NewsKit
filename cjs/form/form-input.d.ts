import React from 'react';
import { LabelProps } from '../label';
import { AssistiveTextProps } from '../assistive-text';
import { FormInputTextFieldProps, FormEntryProps, TextFieldSize } from '../text-field/types';
import { FormInputState } from './types';
import { SelectProps } from '../select';
import { TextAreaProps } from '../text-area';
import { CharacterCountProps } from '../character-count';
export type FormInputProps = {
    state?: FormInputState;
    size?: TextFieldSize;
    children?: React.ReactElement | React.ReactElement[];
    id?: string;
} & Omit<FormEntryProps, 'children'>;
export declare const FormInput: import("../utils/with-own-theme").NewsKitReactComponents<FormInputProps>;
export declare const FormInputTextField: React.ForwardRefExoticComponent<FormInputTextFieldProps & React.RefAttributes<HTMLInputElement>>;
export declare const FormInputLabel: ({ children, ...props }: LabelProps) => React.JSX.Element;
export declare const FormInputSelect: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLInputElement>>;
export declare const FormInputAssistiveText: ({ children, validationIcon, overrides, ...props }: React.HTMLAttributes<HTMLParagraphElement> & Omit<import("../with-enhancers/types").WithEnhancersProps, "isFocused" | "enhancersType" | "componentDefaultsPath"> & {
    overrides?: (import("./types").EnhancerOverrides & {
        stylePreset?: import("..").MQ<string> | undefined;
        typographyPreset?: import("..").MQ<string> | undefined;
        minHeight?: import("..").MQ<string> | undefined;
    }) | undefined;
} & {
    validationIcon?: boolean | undefined;
}) => React.JSX.Element;
export declare const FormInputCheckbox: React.ForwardRefExoticComponent<Omit<import("../base-switch").BaseSwitchProps, "overrides" | "path" | "type" | "defaultSwitchSelectorComponent" | "hideFeedback"> & {
    overrides?: import("../checkbox/types").CheckboxOverrides | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const FormInputRadioButton: React.ForwardRefExoticComponent<Omit<import("../base-switch").BaseSwitchProps, "overrides" | "path" | "type" | "defaultSwitchSelectorComponent" | "hideFeedback"> & {
    overrides?: import("../checkbox/types").CheckboxOverrides | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const FormInputTextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export declare const FormInputCharacterCount: (props: Omit<CharacterCountProps, 'inputRef' | 'minLength' | 'maxLength'>) => React.JSX.Element;
//# sourceMappingURL=form-input.d.ts.map