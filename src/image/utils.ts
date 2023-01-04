import {useEffect} from 'react';
import {BreakpointKeys} from '../theme/types';
import {getAspectRatioStyles} from '../utils/get-aspect-ratio';
import {CSSObject} from '../utils/style';
import {ThemeProp} from '../utils/style-types';
import {handleResponsiveProp} from '../utils/style/getters';
import {ImageCommonProps} from './types';

export const getResponsiveAspectRatioFromProps = (
  {
    width: propWidth,
    height: propHeight,
    overrides,
    ...props
  }: ImageCommonProps & ThemeProp,
  handler: (values: {
    width: string;
    height: string;
    paddingTop: string;
  }) => string | CSSObject,
): string | CSSObject => {
  const imgWidth = overrides && overrides.width;
  const imgHeight = overrides && overrides.height;

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
        height: aspectHeight || (!propHeight && 'auto'),
        width: aspectWidth || (!propWidth && '100%'),
        paddingTop: paddingTop || '0',
      };
      // @ts-ignore
      return handler(responsiveProps);
    },
  )({
    width: imgWidth,
    height: imgHeight,
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

export const getNextBreakpoint = (
  current: BreakpointKeys,
  all: BreakpointKeys[],
): BreakpointKeys | undefined => {
  const currentIndex = all.indexOf(current);
  return all[currentIndex + 1];
};
