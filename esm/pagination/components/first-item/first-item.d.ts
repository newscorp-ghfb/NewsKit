import React from 'react';
import { NewsKitIconProps } from '../../../icons';
import { Override } from '../../../utils/overrides';
export declare const PaginationFirstItem: React.ForwardRefExoticComponent<Omit<import("../types").PaginationIconButtonProps, "onClick"> & {
    onClick?: ((event: KeyboardEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
} & {
    children?: React.ReactNode;
    overrides?: {
        stylePreset?: import("../../..").MQ<string> | undefined;
        typographyPreset?: import("../../..").MQ<string> | undefined;
        icon?: Override<NewsKitIconProps>;
    } | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=first-item.d.ts.map