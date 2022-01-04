import {DisplayProperty} from 'csstype';
import {styled} from '../utils/style';

interface StyledUlProps {
  $display?: DisplayProperty;
  $flexGrow?: number;
}
export const StyledUl = styled.ul<StyledUlProps>`
  margin: 0;
  padding: 0;
  display: ${({$display}) => $display || 'inline-flex'};
  flex-grow: ${({$flexGrow}) => $flexGrow};
`;

export const StyledOl = styled.ol<StyledUlProps>`
  margin: 0;
  padding: 0;
  display: ${({$display}) => $display || 'inline-flex'};
  flex-grow: ${({$flexGrow}) => $flexGrow};
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;
