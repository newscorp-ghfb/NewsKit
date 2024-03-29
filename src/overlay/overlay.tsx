import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {useTheme} from '../theme';
import {getTransitionDuration} from '../utils/get-transition-duration';
import {useLockBodyScroll} from '../utils/hooks';
import {styled, getStylePreset, MQ} from '../utils/style';
import {getTransitionPreset} from '../utils/style/transition-preset';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

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
  cursor: pointer;
  ${getStylePreset('overlay', '')};

  ${getTransitionPreset('overlay', '', 'nk-overlay')};
`;

const BaseOverlay = React.forwardRef<
  HTMLDivElement,
  Omit<OverlayProps, 'open'>
>((props, transitionRef) => {
  useLockBodyScroll();

  return <StyledOverlay data-testid="overlay" ref={transitionRef} {...props} />;
});

const ThemlessOverlay: React.FC<OverlayProps> = ({
  open,
  overrides,
  ...props
}) => {
  const theme = useTheme();
  // To learn more about why this is needed: https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
  const cssTransitionNodeRef = React.useRef(null);

  return (
    <CSSTransition
      nodeRef={cssTransitionNodeRef}
      in={open}
      timeout={getTransitionDuration('overlay', '')({theme, overrides})}
      classNames="nk-overlay"
      mountOnEnter
      unmountOnExit
      appear
    >
      <BaseOverlay
        {...props}
        ref={cssTransitionNodeRef}
        overrides={overrides}
      />
    </CSSTransition>
  );
};

export const Overlay = withOwnTheme(ThemlessOverlay)({
  defaults,
  stylePresets,
});
