import {Theme} from '../theme';
import {css, styled, getStylePreset, getResponsiveSize} from '../utils/style';
import {BaseDialogView} from '../dialog';
import {DrawerProps} from './types';
import {getTransitionPreset} from '../utils/style/transition-preset';
import {BaseDialogViewProps} from '../dialog/types';
import {logicalProps} from '../utils/logical-properties';

export type DrawerPanelProps = Pick<
  DrawerProps,
  'placement' | 'overrides' | 'open'
>;

const placementOptions = {
  left: {
    top: 0,
    left: 0,
  },
  right: {
    top: 0,
    right: 0,
  },
  top: {
    top: 0,
    left: 0,
  },
  bottom: {
    bottom: 0,
    left: 0,
  },
};

const getPlacementSize = ({
  placement,
  path,
  ...props
}: DrawerPanelProps & Pick<BaseDialogViewProps, 'path'> & {theme: Theme}) => {
  const sizeX =
    placement === 'left' || placement === 'right' ? 'width' : 'height';
  const sizeY =
    placement === 'left' || placement === 'right' ? 'height' : 'width';
  const sizeCap = sizeX.charAt(0).toUpperCase() + sizeX.slice(1);
  const drawerPath = `${path}.panel`;
  return css`
    ${getResponsiveSize(sizeX, drawerPath, 'panel', 'size')(props)}
    ${getResponsiveSize(`max${sizeCap}`, drawerPath, 'panel', 'maxSize')(props)}
    ${getResponsiveSize(`min${sizeCap}`, drawerPath, 'panel', 'minSize')(props)}
    ${sizeY}: 100%;
  `;
};

export const StyledDrawer = styled(BaseDialogView)<
  BaseDialogViewProps & DrawerPanelProps
>`
  ${({placement}) => placementOptions[placement!]};
  ${props => getPlacementSize(props)}

  ${({path}) => getStylePreset(`${path}.panel`, 'panel')};

  ${({placement, path, ...props}) =>
    placement &&
    css`
      ${getTransitionPreset(
        `${path}.panel.${placement}`,
        'panel',
        'nk-drawer',
      )(props)};
    `};
  ${({path}) => logicalProps(`${path}.panel`, 'panel')};
`;
