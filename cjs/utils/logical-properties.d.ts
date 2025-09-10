import { CSSObject, MQ } from './style';
import { ThemeProp } from './style-types';
export interface LogicalMarginProps {
    marginInlineStart?: MQ<string>;
    marginInlineEnd?: MQ<string>;
    marginInline?: MQ<string>;
    marginBlockStart?: MQ<string>;
    marginBlockEnd?: MQ<string>;
    marginBlock?: MQ<string>;
}
export interface LogicalPaddingProps {
    paddingInlineStart?: MQ<string>;
    paddingInlineEnd?: MQ<string>;
    paddingInline?: MQ<string>;
    paddingBlockStart?: MQ<string>;
    paddingBlockEnd?: MQ<string>;
    paddingBlock?: MQ<string>;
}
export interface LogicalProps extends LogicalMarginProps, LogicalPaddingProps {
}
export declare const logicalMargins: (props: ThemeProp, defaultsPath?: string, overridesPath?: string) => CSSObject;
export declare const logicalPadding: (props: ThemeProp, defaultsPath?: string, overridesPath?: string) => CSSObject;
export declare const logicalProps: (defaultsPath?: string, overridesPath?: string) => (props: ThemeProp) => CSSObject;
export declare const logicalPaddingProps: (defaultsPath?: string, overridesPath?: string) => (props: ThemeProp) => CSSObject;
export declare const logicalMarginProps: (defaultsPath?: string, overridesPath?: string) => (props: ThemeProp) => CSSObject;
export declare const omitLogicalPropsFromOverrides: (overrides: object | undefined) => Partial<Record<string, unknown>>;
export declare const omitLogicalMarginPropsFromOverrides: (overrides: object | undefined) => Partial<Record<string, unknown>>;
export declare const omitLogicalPaddingPropsFromOverrides: (overrides: object | undefined) => Partial<Record<string, unknown>>;
export declare const extractLogicalPropsFromOverrides: (overrides: object | undefined) => Partial<Record<string, unknown>>;
export declare const getLogicalPropsAndTypographyPreset: (defaultsPath?: string, overridesPath?: string) => (props: ThemeProp) => CSSObject;
//# sourceMappingURL=logical-properties.d.ts.map