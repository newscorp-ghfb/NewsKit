/// <reference types="react" />
import { DrawerProps } from './types';
import { BaseDialogViewProps } from '../dialog/types';
export type DrawerPanelProps = Pick<DrawerProps, 'placement' | 'overrides' | 'open'>;
export declare const StyledDrawer: import("@emotion/styled").StyledComponent<BaseDialogViewProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & DrawerPanelProps, {}, {}>;
//# sourceMappingURL=styled.d.ts.map