import {useEffect} from 'react';
import {BreakpointKeys} from '../theme/types';
import {getAspectRatioStyles} from '../utils/get-aspect-ratio';
import {CSSObject} from '../utils/style';
import {ThemeProp} from '../utils/style-types';
import {handleResponsiveProp} from '../utils/style/getters';
import {ImageCommonProps} from './types';

export const getResponsiveAspectRatioFromProps = (
  {overrides, ...props}: ImageCommonProps & ThemeProp,
  handler: (values: {
    width: string;
    height: string;
    paddingTop: string;
  }) => string | CSSObject,
): string | CSSObject => {
  /* istanbul ignore next */
  const overridesWidth = overrides?.width;
  /* istanbul ignore next */
  const overridesHeight = overrides?.height;

  return handleResponsiveProp(
    {
      width: '100%',
      height: 'auto',
      loadingAspectRatio: '',
    },
    ({width, height, loadingAspectRatio}) => {
      const {
        width: aspectWidth,
        height: aspectHeight,
        paddingTop,
      } = getAspectRatioStyles({
        aspectRatio: loadingAspectRatio,
        height,
        width,
      });
      const responsiveProps = {
        height: aspectHeight || 'auto',
        width: aspectWidth || '100%',
        paddingTop: paddingTop || '0',
      };
      return handler(responsiveProps);
    },
  )({
    width: overridesWidth,
    height: overridesHeight,
    ...props,
  } as ThemeProp);
};

export const useClientSide = (
  callback: () => boolean | void,
  imgRef: React.RefObject<HTMLImageElement>,
) => {
  useEffect(() => {
    const imageElement = imgRef.current!;
    if (imageElement && imageElement.complete) {
      callback();
    }
  });
};

// TODO: remove when captions is removed from Image
export const getSpaceStackValue = (
  captionText?: string,
  captionSpaceInset?: object,
) => {
  if (captionText && !captionSpaceInset) {
    return 'space020';
  }
  return '';
};

export const getNextBreakpoint = (
  current: BreakpointKeys,
  all: BreakpointKeys[],
): BreakpointKeys | undefined => {
  const currentIndex = all.indexOf(current);
  return all[currentIndex + 1];
};
