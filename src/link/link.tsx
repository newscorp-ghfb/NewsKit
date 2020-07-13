import React from 'react';
import {getAnimationFromTheme, styled, getTypePreset} from '../utils/style';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {LinkProps} from './types';
import {getStylePreset} from '../utils/style-preset';
import {Launch} from '../icons/launch';
import {Stack} from '../stack/stack';
import {getToken} from '../utils/get-token';
import {useTheme} from '../themes';
import {isLinkExternal} from './utils';
import {useHasMounted} from '../utils/use-has-mounted';

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  transition-property: color;
  transition-duration: ${getAnimationFromTheme('animationDuration020')};
  transition-timing-function: ${getAnimationFromTheme('animationEaseOut')};
  ${getStylePreset('link', '')}
  ${getTypePreset(undefined, '', {
    withCrop: true,
  })}
  /* Needed for IE  vertical alignment */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    vertical-align: text-bottom;
  }
`;

export const Link: React.FC<LinkProps> = props => {
  const {href, external, children, overrides} = props;
  const {fireEvent} = useInstrumentation();

  const theme = useTheme();
  const hasMounted = useHasMounted();

  const externalIconSize = getToken(
    {theme, overrides},
    'link.externalIcon',
    'externalIcon',
    'size',
  );
  const spaceInBetween = getToken({theme, overrides}, 'link', '', 'space');

  const willRenderExternalIcon =
    external === undefined ? hasMounted && isLinkExternal(href) : external;

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
    >
      <Stack
        flow="horizontal-center"
        space={spaceInBetween}
        wrap="wrap"
        as="span"
      >
        {children}
        {willRenderExternalIcon && (
          <Launch size={externalIconSize} title="External link" />
        )}
      </Stack>
    </StyledLink>
  );
};

Link.displayName = 'Link';
export const A = Link;
