import React from 'react';
import {ButtonOrButtonLinkProps, isButtonLink} from './types';
import {OldStyledFlag} from './styled';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {as as emotionAs} from '../utils/component';
import {IndeterminateProgressIndicator} from '../icons/filled/custom/indeterminate-progress-indicator';
import {useInstrumentation, EventTrigger} from '../instrumentation';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonOrButtonLinkProps
>((props, ref) => {
  const theme = useTheme();
  const {fireEvent} = useInstrumentation();

  const {children, overrides = {}, size = 'medium', loading} = props;

  const buttonSettings: typeof overrides = {
    ...theme.componentDefaults.button[size],
    ...filterOutFalsyProperties(overrides),
  };

  const loadingIndicatorStylePreset =
    buttonSettings.loadingIndicator &&
    buttonSettings.loadingIndicator.stylePreset;

  const getProps = <TProps extends React.HTMLAttributes<HTMLElement>>(
    linkOrButtonProps: TProps,
  ): Omit<TProps, 'size'> => {
    const {
      disabled,
      eventContext,
      eventOriginator,
      ...rest
    } = linkOrButtonProps as ButtonOrButtonLinkProps;

    const isLink = isButtonLink(linkOrButtonProps);

    const disabledLinkProps = {
      href: undefined,
      role: 'link',
      'aria-disabled': 'true',
    };

    return {
      ...(isLink
        ? {
            'data-testid': 'buttonLink',
            ...emotionAs('a'),
            ...rest,
            disabled,
            ...(disabled && disabledLinkProps),
          }
        : {
            type: 'button',
            'data-testid': 'button',
            ...emotionAs('button'),
            ...rest,
            disabled,
            ...(loading && {
              'aria-busy': 'true',
              'aria-live': 'polite',
            }),
          }),
      onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        fireEvent({
          originator: eventOriginator || (isLink ? 'link' : 'button'),
          trigger: EventTrigger.Click,
          context: {
            ...eventContext,
          },
        });
        if (linkOrButtonProps.onClick) {
          linkOrButtonProps.onClick!(event);
        }
      },
      overrides: buttonSettings,
    };
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <OldStyledFlag {...getProps(props)} ref={ref as any}>
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
    </OldStyledFlag>
  );
});

export const OldButton = withOwnTheme(ThemelessButton)({
  defaults,
  stylePresets,
});
