import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {useTheme} from '../theme';
import {getTransitionDuration} from '../utils/get-transition-duration';
import {useLockBodyScroll} from '../utils/hooks';
import {styled, getStylePreset, MQ, getResponsiveSpace} from '../utils/style';
import {getTransitionPreset} from '../utils/style/transition-preset';

interface OverlayProps {
  open: boolean;
  onClick?: () => void;
  overrides?: {
    zIndex?: number;
    stylePreset?: MQ<string>;
  };
}

// getResponsiveSpace('zIndex') will be replaced with a new function once PPDSC-1711 is done
const StyledOverlay = styled.div<Pick<OverlayProps, 'overrides'>>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${getResponsiveSpace('zIndex', `overlay`, '', 'zIndex')};
  cursor: pointer;
  ${getStylePreset('overlay', '')};

  ${getTransitionPreset('overlay', '', 'nk-overlay')};
`;

const BaseOverlay: React.FC<Omit<OverlayProps, 'open'>> = props => {
  useLockBodyScroll();

  return <StyledOverlay data-testid="overlay" {...props} />;
};

export const Overlay: React.FC<OverlayProps> = ({
  open,
  overrides,
  ...props
}) => {
  const theme = useTheme();

  return (
    <CSSTransition
      in={open}
      timeout={getTransitionDuration('overlay', '')({theme, overrides})}
      classNames="nk-overlay"
      mountOnEnter
      unmountOnExit
      appear
    >
      <BaseOverlay {...props} overrides={overrides} />
    </CSSTransition>
  );
};
