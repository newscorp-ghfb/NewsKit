import {ThemeProp} from '../utils';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {
  css,
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  styled,
} from '../utils/style';
import {ScrollProps} from './types';
import {logicalProps} from '../utils/logical-properties';

const getPseudoStyles = (props: ScrollProps & ThemeProp) => {
  const {vertical} = props;
  const defaultsPath = `scroll.${
    vertical ? 'vertical' : 'horizontal'
  }.overlays`;

  return css`
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: 1;
    transition: all linear 0.3s;
    ${getStylePreset(defaultsPath, `overlays`)(props)}
    ${getResponsiveSize(
      vertical ? 'height' : 'width',
      defaultsPath,
      `overlays`,
      'size',
    )(props)}
    ${vertical ? `width: 100%;` : `height: 100%;`}
  `;
};

export const StyledScrollNav = styled.div<
  Pick<ScrollProps, 'vertical' | 'overrides' | 'children'> & {
    showStartShadow?: boolean;
    showEndShadow?: boolean;
    controlsVariant?: ScrollProps['controls'];
  }
>`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  height: 100%;

  ${logicalProps()}

  ${({controlsVariant}) =>
    controlsVariant === 'hover' &&
    css`
      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fade-out {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      .nk-scroll-controls {
        display: none;
      }

      :hover {
        .nk-scroll-controls {
          display: inline-flex;
          animation: fade-in 1s;
        }
      }

      :not(:hover) {
        .nk-scroll-controls {
          animation: fade-out 1s;
        }
      }
    `}

  ${({showStartShadow, vertical, ...rest}) => {
    if (!showStartShadow) return null;

    return css`
      ::before {
        ${getPseudoStyles({vertical, ...rest})};
        top: 0;
        left: 0;
      }
    `;
  }}

   ${({showEndShadow, vertical, ...rest}) => {
    if (!showEndShadow) return null;

    return css`
      ::after {
        ${getPseudoStyles({vertical, ...rest})};
        right: 0;
        bottom: 0;
        transform: rotate(180deg);
      }
    `;
  }}
`;

export const StyledScrollContainer = styled.div<
  Omit<ScrollProps, 'overrides'> & {
    controlsEnabled?: boolean;
  }
>`
  box-sizing: border-box;
  height: 100%;

  overflow-x: auto;
  overflow-y: auto;
  scroll-behavior: smooth;

  ${({vertical, snapAlign}) =>
    snapAlign && `scroll-snap-type: ${vertical ? 'y' : 'x'} mandatory;`};

  ${({scrollBar}) =>
    !scrollBar &&
    `/* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }`}
`;

export const StyledScrollButtonContainer = styled.div<
  Pick<ScrollProps, 'vertical' | 'overrides'> & {
    position: 'end' | 'start';
  }
>`
  display: none;

  ${getMediaQueryFromTheme('md')} {
    display: inline-flex;
  }

  position: absolute;
  z-index: 2;

  ${({vertical, position, ...props}) => {
    let cssPosition = '';
    if (vertical && position === 'start') {
      cssPosition = 'top';
    } else if (vertical && position === 'end') {
      cssPosition = 'bottom';
    } else if (!vertical && position === 'start') {
      cssPosition = 'left';
    } else {
      cssPosition = 'right';
    }

    return css`
      /* adjusting position ( top/right/left/bottom) based on offset */
      ${getResponsiveSpace(
        cssPosition,
        `scroll.${vertical ? 'vertical' : 'horizontal'}.controls`,
        `controls`,
        'offset',
      )(props)}

      ${vertical
        ? `
        left: 50%;
        transform: translateX(-50%);
        svg{
          transform: rotate(90deg);
        }
        `
        : `
        top: 50%;
        transform: translateY(-50%);
        `}
    `;
  }}}
`;

export const StyledScrollSnapAlignment = styled.div<
  Pick<ScrollProps, 'snapAlign'>
>`
  scroll-snap-align: ${({snapAlign}) => snapAlign};
`;
