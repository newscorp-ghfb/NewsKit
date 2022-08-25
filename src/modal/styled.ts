import {BaseDialogView} from '../dialog';
import {ModalProps} from './types';
import {styled, getStylePreset, getResponsiveSize} from '../utils/style';
import {getMediaQueryFromTheme} from '../utils';
import {getTransitionPreset} from '../utils/style/transition-preset';
import {logicalProps} from '../utils/logical-properties';

type ModalPanelProps = Pick<ModalProps, 'overrides' | 'open'>;

export const StyledModalWrapper = styled.div<
  Pick<ModalProps, 'overrides' | 'inline'> & {$open: boolean}
>`
  ${({$open, inline}) =>
    $open &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
      // Remove events on the modal wrapper so that users can click on the content behind it ( like overlay or body )
      pointer-events: none;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: ${inline ? 'absolute' : 'fixed'};
  `}
`;

export const StyledModal = styled(BaseDialogView)<ModalPanelProps>`
  // adds pointer events which are removed by its parent ( StyledModalWrapper ) so that modal is interactive
  pointer-events: all;

  ${getMediaQueryFromTheme('md')} {
    ${getResponsiveSize('top', 'modal.panel', 'panel', 'topOffset')};
  }

  ${getStylePreset('modal.panel', 'panel')};
  ${getResponsiveSize('width', 'modal.panel', 'panel', 'width')};
  ${getResponsiveSize('minWidth', 'modal.panel', 'panel', 'minWidth')};
  ${getResponsiveSize('maxWidth', 'modal.panel', 'panel', 'maxWidth')};
  ${getResponsiveSize('height', 'modal.panel', 'panel', 'height')};
  ${getResponsiveSize('minHeight', 'modal.panel', 'panel', 'minHeight')};
  ${getResponsiveSize('maxHeight', 'modal.panel', 'panel', 'maxHeight')};

  ${getTransitionPreset(`modal.panel`, 'panel', 'nk-modal')};

  ${logicalProps('modal.panel', 'panel')}
`;
