import React, {useMemo} from 'react';
import {styled, getStylePreset} from '../utils/style';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {InternalLinkProps} from './types';
import {IconFilledLaunch} from '../icons';
import {Stack} from '../stack/stack';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {isLinkExternal} from './utils';
import {useHasMounted} from '../utils/hooks';
import {TextBlock} from '../text-block';
import {logicalProps} from '../utils/logical-properties';
import {getTransitionPreset} from '../utils/style/transition-preset';

const StyledLink = styled.a<InternalLinkProps>`
  display: ${({textOnly}) => (textOnly ? 'inline' : 'inline-block')};
  ${getTransitionPreset(`link`, '')};
  ${getStylePreset('link', '')}
  ${logicalProps('link')}
`;

const StyledTextBlock = styled(TextBlock)`
  /* Needed for IE to propagate text-decoration properly */
  display: block;
`;

export const InternalLink = React.forwardRef<
  HTMLAnchorElement,
  InternalLinkProps
>((props, ref) => {
  const {
    noCrop,
    href,
    external,
    textOnly,
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

  const renderExternalIcon = useMemo(
    () =>
      willRenderExternalIcon && (
        <IconFilledLaunch
          title="External link"
          overrides={{size: externalIconSize}}
        />
      ),
    [externalIconSize, willRenderExternalIcon],
  );

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
      {textOnly ? (
        <>
          {children}
          {renderExternalIcon}
        </>
      ) : (
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
              <StyledTextBlock
                noCrop={noCrop}
                as="span"
                typographyPreset={typographyPreset}
              >
                {child}
              </StyledTextBlock>
            ) : (
              child
            ),
          )}

          {renderExternalIcon}
        </Stack>
      )}
    </StyledLink>
  );
});

InternalLink.displayName = 'InternalLink;';
