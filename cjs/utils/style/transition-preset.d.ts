import { TransitionToken } from '../../theme/types';
import { ThemeProp } from '../style-types';
import { CSSObject } from './emotion';
import { MQ } from './types';
export declare const getTransitionPresetFromTheme: <Props extends ThemeProp>(token: MQ<TransitionToken> | MQ<TransitionToken[]>, componentClassName?: string) => (props: Props) => "" | {
    [index: string]: CSSObject;
};
export declare const getTransitionPreset: <Props extends ThemeProp>(defaultPath: string | undefined, overridePath?: string | false, componentClassName?: string) => (props: Props) => any;
//# sourceMappingURL=transition-preset.d.ts.map