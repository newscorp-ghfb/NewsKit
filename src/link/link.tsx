import React from 'react';
import {
  getColorFromTheme,
  getAnimationFromTheme,
  getTypePresetFromTheme,
  styled,
} from '../utils/style';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {LinkProps} from './types';

const StyledLink = styled.a<LinkProps>`
  ${getTypePresetFromTheme(undefined, '$font')};
  color: ${getColorFromTheme('linkText', '$color')};
  text-decoration: ${({$noUnderline}) => ($noUnderline ? `none` : `underline`)};
  transition-property: color;
  transition-duration: ${getAnimationFromTheme('timing100')};
  transition-timing-function: ${getAnimationFromTheme('easeOutCurve')};

  :visited {
    color: ${getColorFromTheme('linkVisited', '$color')};
  }

  :hover {
    color: ${getColorFromTheme('linkHover', '$color')};
  }

  :active {
    color: ${getColorFromTheme('linkActive', '$color')};
  }
`;

export const Link: React.FC<LinkProps> = props => {
  const {fireEvent} = useInstrumentation();
  return (
    <StyledLink
      {...props}
      onClick={(...args) => {
        fireEvent({
          originator: 'link',
          trigger: EventTrigger.Click,
          data: {
            href: props.href,
          },
        });
        if (props.onClick) {
          props.onClick(...args);
        }
      }}
    />
  );
};

Link.displayName = 'Link';
export const A = Link;
