import React from 'react';
import {withDefaultProps} from '../utils/with-default-props';
import {Caption} from './caption';
import {styled} from '../utils/style';
import {CaptionProps} from './types';

export const CaptionInset = withDefaultProps(Caption, {}, 'captionInset');

export const StyledDiv = styled.div`
  border: 1px solid black;
`;

export const CaptionInsetWithBorder: React.FC<CaptionProps> = props => (
  <StyledDiv>
    <CaptionInset {...props} />
  </StyledDiv>
);
