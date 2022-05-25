import {getSpacingCssFromTheme, getStylePresetFromTheme, styled} from 'newskit';

import React from 'react';
import {useMenuContext} from '../../../src/menu/context';
import {MenuGroupProps, MenuProps} from '../../../src/menu/types';

import {splitAriaProps} from '../../../src/utils/a11y';

export const StyledAnchor = styled.a`
  text-decoration: none;
`;

const StyledMenuCollapsible = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledMenuCollapsibleItem = styled.div<
  Pick<MenuProps, 'vertical'> & MenuGroupProps
>`
  ${getStylePresetFromTheme('sidebarHeader')};
  ${getSpacingCssFromTheme('marginTop', 'space040')};
  ${getSpacingCssFromTheme('marginBottom', 'space000')};

  &.collapsed > h5 {
    ${getSpacingCssFromTheme('marginBottom', 'space050')};
 
    
  }
  &.expanded > h5 {
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

  &.expanded > li:last-of-type {
    ${getSpacingCssFromTheme('marginBottom', 'space040')};
  }
  }
`;

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
export const MobileNavigationDivider = styled.div`
  width: 100%;
  position: relative;
  left: calc(-50vw + 50%);

  ${getSpacingCssFromTheme('marginTop', 'space010')};
  ${getSpacingCssFromTheme('marginBottom', 'space020')};
`;

MenuCollapsible.displayName = 'MenuCollapsible';
