import {styled} from '../utils/style';
import {ContainerProp, StyledContainerProps} from './types';

export const Container = styled.div<ContainerProp>`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${({maxHeight, maxWidth, paddingTop}) => ({maxHeight, maxWidth, paddingTop})}
`;

export const StyledDiv = styled.div<Omit<StyledContainerProps, 'aspectRatio'>>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  ${({$width: width = '100%', $height: height = 'auto'}) => ({
    width,
    height,
  })}
`;
