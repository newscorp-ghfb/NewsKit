import React from 'react';
import { ButtonProps } from '../../button';
export interface PopoutButtonProps {
    onClick?: (props: PopoutButtonProps) => void;
    href?: string;
    overrides?: ButtonProps['overrides'];
}
export declare const PopoutButton: React.FC<PopoutButtonProps>;
//# sourceMappingURL=popout-button.d.ts.map