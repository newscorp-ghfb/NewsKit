import React from 'react';
import {styled, getStylePreset, getMotionFromTheme} from '../utils/style';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {LinkProps} from './types';
import {IconFilledLaunch} from '../icons';
import {Stack} from '../stack/stack';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {isLinkExternal} from './utils';
import {useHasMounted} from '../utils/hooks';
import {TextBlock} from '../text-block';

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  transition-property: color;
  transition-duration: ${getMotionFromTheme('motionDuration020')};
  transition-timing-function: ${getMotionFromTheme('motionEaseOut')};

  ${getStylePreset('link', '')}
`;

const StyledTextBlock = styled(TextBlock)`
  /* Needed for IE to propagate text-decoration properly */
  display: block;
`;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const {
      href,
      external,
      children,
      overrides,
      eventContext,
      eventOriginator = 'link',
    } = props;
    const {fireEvent} = useInstrumentation();

    const theme = useTheme();
    const hasMounted = useHasMounted();

    const externalIconSize = getToken(
      {theme, overrides},
      'link.externalIcon',
      'externalIcon',
      'size',
    );
    const spaceInBetween = getToken(
      {theme, overrides},
      'link',
      '',
      'spaceInline',
    );
    const typographyPreset = getToken(
      {theme, overrides},
      'link',
      '',
      'typographyPreset',
    );

    const willRenderExternalIcon =
      external === undefined ? hasMounted && isLinkExternal(href) : external;

    return (
      <StyledLink
        ref={ref}
        {...props}
        onClick={(...args) => {
          fireEvent({
            originator: eventOriginator,
            trigger: EventTrigger.Click,
            context: {
              href: props.href,
              ...eventContext,
            },
          });
          if (props.onClick) {
            props.onClick(...args);
          }
        }}
      >
        <Stack
          flow="horizontal-center"
          spaceInline={
            willRenderExternalIcon || React.Children.count(children) !== 1
              ? spaceInBetween
              : null
          }
          as="span"
        >
          {React.Children.map(children, child =>
            typeof child === 'string' ? (
              <StyledTextBlock as="span" typographyPreset={typographyPreset}>
                {child}
              </StyledTextBlock>
            ) : (
              child
            ),
          )}

          {willRenderExternalIcon && (
            <IconFilledLaunch
              title="External link"
              overrides={{size: externalIconSize}}
            />
          )}
        </Stack>
      </StyledLink>
    );
  },
);

Link.displayName = 'Link';
export const A = Link;
