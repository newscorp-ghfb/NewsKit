/* istanbul ignore file */
import '@emotion/react';
import styled from '@emotion/styled';

import {Theme as DefaultTheme} from '../../theme';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}

export type {CSSObject, SerializedStyles} from '@emotion/react';
export {Global, css, keyframes} from '@emotion/react';
export {styled};
