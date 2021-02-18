import {IconButton} from '../icon-button';
import {getMediaQueryFromTheme} from '../utils/responsive-helpers';
import {css, styled} from '../utils/style';
import {ScrollProps} from './types';

const pseudoBasicStyle = `
    content: '';
    position: absolute;
    z-index: 1;
  `;

export const StyledScrollNav = styled.div<
  Pick<ScrollProps, 'arrows' | 'vertical'> & {
    showStartShadow?: boolean;
    showEndShadow?: boolean;
  }
>`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  height: 100%;

  ${({arrows}) =>
    arrows === 'hover' &&
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

      button {
        display: none;
      }

      :hover {
        button {
          display: inline-flex;
          animation: fade-in 1s;
        }
      }

      :not(:hover) {
        button {
          animation: fade-out 1s;
        }
      }
    `}

  ${({showStartShadow, vertical}) =>
    showStartShadow &&
    css`
        ::before {
          ${pseudoBasicStyle};
          ${
            vertical
              ? `
              top: 0;
              left: 0;
              right: 0;
              height: 2.4em;
            `
              : `
              top: 0;
              left: 0;  
              height: 100%;
              width: 2.4em;
            `
          }

          background-image: linear-gradient(
            ${vertical ? 'to top' : 'to left'},
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.6)  50%
          );
          transition: all linear 0.3s;
        }
      `}

   ${({showEndShadow, vertical}) =>
     showEndShadow &&
     css`
      ::after {
        ${pseudoBasicStyle};
        ${
          vertical
            ? `
            bottom: 0;
            left: 0;
            right: 0;
            height: 2.4em;
          `
            : `
            top: 0;
            right: 0;
            height: 100%;
            width: 2.4em;
          `
        }

        background-image: linear-gradient(
          ${vertical ? 'to bottom' : 'to right'},
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,0.6)  50%
        );
        transition: all linear 0.3s;
      }
    `}
`;

export const StyledScrollContainer = styled.div<
  Omit<ScrollProps, 'overrides'> & {
    arrowsEnabled?: boolean;
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

export const StyledScrollArrowButton = styled(IconButton)<
  Pick<ScrollProps, 'vertical'> & {
    position: 'end' | 'start';
  }
>`
  display: none;

  ${getMediaQueryFromTheme('md')} {
    display: inline-flex;
  }

  position: absolute;
  z-index: 2;

  ${({vertical, position}) =>
    css`
      ${vertical
        ? `
        left: 50%;
        transform: translateX(-50%);
        ${position === 'start' ? `top: 0;` : `bottom: 0;`}
        svg{
          transform: rotate(90deg);
        }
        `
        : `
        top: 50%;
        transform: translateY(-50%);
        ${position === 'start' ? 'left: 0;' : 'right: 0;'}
        `}
    `}
`;

export const StyledScrollSnapAlignment = styled.div<
  Pick<ScrollProps, 'snapAlign'>
>`
  scroll-snap-align: ${({snapAlign}) => snapAlign};
`;
