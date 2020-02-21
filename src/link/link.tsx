import React from 'react';
import {
  getAnimationFromTheme,
  getTypePresetFromTheme,
  styled,
} from '../utils/style';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {LinkProps} from './types';
import {getStylePresetFromTheme} from '../utils/style-preset';

const StyledLink = styled.a<LinkProps>`
  ${getTypePresetFromTheme(undefined, '$font')};
  text-decoration: ${({$noUnderline}) => ($noUnderline ? `none` : `underline`)};
  transition-property: color;
  transition-duration: ${getAnimationFromTheme('animationDuration020')};
  transition-timing-function: ${getAnimationFromTheme('animationEaseOut')};
  ${getStylePresetFromTheme('linkPrimary', '$stylePreset')}
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
