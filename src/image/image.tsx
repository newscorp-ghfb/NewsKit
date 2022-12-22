import React, {useState, useRef, useCallback} from 'react';
import dequal from 'dequal';
import composeRefs from '@seznam/compose-react-refs';
import {IconOutlinedImage, NewsKitIconProps} from '../icons';
import {ImageProps} from './types';
import {
  StyledLoadingContainer,
  StyledIconContainer,
  StyledImage,
  StyledPicture,
} from './styled';
import {useIntersection} from '../utils/hooks/use-intersection';
import {Sources} from './sources';
import {useClientSide} from './utils';
import {getComponentOverrides} from '../utils/overrides';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ImageComponent = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      width,
      height,
      loadingAspectRatio,
      placeholderIcon = false,
      overrides = {},
      renderOnServer = false,
      loading,
      src,
      sources = [],
      ...props
    },
    ref,
  ) => {
    const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
    const [isLoading, setIsLoading] = useState(!renderOnServer);
    const [hasError, setError] = useState(false);
    const onLoad = useCallback(() => isLoading && setIsLoading(false), [
      isLoading,
      setIsLoading,
    ]);
    const onError = useCallback(() => setError(true), [setError]);

    useClientSide(onLoad, imageRef);

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
    // This code can be removed once Safari start supporting loading=lazy
    const getSource = useCallback(
      () =>
        isLazy && !renderOnServer && !hasNativeLazyLoadSupport && !isVisible
          ? undefined
          : src,
      [isVisible, isLazy, src, hasNativeLazyLoadSupport, renderOnServer],
    );

    const currentSrc = getSource();

    const showLoading = useCallback(() => {
      if (hasError && currentSrc !== '') return true;
      if (!renderOnServer && isLoading) return true;
      return false;
    }, [hasError, renderOnServer, isLoading, currentSrc]);

    const [PlaceholderComponent, placeholderProps] = getComponentOverrides(
      /* istanbul ignore next  */
      overrides?.placeholderIcon,
      IconOutlinedImage,
      {
        overrides: {
          size: 'iconSize040',
        },
      },
    );
    return (
      <StyledPicture
        isLoading={showLoading()}
        width={width}
        height={height}
        loadingAspectRatio={loadingAspectRatio}
        overrides={overrides}
        ref={setRef}
      >
        {showLoading() && (
          <StyledLoadingContainer>
            {placeholderIcon && (
              <StyledIconContainer>
                <PlaceholderComponent
                  {...(placeholderProps as NewsKitIconProps)}
                />
              </StyledIconContainer>
            )}
          </StyledLoadingContainer>
        )}
        <Sources sources={sources} />
        <StyledImage
          {...props}
          width={width}
          height={height}
          onLoad={onLoad}
          onError={onError}
          isLoading={showLoading()}
          loading={loading}
          overrides={overrides}
          loadingAspectRatio={loadingAspectRatio}
          ref={composeRefs(imageRef, ref)}
          src={currentSrc}
        />
      </StyledPicture>
    );
  },
);

const ThemelessImage = React.memo(ImageComponent, dequal);

export const Image = withOwnTheme(ThemelessImage)({defaults, stylePresets});
