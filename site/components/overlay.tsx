import * as React from 'react';
import {getMediaQueryFromTheme, BreakpointKeys, styled, css} from 'newskit';

interface OverlayProps {
  open: boolean;
  handleSidebarClick?: () => void;
  zIndex?: number;
  lockScroll?: boolean;
  hideAtBreakpoint?: BreakpointKeys;
}

interface StyledOverlayProps {
  active: boolean;
  zIndex?: number;
  onClick?: () => void;
  hideAtBreakpoint?: BreakpointKeys;
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  overflow: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: ${({active}: {active: boolean}) => (active ? '0' : '100%')};
  opacity: ${({active}: {active: boolean}) => (active ? '1' : '0')};
  visibility: ${({active}: {active: boolean}) =>
    active ? 'visible' : 'hidden'};
  transition: opacity 0.6s, right 0.3s;

  ${({zIndex}: {zIndex?: number}) =>
    zIndex &&
    css`
      z-index: ${zIndex};
    `}

  ${({hideAtBreakpoint, theme}) =>
    hideAtBreakpoint &&
    hideAtBreakpoint.length &&
    css`
      ${getMediaQueryFromTheme(hideAtBreakpoint!)({theme})} {
        display: none;
      }
    `}
`;

export class Overlay extends React.Component<OverlayProps> {
  nodeLastOverflowStyle: string | null = null;

  componentDidMount() {
    const {lockScroll} = this.props;
    if (lockScroll) {
      this.disableScroll();
    }
  }

  componentDidUpdate(prevProps: OverlayProps) {
    const {lockScroll} = this.props;

    if (prevProps.lockScroll !== lockScroll) {
      if (lockScroll) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  }

  componentWillUnmount() {
    const {lockScroll} = this.props;
    if (lockScroll) {
      this.enableScroll();
    }
  }

  enableScroll = () => {
    const lastStyle = this.nodeLastOverflowStyle;
    document.body.style.overflow = lastStyle || '';
    this.nodeLastOverflowStyle = null;
  };

  disableScroll = () => {
    this.nodeLastOverflowStyle = document.body.style.overflow || '';
    document.body.style.overflow = 'hidden';
  };

  render() {
    const {open, handleSidebarClick, ...rest} = this.props;

    return (
      <StyledOverlay
        active={open}
        onClick={handleSidebarClick}
        {...rest}
        data-testid="overlay"
      />
    );
  }
}
