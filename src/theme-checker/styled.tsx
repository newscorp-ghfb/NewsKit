import {Block} from '../block';
import {Visible} from '../grid';
import {getColorCssFromTheme, getSpacingCssFromTheme, styled} from '../utils';

export const ModalWrapper = styled.div`
  position: relative;
  border: 1px solid orange;
  width: 80vw;
  height: 80vh;
  ${getColorCssFromTheme('color', 'inkContrast')};
  ${getColorCssFromTheme('backgroundColor', 'inkInverse')};
`;

export const Box = styled.div`
  width: 80vw;
`;

export const DrawerContainer = styled.div`
  ${getColorCssFromTheme('color', 'inkContrast')};
  ${getColorCssFromTheme('backgroundColor', 'inkInverse')};

  position: relative;
  border: 1px solid red;
  width: 50vw;
  height: 80vh;
  overflow: hidden;
`;

export const StyledWrapper = styled.div`
  ${getSpacingCssFromTheme('marginBottom', 'space100')};
`;

export const StyledLabel = styled.label`
  ${getSpacingCssFromTheme('marginRight', 'space050')};
`;

export const StyledInput = styled.input`
  ${getSpacingCssFromTheme('marginRight', 'space030')};
`;

export const Container = styled(Block)<{
  width?: string;
  height?: string;
  border?: boolean;
}>`
  width: ${({width}) => width || '300px'};
  height: ${({height}) => height || '150px'};
  border: ${({theme, border}) =>
    border ? `solid 1px ${theme.colors.red050}` : null};
`;

export const StyledFullWidthVisible = styled(Visible)`
  width: 100%;
`;

export const AudioPlayerContainer = styled.div`
  max-width: 1156px;
  ${getSpacingCssFromTheme('marginBottom', 'space050')};
`;
