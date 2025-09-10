import React from 'react';
import { FlagProps } from '../flag';
import { MQ } from '../utils';
import { ButtonOrButtonLinkProps } from '../button';
export declare const LabelFlag: React.FC<FlagProps & {
    prefix?: string;
}>;
export declare const useActiveState: (initial?: boolean) => [boolean, () => void, () => void, () => void];
export declare const returnLastLetterInCamelCase: (str: string) => string;
export declare const renderCard: (layout: MQ<'vertical' | 'horizontal' | 'horizontal-reverse'>) => React.JSX.Element;
export declare const renderCardInset: (layout: MQ<'vertical' | 'horizontal' | 'horizontal-reverse'>) => React.JSX.Element;
export declare const CTABtn: ({ children, overrides, ...restProps }: ButtonOrButtonLinkProps) => React.JSX.Element;
//# sourceMappingURL=helper.d.ts.map