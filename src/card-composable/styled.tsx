import {getStylePreset, getTransitionPreset, styled} from '../utils/style';

import {GridLayout} from '../grid-layout/grid-layout';
import {CardLinkProps, StylableGridLayout} from './types';
import {LinkStandalone} from '../link';

type StyledGridLayoutProps = StylableGridLayout & {
  areaName?: string;
};

const StyledGrid = styled(GridLayout)<StyledGridLayoutProps>`
  ${getStylePreset('', '')};
  ${getTransitionPreset('', '')};
  ${({areaName}) => areaName && `grid-area: ${areaName};`}
`;

export const StyledCard = styled(StyledGrid)`
  position: relative;
`;

export const StyledMedia = StyledGrid;
export const StyledContent = StyledGrid;

export const StyledActions = styled(StyledGrid)`
  position: relative;
  z-index: 2;
`;

export const StyledLink = styled(LinkStandalone)<CardLinkProps>`
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
