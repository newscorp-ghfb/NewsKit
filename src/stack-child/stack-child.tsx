import React from 'react';
import {styled} from '../utils/style';

import {StackChildProps} from './types';

const StyledStackChild = styled.div<{$order?: number}>`
  order: ${({$order}) => $order};
  display: inline-flex;
`;

export const StackChild: React.FC<StackChildProps> = ({order, ...props}) => (
  <StyledStackChild {...props} $order={order} />
);

StackChild.displayName = 'StackChild';
