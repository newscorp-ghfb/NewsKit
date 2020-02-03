import React, {useState, useEffect, useRef} from 'react';
import {styled, getColorFromTheme} from '../utils/style';
import {Placeholder} from '../icons';
import {Theme, StylePresetStyles} from '../themes';
import {SizingKeys} from '../themes/newskit-light/spacing';
import {
  getStylePresetFromTheme,
  GetStylePresetFromThemeOptions,
} from '../utils/style-preset';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectHeight: number | string;
  aspectWidth: number | string;
  borderRadius?: SizingKeys;
  hideLoadingIcon?: boolean;
  stylePreset?: string;
}

interface ImageContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isLoading: boolean;
  aspectHeight: number | string;
  aspectWidth: number | string;
  borderRadius?: SizingKeys;
  stylePreset?: string;
}

interface IconContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  stylePreset?: string;
}

const renderStyles = (
  theme: Theme,
  stylePreset: string | undefined,
  options: GetStylePresetFromThemeOptions,
) => {
  const presetName =
    stylePreset &&
    getStylePresetFromTheme(stylePreset, 'stylePreset' as any, options)({theme}) // eslint-disable-line @typescript-eslint/no-explicit-any
      ? stylePreset
      : 'maskPointed010';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return getStylePresetFromTheme(presetName, 'stylePreset' as any, options)({
    theme,
  });
};

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  height: ${props => (props.isLoading ? 0 : 'auto')};
  padding-top: ${props =>
    props.isLoading
      ? `calc(100% * (${props.aspectHeight}/${props.aspectWidth}))`
      : 0};

  ${({stylePreset, borderRadius, theme}) => {
    const options = {
      borderRadiusSize: borderRadius,
      omitStyles: ['iconColor'],
    } as GetStylePresetFromThemeOptions;

    return renderStyles(theme, stylePreset, options);
  }}
`;

const imagePropsAreEqual = (prevProps: ImageProps, nextProps: ImageProps) =>
  prevProps.aspectHeight === nextProps.aspectHeight &&
  prevProps.aspectWidth === nextProps.aspectWidth &&
  prevProps.hideLoadingIcon === nextProps.hideLoadingIcon &&
  prevProps.borderRadius === nextProps.borderRadius &&
  prevProps.src === nextProps.src;

export const handleClientSideRender = (
  handler: () => boolean | void,
  imgRef: React.RefObject<HTMLImageElement>,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const imageElement = imgRef.current!;
    if (imageElement && imageElement.complete) {
      handler();
    }
  });
};

const ImageComponent = (props: ImageProps) => {
  const {hideLoadingIcon, stylePreset = 'maskPointed010'} = props;
  const [isLoading, setIsLoading] = useState(true);
  const handleOnImageLoad = () => isLoading && setIsLoading(false);

  handleClientSideRender(handleOnImageLoad, imageRef);

  const DisplayImage = styled.img`
    display: ${isLoading ? 'none' : 'block'};
    width: 100%;
    height: auto;
    animation: fadeIn 300ms;
    border-radius: inherit;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  const IconContainer = styled.div<IconContainerProps>`
    top: 0;
    left: 0;
    position: absolute;
    display: ${isLoading && !hideLoadingIcon ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    ${({theme}) => {
      const presetStyle =
        theme.stylePresets[stylePreset] && theme.stylePresets[stylePreset].base
          ? Object.keys(theme.stylePresets[stylePreset]
              .base as StylePresetStyles).filter(
              (styleKey: string) => styleKey !== 'iconColor',
            )
          : undefined;
      const options = {
        omitStyles: presetStyle,
      } as GetStylePresetFromThemeOptions;
      return renderStyles(theme, stylePreset, options);
    }}
  `;

  const InnerIconContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <ImageContainer {...props} isLoading={isLoading}>
      <IconContainer stylePreset={stylePreset}>
        <InnerIconContainer>
          <Placeholder $size="iconSize040" />
        </InnerIconContainer>
      </IconContainer>
      <DisplayImage {...props} ref={imageRef} onLoad={handleOnImageLoad} />
    </ImageContainer>
  );
};

export const Image = React.memo(ImageComponent, imagePropsAreEqual);
