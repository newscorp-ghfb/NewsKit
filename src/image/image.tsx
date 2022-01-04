import React, {useState} from 'react';
import {styled, getColorFromTheme} from '../utils/style';
import {Placeholder} from '../icons';

export enum ImageShape {
  Square = 'square',
  Round = 'round',
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectHeight: Number | String;
  aspectWidth: Number | String;
  hideLoadingIcon?: Boolean;
  shape?: ImageShape;
}

interface ImageContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {
  isLoading: Boolean;
  aspectHeight: Number | String;
  aspectWidth: Number | String;
  shape?: ImageShape;
}

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  height: ${props => (props.isLoading ? 0 : 'auto')};
  padding-top: ${props =>
    props.isLoading
      ? `calc(100% * (${props.aspectHeight}/${props.aspectWidth}))`
      : 0};
  background-color: ${getColorFromTheme('skeleton010')};
  border-radius: ${props => ({shape = props.shape || ImageShape.Square}) =>
    ({
      [ImageShape.Square]: undefined,
      [ImageShape.Round]: '50%',
    }[shape])};
`;

export const Image = ({hideLoadingIcon, ...rest}: ImageProps) => {
  const [{isLoading}, setState] = useState({isLoading: true});

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
    <ImageContainer {...rest} isLoading={isLoading}>
      <IconContainer>
        <InnerIconContainer>
          <Placeholder $size="sizing080" />
        </InnerIconContainer>
      </IconContainer>
      <DisplayImage
        {...rest}
        onLoad={() => isLoading && setState({isLoading: false})}
      />
    </ImageContainer>
  );
};
