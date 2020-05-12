import React from 'react';
import {Popout} from '../../icons';
import {IconButton, ButtonSize} from '../../button';

export interface PopoutButtonProps {
  onClick?: (props: PopoutButtonProps) => void;
  href?: string;
  stylePreset?: string;
}

export const PopoutButton: React.FC<PopoutButtonProps> = React.memo(props => {
  const {href, onClick} = props;
  return (
    <IconButton
      {...props}
      size={ButtonSize.Medium}
      data-testid="audio-player-popout"
      onClick={
        href || onClick
          ? () => {
              if (href) {
                window.open(href, '', 'width=380,height=665');
              }
              if (onClick) {
                onClick(props);
              }
            }
          : undefined
      }
    >
      <Popout size="iconSize020" focusable="false" title="open popout player" />
    </IconButton>
  );
});
