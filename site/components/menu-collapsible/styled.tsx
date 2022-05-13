import {
  getColorFromTheme,
  getSizingFromTheme,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  styled,
} from 'newskit';

import React from 'react';
import {useMenuContext} from '../../../src/menu/context';
import {MenuGroupProps, MenuProps} from '../../../src/menu/types';

import {splitAriaProps} from '../../../src/utils/a11y';

const StyledMenuCollapsible = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledMenuCollapsibleItem = styled.div<
  Pick<MenuProps, 'vertical'> & MenuGroupProps
>`
  ${getSpacingCssFromTheme('marginTop', 'space040')};
  ${getSpacingCssFromTheme('marginBottom', 'space000')};

  &.collapsed > label {
    ${getSpacingCssFromTheme('marginBottom', 'space050')};
  }
  &.expanded > label {
    ${getSpacingCssFromTheme('marginBottom', 'space040')};
  }
  &.collapsed > li {
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.8s cubic-bezier(0, 1, 0, 1) -0.1s;
    ${getSpacingCssFromTheme('marginBottom', 'space000')};
    visibility: hidden;
  }
  &.expanded > li {
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
  &.expanded .selected {
    position: relative;
    overflow: visible;
    ::before {
      content: '';
      position: absolute;
      background: ${getColorFromTheme('blue060')};
      height: ${getSizingFromTheme('sizing070')};
      width: ${getSizingFromTheme('sizing010')};

      ${getStylePresetFromTheme('interactivePrimary030')};
      border-width: 4px;
      border-radius: 0 4px 4px 0;
    }
  }
`;

export const Indicator = styled.div``;

type MenuCollapsibleProps = {
  className: string;
};

type MenuCollapsiblePropsTypes = MenuCollapsibleProps & MenuGroupProps;

export const MenuCollapsible = React.forwardRef<
  HTMLDivElement,
  MenuCollapsiblePropsTypes
>(({overrides, children, title, ...restProps}, ref) => {
  const {vertical} = useMenuContext();
  const {rest} = splitAriaProps(restProps);

  return (
    <StyledMenuCollapsible>
      <StyledMenuCollapsibleItem
        className="nk-menu-group"
        {...rest}
        overrides={overrides}
        vertical={vertical}
        ref={ref}
      >
        {children}
      </StyledMenuCollapsibleItem>
    </StyledMenuCollapsible>
  );
});

MenuCollapsible.displayName = 'MenuCollapsible';
