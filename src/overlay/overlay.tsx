import React from 'react';
import {useLockBodyScroll} from '../utils/hooks';
import {styled, getStylePreset, MQ} from '../utils/style';

interface OverlayProps {
  onClick?: () => void;
  overrides?: {
    stylePreset?: MQ<string>;
  };
}

const StyledOverlay = styled.div<Pick<OverlayProps, 'overrides'>>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 70;
  cursor: pointer;
  ${getStylePreset('overlay', '')}
`;

export const Overlay: React.FC<OverlayProps> = props => {
  useLockBodyScroll();

  return <StyledOverlay data-testid="overlay" {...props} />;
};
