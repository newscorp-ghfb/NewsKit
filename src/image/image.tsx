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
  ...props
}) => {
  const theme = useTheme();
  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
  const [loading, setLoading] = useState(true);
  const onLoad = useCallback(() => loading && setLoading(false), [
    loading,
    setLoading,
  ]);
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

  return (
    <StyledImageAndCaptionContainer $width={aspectWidth}>
      <ImageContainer
        $loading={loading}
        paddingTop={paddingTop}
        stylePreset={imageContainerStylePreset}
        spaceStack={getSpaceStackValue(captionText, captionSpaceInset)}
      >
        {loading && (
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
          ref={imageRef}
          onLoad={onLoad}
          $loading={loading}
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
