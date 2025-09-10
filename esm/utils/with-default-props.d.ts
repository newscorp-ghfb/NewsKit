import React from 'react';
import { DeepPartial } from './types';
type PropsEvalFunction<P> = (props: P) => P;
export declare const withDefaultProps: <P extends {}>(Component: React.ComponentType<P>, defaultProps?: DeepPartial<P> | PropsEvalFunction<P> | undefined, defaultPresetsPath?: string, enhanceOverrides?: object) => React.FC<P>;
export {};
//# sourceMappingURL=with-default-props.d.ts.map