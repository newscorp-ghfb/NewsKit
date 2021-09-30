import {BaseDialogView} from '../dialog';
import {ModalProps} from './types';
import {styled, getStylePreset, getResponsiveSize} from '../utils/style';
import {getMediaQueryFromTheme} from '../utils';
import {getTransitionPreset} from '../utils/style/transition-preset';

type ModalPanelProps = Pick<ModalProps, 'overrides' | 'open'>;

export const StyledModal = styled(BaseDialogView)<ModalPanelProps>`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  ${getMediaQueryFromTheme('md')} {
    ${getResponsiveSize('top', 'modal.panel', 'panel', 'topOffset')};
    transform: translate(-50%, 0);
  }

  ${getStylePreset('modal.panel', 'panel')};
  ${getResponsiveSize('width', 'modal.panel', 'panel', 'width')};
  ${getResponsiveSize('minWidth', 'modal.panel', 'panel', 'minWidth')};
  ${getResponsiveSize('maxWidth', 'modal.panel', 'panel', 'maxWidth')};
  ${getResponsiveSize('height', 'modal.panel', 'panel', 'height')};
  ${getResponsiveSize('minHeight', 'modal.panel', 'panel', 'minHeight')};
  ${getResponsiveSize('maxHeight', 'modal.panel', 'panel', 'maxHeight')};

  ${getTransitionPreset(`modal.panel`, 'panel', 'nk-modal')};
`;
