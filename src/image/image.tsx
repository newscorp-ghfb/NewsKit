import React, {useState, useEffect, useRef} from 'react';
import {styled, getColorFromTheme} from '../utils/style';
import {Placeholder} from '../icons';
import {getStylePresetFromTheme} from '../utils/style-preset';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectHeight: number | string;
  aspectWidth: number | string;
  hideLoadingIcon?: boolean;
  $stylePreset?: string;
}

interface ImageContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isLoading: boolean;
  aspectHeight: number | string;
  aspectWidth: number | string;
  $stylePreset?: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  height: ${props => (props.isLoading ? 0 : 'auto')};
  padding-top: ${props =>
    props.isLoading
      ? `calc(100% * (${props.aspectHeight}/${props.aspectWidth}))`
      : 0};

  ${({isLoading, ...props}) =>
    getStylePresetFromTheme(
      'maskPointed010',
      '$stylePreset' as any, // eslint-disable-line @typescript-eslint/no-explicit-any
      {
        borderRadiusSize: 'sizing060',
        isLoading,
      },
    )(props)}
`;

const imagePropsAreEqual = (prevProps: ImageProps, nextProps: ImageProps) =>
  prevProps.aspectHeight === nextProps.aspectHeight &&
  prevProps.aspectWidth === nextProps.aspectWidth &&
  prevProps.hideLoadingIcon === nextProps.hideLoadingIcon &&
  prevProps.src === nextProps.src &&
  prevProps.$stylePreset === nextProps.$stylePreset;

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
  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
  const {hideLoadingIcon} = props;
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

  const IconContainer = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    display: ${isLoading && !hideLoadingIcon ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
  `;

  const InnerIconContainer = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <ImageContainer {...props} isLoading={isLoading}>
      <IconContainer>
        <InnerIconContainer>
          <Placeholder $size="iconSize040" />
        </InnerIconContainer>
      </IconContainer>
      <DisplayImage {...props} ref={imageRef} onLoad={handleOnImageLoad} />
    </ImageContainer>
  );
};

export const Image = React.memo(ImageComponent, imagePropsAreEqual);
