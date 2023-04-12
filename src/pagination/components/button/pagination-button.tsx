import React from 'react';
import {ButtonOrButtonLinkProps} from '../../../button';
import {StyledButton} from '../../styled';
import {PaginationItemProps} from '../../types';

export const PaginationButton = (
  props: ButtonOrButtonLinkProps & PaginationItemProps,
) => (
  // @ts-ignore - href must be allowed to be undefined so that Button renders as a link when appropriate
  <StyledButton {...props} />
);
