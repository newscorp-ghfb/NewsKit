import {styled, getSizingFromTheme} from '../utils/style';

export const StyledButton = styled.button`
  border: none;
  outline: none;
  appearance: none;
  background: none;
  padding: 0;
  width: ${getSizingFromTheme('sizing060')};
  height: ${getSizingFromTheme('sizing060')};
  cursor: pointer;
`;
