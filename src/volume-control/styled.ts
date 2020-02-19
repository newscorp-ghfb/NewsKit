import {styled, getSizingFromTheme} from '../utils/style';

export const StyledIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${getSizingFromTheme('sizing060')};
  height: ${getSizingFromTheme('sizing060')};
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  appearance: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;
