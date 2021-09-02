import React, {useState, useRef, useCallback} from 'react';
import dequal from 'dequal';
import {IconOutlinedImage} from '../icons';
import {ImageProps} from './types';
import {
  StyledImageContainer,
  StyledLoadingContainer,
  StyledIconContainer,
  StyledImage,
  StyledImageAndCaptionContainer,
} from './styled';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {useIntersection} from '../utils/hooks/use-intersection';
import {ImageCaption} from './caption';
import {Sources} from './sources';
import {getSpaceStackValue, useClientSide} from './utils';

const ImageComponent: React.FC<ImageProps> = ({
  captionText,
  creditText,
  loadingAspectRatio,
  placeholderIcon = false,
  overrides = {},
  renderOnServer = false,
  loading,
  src,
  sources = [],
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

  useClientSide(onLoad, imageRef);

  // TODO: remove when captions is removed from Image
  const captionSpaceInset = getToken(
    {theme, overrides},
    'image',
    'caption',
    'spaceInset',
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
    <StyledImageAndCaptionContainer
      overrides={overrides}
      loadingAspectRatio={loadingAspectRatio}
      ref={setRef}
    >
      <StyledImageContainer
        isLoading={showLoading()}
        // TODO: remove when Caption is form Image component
        spaceStack={getSpaceStackValue(captionText, captionSpaceInset)}
        loadingAspectRatio={loadingAspectRatio}
        overrides={overrides}
        // TODO: change to styled.picture after Caption is removed
        as="picture"
      >
        {showLoading() && (
          <StyledLoadingContainer>
            {placeholderIcon && (
              <IconContainer>
                {overrides.placeholderIcon ?? (
                  <IconOutlinedImage
                    overrides={{
                      size: 'iconSize040',
                    }}
                  />
                )}
              </IconContainer>
            )}
          </StyledLoadingContainer>
        )}
        <Sources sources={sources} />
        <StyledImage
          {...props}
          onLoad={onLoad}
          onError={onError}
          isLoading={showLoading()}
          loading={loading}
          overrides={overrides}
          loadingAspectRatio={loadingAspectRatio}
          ref={imageRef}
          src={currentSrc}
        />
      </StyledImageContainer>
      {captionText && (
        <ImageCaption
          captionText={captionText}
          creditText={creditText}
          overrides={overrides}
        />
      )}
    </StyledImageAndCaptionContainer>
  );
};

export const Image = React.memo(ImageComponent, dequal);
