import baseStyled, {CreateStyled} from '@emotion/styled';
import {Theme} from '../../theme';

export {CSSObject, SerializedStyles} from '@emotion/core';
export {css} from '@emotion/core';

// Cast styled with the Theme so we don't have to specify theme at every usage.
export const styled = baseStyled as CreateStyled<Theme>;
