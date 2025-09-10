import React, { FocusEventHandler } from 'react';
import { ButtonSelectSize, SelectButtonOverrides, SelectOptionProps } from './types';
import { FormInputState } from '../form/types';
interface SelectButtonProps {
    size: ButtonSelectSize;
    placeholder: string;
    isFocused: boolean;
    overrides?: SelectButtonOverrides;
    selectedItem?: React.ReactElement<SelectOptionProps>;
    state?: FormInputState;
    loading?: boolean;
    startEnhancer?: React.ReactNode;
    endEnhancer?: React.ReactNode;
    validationIcon?: React.ReactNode;
    setAllowBlur: Function;
    onSelectButtonBlur: FocusEventHandler<HTMLButtonElement>;
    onSelectButtonFocus: FocusEventHandler<HTMLButtonElement>;
    openMenu: Function;
    itemToString: Function;
    isOpen: boolean;
    selectRef: React.RefObject<HTMLDivElement | null>;
}
export declare const SelectButton: React.ForwardRefExoticComponent<SelectButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=select-button.d.ts.map