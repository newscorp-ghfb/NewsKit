import React from 'react';
import {useMenuContext} from './context';
import {MenuGroupProps} from './types';
import {StyledMenuGroup, StyledMenuGroupTitle} from './styled';
import {TextBlock} from '../text-block';
import {splitAriaProps} from '../utils/a11y';
import {renderIfReactComponent} from '../utils/component';
import {getToken} from '../utils/get-token';
import {Theme, useTheme} from '../theme';
import {useReactKeys} from '../utils/hooks';

const renderTitle = (
  {title: MenuTitle, overrides}: Partial<MenuGroupProps>,
  titleID: string,
  theme: Theme,
) => {
  if (typeof MenuTitle === 'string') {
    const stylePreset = getToken(
      {theme, overrides},
      'menuGroup.title',
      'title',
      'stylePreset',
    );

    const typographyPreset = getToken(
      {theme, overrides},
      'menuGroup.title',
      'title',
      'typographyPreset',
    );

    const titleOverrides = {
      stylePreset,
      typographyPreset,
    };

    return (
      <TextBlock as="h2" id={titleID} {...titleOverrides}>
        {MenuTitle}
      </TextBlock>
    );
  }

  return renderIfReactComponent(MenuTitle);
};

export const MenuGroup = React.forwardRef<HTMLLIElement, MenuGroupProps>(
  ({overrides, children, title, ...restProps}, ref) => {
    const theme = useTheme();
    const {vertical} = useMenuContext();
    const {aria, rest} = splitAriaProps(restProps);
    const titleID = useReactKeys(1)[0];

    const shouldRenderTitle = Boolean(title);

    return (
      <StyledMenuGroup
        className="nk-menu-group"
        {...rest}
        overrides={overrides}
        vertical={vertical}
        ref={ref}
      >
        {shouldRenderTitle && (
          <StyledMenuGroupTitle overrides={overrides}>
            {renderTitle({title, overrides}, titleID, theme)}
          </StyledMenuGroupTitle>
        )}
        <ul
          {...(shouldRenderTitle && {
            'aria-labelledby': titleID,
            ...aria,
          })}
        >
          {children}
        </ul>
      </StyledMenuGroup>
    );
  },
);

MenuGroup.displayName = 'MenuGroup';
