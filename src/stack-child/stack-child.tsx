import React from 'react';
import {styled} from '../utils/style';
import {StackChildProps, AlignSelfValues} from './types';

const StyledStackChild = styled.div<{
  $order?: number;
  $alignSelf?: AlignSelfValues;
}>`
  order: ${({$order}) => $order};
  align-self: ${({$alignSelf}) => $alignSelf};
  display: inline-flex;
`;

export const StackChild: React.FC<StackChildProps> = ({
  order,
  alignSelf,
  ...props
}) => <StyledStackChild {...props} $order={order} $alignSelf={alignSelf} />;

StackChild.displayName = 'StackChild';
