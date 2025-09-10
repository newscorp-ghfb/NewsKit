import React from 'react';
export declare const AccordionGroup: React.ForwardRefExoticComponent<{
    defaultExpanded?: number | "all" | number[] | undefined;
    expanded?: number | "all" | number[] | undefined;
    onChange?: ((expanded: number[]) => void) | undefined;
    expandSingle?: boolean | undefined;
    children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=accordion-group.d.ts.map