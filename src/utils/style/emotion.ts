import '@emotion/react';
import styled from '@emotion/styled';

import {Theme as DefaultTheme} from '../../theme';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}

export {Global, CSSObject, SerializedStyles, css} from '@emotion/react';
export {styled};
