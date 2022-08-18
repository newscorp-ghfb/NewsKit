import React from 'react';
import {IconFilledLaunch} from '../../icons';
import {ButtonProps} from '../../button';
import {IconButton} from '../../icon-button';

export interface PopoutButtonProps {
  onClick?: (props: PopoutButtonProps) => void;
  href?: string;
  overrides?: ButtonProps['overrides'];
}

export const PopoutButton: React.FC<PopoutButtonProps> = React.memo(props => {
  const {href, onClick, ...rest} = props;

  return (
    <IconButton
      {...rest}
      size="medium"
      data-testid="audio-player-popout"
      aria-label="Open popout player"
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
      <IconFilledLaunch overrides={{size: 'iconSize020'}} />
    </IconButton>
  );
});
