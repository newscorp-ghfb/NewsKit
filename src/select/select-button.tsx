import React, {FocusEventHandler} from 'react';

import {
  ButtonSelectSize,
  SelectButtonIcon,
  SelectButtonOverrides,
  SelectOptionProps,
} from './types';
import {Block} from '../block';
import {
  StyledButtonContents,
  StyledButtonIcons,
  StyledSelectButton,
  StyledIconBox,
  StyledDropdownIconButton,
} from './styled';
import {WithEnhancers} from '../with-enhancers/with-enhancers';
import {IconFilledKeyboardArrowDown} from '../icons';
import {IndeterminateProgressIndicator} from '../icons/filled/custom/indeterminate-progress-indicator';
import {ScreenReaderOnly} from '../screen-reader-only';
import {FormInputState} from '../form/types';
import {getToken} from '../utils/get-token';
import {getSingleStylePreset} from '../utils/style/style-preset';
import {useTheme} from '../theme';
import {
  omitLogicalMarginPropsFromOverrides,
  omitLogicalPaddingPropsFromOverrides,
} from '../utils/logical-properties';
import {getComponentOverrides} from '../utils/overrides';
import {get} from '../utils/get';

const DefaultIcon = ({isOpen, ...props}: SelectButtonIcon) => (
  <IconFilledKeyboardArrowDown {...props} />
);

interface SelectButtonProps {
  size: ButtonSelectSize;
  placeholder: string;
  isFocused: boolean;
  overrides?: SelectButtonOverrides;
  selectedItem?: React.ReactElement<SelectOptionProps>;
  state?: FormInputState;
  loading?: boolean;
  startEnhancer?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  validationIcon?: React.ReactNode;

  setAllowBlur: Function;
  onSelectButtonBlur: FocusEventHandler<HTMLButtonElement>;
  onSelectButtonFocus: FocusEventHandler<HTMLButtonElement>;
  openMenu: Function;
  itemToString: Function;
  isOpen: boolean;
  selectRef: React.RefObject<HTMLDivElement>;
}

export const SelectButton = React.forwardRef<
  HTMLButtonElement,
  SelectButtonProps
>((props, selectButtonRef) => {
  const {
    size,
    placeholder,
    isFocused,
    loading,
    state,
    selectedItem,
    overrides,
    startEnhancer,
    endEnhancer,
    validationIcon,

    setAllowBlur,
    onSelectButtonBlur,
    onSelectButtonFocus,
    openMenu,
    itemToString,
    isOpen,
    selectRef,

    ...restProps
  } = props;

  const selectedItemDisplay = (selectedItem as React.ReactElement)?.props
    ?.selectedDisplay;

  const theme = useTheme();

  const buttonSpaceInline = getToken(
    {theme, overrides},
    `select.${size}.button`,
    '',
    'spaceInline',
  );

  const loadingIconStylePreset = getToken(
    {theme, overrides: overrides?.loadingIndicator},
    `select.${size}.button.loadingIndicator`,
    '',
    'stylePreset',
  );

  const iconSize = getToken({theme}, `select.${size}.button`, '', 'iconSize');

  const buttonStylePreset = getToken(
    {theme, overrides},
    `select.${size}.button`,
    '',
    'stylePreset',
  );

  const placeholderColor = getSingleStylePreset(
    theme,
    'base',
    'placeholderColor',
    buttonStylePreset,
  );

  const placeholderSelectedColor = getSingleStylePreset(
    theme,
    'base',
    'color',
    buttonStylePreset,
  );

  const enhancersOverrides = omitLogicalPaddingPropsFromOverrides(overrides);
  const inputOverrides = omitLogicalMarginPropsFromOverrides(overrides);

  const indicatorIconDefaults = get(
    theme,
    `componentDefaults.select.${size}.button.indicatorIcon`,
  );
  const indicatorIconDefaultProps = {
    isOpen,
    overrides: {
      ...indicatorIconDefaults,
      size: iconSize,
      ...overrides?.indicatorIcon,
    },
  };

  const [IndicatorIcon, indicatorIconProps] = getComponentOverrides(
    overrides?.indicatorIcon,
    DefaultIcon,
    indicatorIconDefaultProps,
  );

  return (
    <WithEnhancers
      componentDefaultsPath={`select.${size}.button`}
      isFocused={isFocused}
      overrides={enhancersOverrides}
      state={state}
      startEnhancer={startEnhancer}
      endEnhancer={
        <>
          <StyledButtonIcons
            disabled={state === 'disabled'}
            $loading={loading}
            $spaceInline={buttonSpaceInline}
          >
            {validationIcon}
            {loading ? (
              <StyledIconBox>
                <IndeterminateProgressIndicator
                  overrides={{
                    stylePreset: loadingIconStylePreset,
                    size: iconSize,
                  }}
                />
              </StyledIconBox>
            ) : (
              <StyledDropdownIconButton
                data-testid="select-chevron-button"
                aria-hidden
                tabIndex={-1}
                type="button"
                disabled={state === 'disabled'}
                onMouseDown={() => {
                  setAllowBlur(false);
                }}
                onMouseUp={() => {
                  openMenu();
                  setAllowBlur(true);
                }}
              >
                <StyledIconBox>
                  <IndicatorIcon
                    {...(indicatorIconProps as SelectButtonIcon)}
                  />
                  {/* <IconFilledKeyboardArrowDown overrides={{size: iconSize}} /> */}
                </StyledIconBox>
              </StyledDropdownIconButton>
            )}
          </StyledButtonIcons>
          {endEnhancer && <Block spaceInline={buttonSpaceInline} />}
          {endEnhancer}
        </>
      }
      ref={selectRef}
    >
      <ScreenReaderOnly>{itemToString(selectedItem)}</ScreenReaderOnly>
      <StyledSelectButton
        type="button"
        onBlur={onSelectButtonBlur}
        onFocus={onSelectButtonFocus}
        $size={size}
        $loading={loading}
        disabled={state === 'disabled' || loading}
        data-testid="select-button"
        ref={selectButtonRef}
        overrides={inputOverrides}
        {...restProps}
      >
        <StyledButtonContents
          $size={size}
          disabled={state === 'disabled'}
          $color={selectedItem ? placeholderSelectedColor : placeholderColor}
        >
          {selectedItemDisplay || selectedItem || placeholder}
        </StyledButtonContents>
      </StyledSelectButton>
    </WithEnhancers>
  );
});
