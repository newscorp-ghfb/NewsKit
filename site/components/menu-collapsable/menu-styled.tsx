import {
  getBorderCssFromTheme,
  getColorFromTheme,
  getResponsiveSpace,
  getSizingFromTheme,
  getSpacingCssFromTheme,
  styled,
} from 'newskit';

import React from 'react';
import {useMenuContext} from '../../../src/menu/context';
import {MenuGroupProps, MenuProps} from '../../../src/menu/types';

import {splitAriaProps} from '../../../src/utils/a11y';

const StyledMenuCollapsable = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledMenuCollapsableItem = styled.div<
  Pick<MenuProps, 'vertical'> & MenuGroupProps
>`
  ${getSpacingCssFromTheme('marginTop', 'space030')};
  ${getSpacingCssFromTheme('marginBottom', 'space000')};

  & h2 {
    ${getSpacingCssFromTheme('marginBottom', 'space030')};
  }
  &.collapsed > li {
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.8s cubic-bezier(0, 1, 0, 1) -0.1s;
    ${getSpacingCssFromTheme('marginBottom', 'space000')};
    visibility: hidden;
  }
  &.expanded > li {
    ${getSpacingCssFromTheme('marginBottom', 'space030')};
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
  &.expanded .selected {
    position: relative;
    overflow: visible;
    ::before {
      content: '';
      position: absolute;
      left: -${getSizingFromTheme('sizing060')};
      background: ${getColorFromTheme('blue060')};
      height: ${getSizingFromTheme('sizing070')};
      width: ${getSizingFromTheme('sizing030')};
      top: ${getSizingFromTheme('sizing010')};

      ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
    }
  }
`;

export const StyledMenuGroupTitle = styled.div<MenuGroupProps>`
  box-sizing: border-box;

  ${getResponsiveSpace(
    'marginBottom',
    'menuGroup.title',
    'title',
    'spaceInline',
  )}

  ${getResponsiveSpace(
    space => ({paddingLeft: space, paddingRight: space}),
    'menuGroup.title',
    'title',
    'spaceInset',
  )}
`;

type MenuCollapsableProps = {
  className?: string;
};

type MenuCollapsablePropsTypes = MenuCollapsableProps & MenuGroupProps;

export const MenuCollapsable = React.forwardRef<
  HTMLDivElement,
  MenuCollapsablePropsTypes
>(({overrides, children, title, ...restProps}, ref) => {
  const {vertical} = useMenuContext();
  const {rest} = splitAriaProps(restProps);

  return (
    <StyledMenuCollapsable>
      <StyledMenuCollapsableItem
        className="nk-menu-group"
        {...rest}
        overrides={overrides}
        vertical={vertical}
        ref={ref}
      >
        {children}
      </StyledMenuCollapsableItem>
    </StyledMenuCollapsable>
  );
});

MenuCollapsable.displayName = 'MenuCollapsable';
