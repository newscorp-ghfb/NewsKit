import React, {useState} from 'react';
import {styled, getColorFromTheme} from '../utils/style';
import {Placeholder} from '../icons';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectHeight: number | string;
  aspectWidth: number | string;
  hideLoadingIcon?: boolean;
  shape?: ImageShape;
}

interface ImageContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isLoading: boolean;
  aspectHeight: number | string;
  aspectWidth: number | string;
  shape?: ImageShape;
}

  const Container = styled.div`
    position: relative;
    width: 100%;
    height: ${isLoading ? 0 : 'auto'};
    padding-top: ${isLoading
      ? `calc(100% * (${aspectHeight}/${aspectWidth}))`
      : 0};
  background-color: ${getColorFromTheme('skeletonLight')};
  border-radius: ${props => ({shape = props.shape || ImageShape.Square}) =>
    ({
      [ImageShape.Square]: undefined,
      [ImageShape.Rounded]: '50%',
    }[shape])};
`;

const imagePropsAreEqual = (prevProps: ImageProps, nextProps: ImageProps) =>
  prevProps.aspectHeight === nextProps.aspectHeight &&
  prevProps.aspectWidth === nextProps.aspectWidth &&
  prevProps.hideLoadingIcon === nextProps.hideLoadingIcon &&
  prevProps.shape === nextProps.shape &&
  prevProps.src === nextProps.src;

const ImageComponent = (props: ImageProps) => {
  const {hideLoadingIcon} = props;
  const [isLoading, setIsLoading] = useState(true);

  const DisplayImage = styled.img`
    display: ${isLoading ? 'none' : 'block'};
    width: 100%;
    height: auto;
    animation: fadeIn 300ms;

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
    <Container>
      <IconContainer>
        <InnerIconContainer>
          <Placeholder $size="iconSize040" />
        </InnerIconContainer>
      </IconContainer>
      <DisplayImage
        {...props}
        onLoad={() => isLoading && setIsLoading(false)}
      />
    </Container>
  );
};

export const Image = React.memo(ImageComponent, imagePropsAreEqual);
