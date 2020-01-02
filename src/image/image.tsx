import React, {useState} from 'react';
import {styled, getColorFromTheme} from '../utils/style';
import {Placeholder} from '../icons';

export enum ImageShape {
  Square = 'square',
  Rounded = 'rounded',
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectHeight: Number | String;
  aspectWidth: Number | String;
  hideLoadingIcon?: Boolean;
}

export const Image = ({
  aspectHeight,
  aspectWidth,
  hideLoadingIcon,
  ...rest
}: ImageProps) => {
  const [{isLoading}, setState] = useState({isLoading: true});

  const Container = styled.div`
    position: relative;
    width: 100%;
    height: ${isLoading ? 0 : 'auto'};
    padding-top: ${isLoading
      ? `calc(100% * (${aspectHeight}/${aspectWidth}))`
      : 0};
  background-color: ${getColorFromTheme('skeleton010')};
  border-radius: ${props => ({shape = props.shape || ImageShape.Square}) =>
    ({
      [ImageShape.Square]: undefined,
      [ImageShape.Rounded]: '50%',
    }[shape])};
`;

export const Image = (props: ImageProps) => {
  const {hideLoadingIcon} = props;
  const [{isLoading}, setState] = useState({isLoading: true});

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
          <Placeholder $size="sizing080" />
        </InnerIconContainer>
      </IconContainer>
      <DisplayImage
        {...props}
        onLoad={() => isLoading && setState({isLoading: false})}
      />
    </Container>
  );
};
