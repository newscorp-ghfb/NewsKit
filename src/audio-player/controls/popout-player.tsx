import React from 'react';
import {StyledTag} from '../styled';
import {Popout} from '../../icons';

export interface PopoutButtonProps {
  href: string;
}

export const PopoutLink: React.FC<PopoutButtonProps> = React.memo(({href}) => (
  <StyledTag href={href} data-testid="audio-player-popout">
    <Popout $size="iconSize020" $color="buttonFill" />
  </StyledTag>
));
