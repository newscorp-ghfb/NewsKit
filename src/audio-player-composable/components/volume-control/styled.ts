import { GridLayout } from '../../../grid-layout';
import { getResponsiveSize, styled } from '../../../utils/style';

export const VolumeSliderContainer = styled.div<{ vertical?: boolean }>`
  ${({ vertical }) =>
    getResponsiveSize(
      vertical ? 'height' : 'width',
      'audioPlayerVolumeControl.slider.track',
      'slider.track',
      'length',
    )
  }

  ${({vertical}) => (vertical && 
    `position: absolute;
     bottom: 100%;`
  )};
`;
 
export const StyledGridLayout = styled(GridLayout)<{ vertical?: boolean }>`
  ${({vertical}) => (vertical && `
    position: relative;
  `)};
`;