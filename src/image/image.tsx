import React, {useState, useEffect, useRef, useCallback} from 'react';
import dequal from 'dequal';
import {IconOutlinedImage} from '../icons';
import {ImageProps} from './types';
import {getAspectRatioStyles} from '../utils/get-aspect-ratio';
import {
  ImageContainer,
  LoadingContainer,
  IconContainer,
  StyledImage,
  StyledImageAndCaptionContainer,
} from './styled';
import {Caption} from '../caption';
import {MQ} from '../utils/style';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {useIntersection} from '../utils/hooks/use-intersection';

export const useClientSide = (
  render: () => boolean | void,
  imgRef: React.RefObject<HTMLImageElement>,
) => {
  useEffect(() => {
    const imageElement = imgRef.current!;
    if (imageElement && imageElement.complete) {
      render();
    }
  });
};

const renderCaption = (
  captionText: string,
  creditText?: string,
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceStack?: MQ<string>;
    spaceInset?: MQ<string>;
    credit?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
  },
) => (
  <Caption creditText={creditText} overrides={overrides}>
    {captionText}
  </Caption>
);

const getSpaceStackValue = (
  captionText?: string,
  captionSpaceInset?: object,
) => {
  if (captionText && !captionSpaceInset) {
    return 'space020';
  }
  return '';
};

const ImageComponent: React.FC<ImageProps> = ({
  captionText,
  creditText,
  loadingAspectRatio,
  placeholderIcon = false,
  overrides = {},
  renderOnServer = false,
  loading,
  src,
  ...props
}) => {
  const theme = useTheme();
  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
  const [isLoading, setIsLoading] = useState(!renderOnServer);
  const [hasError, setError] = useState(false);
  const onLoad = useCallback(() => isLoading && setIsLoading(false), [
    isLoading,
    setIsLoading,
  ]);
  const onError = useCallback(() => setError(true), [setError]);

  const imageContainerStylePreset = getToken(
    {theme, overrides},
    'image',
    '',
    'stylePreset',
  );
  const width = getToken({theme, overrides}, 'image', '', 'width');
  const height = getToken({theme, overrides}, 'image', '', 'height');
  const maxWidth = getToken({theme, overrides}, 'image', '', 'maxWidth');
  const maxHeight = getToken({theme, overrides}, 'image', '', 'maxHeight');
  const {
    paddingTop,
    width: aspectWidth,
    height: aspectHeight,
  } = getAspectRatioStyles({
    aspectRatio: loadingAspectRatio,
    height,
    width,
  });

  useClientSide(onLoad, imageRef);

  const captionSpaceStack =
    creditText &&
    getToken({theme, overrides}, 'image', 'caption', 'spaceStack');

  const captionSpaceInset = getToken(
    {theme, overrides},
    'image',
    'caption',
    'spaceInset',
  );

  const captionStylePreset = getToken(
    {theme, overrides},
    'image',
    'caption',
    'stylePreset',
  );

  const captionTypographyPreset = getToken(
    {theme, overrides},
    'image',
    'caption',
    'typographyPreset',
  );

  const creditStylePreset = getToken(
    {theme, overrides},
    'image.caption.credit',
    'caption.credit',
    'stylePreset',
  );

  const creditTypographyPreset = getToken(
    {theme, overrides},
    'image.caption.credit',
    'caption.credit',
    'typographyPreset',
  );

  const lazyBoundary = '256px'; // its arbitrary
  const isLazy = loading === 'lazy' && typeof window !== 'undefined';
  const hasNativeLazyLoadSupport =
    typeof window !== 'undefined' && 'loading' in HTMLImageElement.prototype;

  const disableIntersection = useCallback(() => {
    if (!isLazy) return true;
    return hasNativeLazyLoadSupport;
  }, [isLazy, hasNativeLazyLoadSupport]);

  const [setRef, isIntersected] = useIntersection<HTMLImageElement>({
    rootMargin: lazyBoundary,
    // useIntersection is not needed when native lazy loading is supported or loading is not lazy
    disabled: disableIntersection(),
  });

  const isVisible = !isLazy || isIntersected;

  // This code can be removed once Safari start supporting loading=lazy
  const getSource = useCallback(() => {
    if ((isLazy && hasNativeLazyLoadSupport) || renderOnServer) {
      return src;
    }
    // This if statements is returning  the same as above,
    // however I give native lazy loading priority when to load the image
    /* istanbul ignore next */
    if (!hasNativeLazyLoadSupport && isLazy && isVisible) {
      return src;
    }
    if (!hasNativeLazyLoadSupport && isLazy && !isVisible) {
      return '';
    }
    return src;
  }, [isVisible, isLazy, src, hasNativeLazyLoadSupport, renderOnServer]);

  const currentSrc = getSource();

  const showLoading = useCallback(() => {
    if (hasError && currentSrc !== '') return true;
    if (!renderOnServer && isLoading) return true;
    return false;
  }, [hasError, renderOnServer, isLoading, currentSrc]);

  return (
    <StyledImageAndCaptionContainer $width={aspectWidth} ref={setRef}>
      <ImageContainer
        $loading={showLoading()}
        paddingTop={paddingTop}
        stylePreset={imageContainerStylePreset}
        spaceStack={getSpaceStackValue(captionText, captionSpaceInset)}
      >
        {showLoading() && (
          <LoadingContainer>
            {placeholderIcon && (
              <IconContainer>
                <IconOutlinedImage
                  overrides={{
                    size: 'iconSize040',
                  }}
                />
              </IconContainer>
            )}
          </LoadingContainer>
        )}
        <StyledImage
          {...props}
          $width={aspectWidth}
          $height={aspectHeight}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          onLoad={onLoad}
          onError={onError}
          $loading={showLoading()}
          loading={loading}
          ref={imageRef}
          src={currentSrc}
        />
      </ImageContainer>
      {captionText &&
        renderCaption(captionText, creditText, {
          stylePreset: captionStylePreset,
          typographyPreset: captionTypographyPreset,
          spaceInset: captionSpaceInset,
          spaceStack: captionSpaceStack,
          credit: {
            stylePreset: creditStylePreset,
            typographyPreset: creditTypographyPreset,
          },
        })}
    </StyledImageAndCaptionContainer>
  );
};

export const Image = React.memo(ImageComponent, dequal);
