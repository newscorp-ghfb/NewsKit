import React from 'react';
import { ButtonSelectSize, SelectPanelOverrides, SelectOptionProps } from './types';
import { ModalProps } from '../modal';
import { Override } from '../utils/overrides';
interface SelectPanelProps {
    isOpen: boolean;
    top: number;
    left: number;
    size: ButtonSelectSize;
    overrides?: {
        panel?: SelectPanelOverrides;
        modal?: Override<ModalProps>;
    };
    children: React.ReactElement<SelectOptionProps>[];
    renderInModal: boolean;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    closeMenu: Function;
    strategy: 'fixed' | 'absolute';
    zIndex: string;
}
export declare const StyledOptionWithPrivateProps: React.ForwardRefExoticComponent<Omit<SelectOptionProps & StyledOptionPrivateProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const SelectPanel: React.ForwardRefExoticComponent<SelectPanelProps & React.RefAttributes<HTMLDivElement>>;
interface StyledOptionPrivateProps {
    ref: React.Ref<HTMLDivElement>;
    $size: ButtonSelectSize;
    $focused?: boolean;
    $selected?: boolean;
}
export {};
//# sourceMappingURL=select-panel.d.ts.map