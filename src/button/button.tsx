import React from 'react';
import {ButtonOrButtonLinkProps, ButtonSize, isButtonLink} from './types';
import {StyledFlag} from './styled';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';
import {IndeterminateProgressIndicator} from '../icons/filled/custom/indeterminate-progress-indicator';
import {useInstrumentation, EventTrigger} from '../instrumentation';

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonOrButtonLinkProps
>((props, ref) => {
  const theme = useTheme();
  const {fireEvent} = useInstrumentation();

  const {
    children,
    overrides = {},
    size = ButtonSize.Medium,
    disabled,
    loading,
    eventContext,
    eventOriginator,
  } = props;

  const buttonSettings: typeof overrides = {
    ...theme.componentDefaults.button[size],
    ...filterOutFalsyProperties(overrides),
  };

  const loadingIndicatorStylePreset =
    buttonSettings.loadingIndicator &&
    buttonSettings.loadingIndicator.stylePreset;

  const getProps = <TProps extends React.HTMLAttributes<HTMLElement>>(
    linkOrButtonProps: TProps,
  ): Omit<TProps, 'size'> => ({
    ...(isButtonLink(linkOrButtonProps) && Boolean(linkOrButtonProps.href)
      ? {
          'data-testid': 'buttonLink',
          ...emotionAs('a'),
          ...linkOrButtonProps,
          href: disabled
            ? // eslint-disable-next-line no-script-url
              'javascript:void(0)'
            : linkOrButtonProps.href,
        }
      : {
          type: 'button',
          'data-testid': 'button',
          ...emotionAs('button'),
          ...linkOrButtonProps,
        }),
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      fireEvent({
        originator:
          eventOriginator ||
          (isButtonLink(linkOrButtonProps) && Boolean(linkOrButtonProps.href)
            ? 'link'
            : 'button'),
        trigger: EventTrigger.Click,
        context: {
          ...eventContext,
        },
      });
      if (linkOrButtonProps.onClick) {
        linkOrButtonProps.onClick!(event);
      }
    },
    disabled,
    loading,
    overrides: buttonSettings,
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <StyledFlag {...getProps(props)} ref={ref as any}>
      {loading ? (
        <IndeterminateProgressIndicator
          overrides={{
            size: buttonSettings!.iconSize,
            stylePreset: loadingIndicatorStylePreset,
          }}
        />
      ) : (
        children
      )}
    </StyledFlag>
  );
});
