import React from 'react';
import {Popout} from '../../icons';
import {Button, ButtonSize} from '../../button';

export interface PopoutButtonProps {
  onClick?: (props: PopoutButtonProps) => void;
  href?: string;
  $stylePreset?: string;
}

const PopoutIcon = () => <Popout $size="iconSize020" $color="buttonFill" />;

export const PopoutButton: React.FC<PopoutButtonProps> = React.memo(props => {
  const {href, onClick} = props;
  return (
    <Button
      {...props}
      icon={PopoutIcon}
      $size={ButtonSize.Large}
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
    />
  );
});
