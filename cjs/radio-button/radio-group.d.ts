import React from 'react';
import { RadioGroupContextValue } from './types';
export declare const RadioGroup: React.ForwardRefExoticComponent<{
    defaultValue?: string | undefined;
    value?: string | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    name?: string | undefined;
    children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "name" | "onChange"> & React.RefAttributes<HTMLInputElement>>;
export declare const useRadioGroupContext: () => RadioGroupContextValue | undefined;
//# sourceMappingURL=radio-group.d.ts.map