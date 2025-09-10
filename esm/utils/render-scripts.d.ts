import React from 'react';
interface ExternalScriptData {
    src: string;
    async?: boolean;
}
interface InlineScriptData {
    content: string;
}
type ScriptData = ExternalScriptData | InlineScriptData;
export interface RenderScriptsReactHelmetProp {
    reactHelmet?: React.ComponentType<{
        script?: Array<any>;
    }>;
    nonce?: string;
}
export interface RenderScriptsProps extends RenderScriptsReactHelmetProp {
    scripts: ScriptData[];
}
export declare const RenderScripts: React.FC<RenderScriptsProps>;
export {};
//# sourceMappingURL=render-scripts.d.ts.map