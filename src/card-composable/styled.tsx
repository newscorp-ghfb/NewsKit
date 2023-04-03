import {
  getStylePreset,
  getTransitionPresetFromTheme,
  styled,
} from '../utils/style';

import {GridLayout} from '../grid-layout/grid-layout';
import {CardLinkProps, StylableGridLayout} from './types';

type StyledGridLayoutProps = StylableGridLayout & {
  areaName?: string;
};

const StyledGrid = styled(GridLayout)<StyledGridLayoutProps>`
  ${getStylePreset('', '')};
  ${({areaName}) => areaName && `grid-area: ${areaName};`}
`;

export const StyledCard = styled(StyledGrid)`
  position: relative;
  // TODO: move to defaults
  ${getTransitionPresetFromTheme('backgroundColorChange')}
`;

export const StyledMedia = styled(StyledGrid)``;
export const StyledContent = styled(StyledGrid)``;

export const StyledActions = styled(StyledGrid)`
  position: relative;
  z-index: 2;
`;

export const StyledLink = styled(StyledGrid)<CardLinkProps>`
  text-decoration: none;
  ${({expand}) =>
    expand &&
    `
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
    }
    `}
`;
