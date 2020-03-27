import {styled} from '../utils/style';

import {StackChildProps} from './types';

export const StackChild = styled.div<StackChildProps>`
  order: ${({order}) => order};
  display: inline-flex;
`;
