import '@emotion/react';
import styled from '@emotion/styled';
import { Theme as DefaultTheme } from '../../theme';
declare module '@emotion/react' {
    interface Theme extends DefaultTheme {
    }
}
export type { CSSObject, SerializedStyles } from '@emotion/react';
export { Global, css, keyframes } from '@emotion/react';
export { styled };
//# sourceMappingURL=emotion.d.ts.map