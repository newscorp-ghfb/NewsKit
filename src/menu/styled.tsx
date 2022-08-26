/* eslint-disable import/no-extraneous-dependencies */
import {TextAlignProperty} from 'csstype';
import {Button} from '../button';
import {getStylePreset, getResponsiveSpace, styled} from '../utils/style';
import {MenuGroupProps, MenuItemAlign, MenuProps} from './types';
import {logicalProps} from '../utils/logical-properties';

export const StyledMenu = styled.nav<MenuProps>`
  box-sizing: border-box;

  ${({vertical}) => (vertical ? 'height: 100%;' : 'width: 100%;')}

  > ul {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    ${({vertical}) => vertical && 'flex-direction: column;'}

    ${({vertical}) => (vertical ? 'height: 100%;' : 'width: 100%;')}
  }

  li:last-of-type {
    ${({vertical}) => (vertical ? 'margin-bottom:0;' : 'margin-right: 0')}
  }

  ${getStylePreset('menu', '')};
  ${logicalProps()}
`;

export const StyledMenuGroup = styled.li<
  Pick<MenuProps, 'vertical'> & MenuGroupProps
>`
  box-sizing: border-box;

  // empty string because there is no default and no overrides path because overrides are not nested
  ${getStylePreset('')};

  ${({vertical}) =>
    getResponsiveSpace(
      vertical ? 'marginBottom' : 'marginRight',
      vertical ? `menuGroup` : `menu`,
      '',
      'spaceInline',
    )}

  > ul {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;

    ${({vertical}) => !vertical && 'display: flex;'}
  }
`;

export const StyledMenuGroupTitle = styled.div<
  Pick<MenuProps, 'vertical'> & MenuGroupProps
>`
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

export const StyledMenuItem = styled.li<
  Pick<MenuProps, 'vertical'> & Pick<MenuProps, 'overrides'>
>`
  box-sizing: border-box;

  ${({vertical}) =>
    getResponsiveSpace(
      vertical ? 'marginBottom' : 'marginRight',
      `menu`,
      '',
      'spaceInline',
    )}
`;

const menuItemFlexAlign = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

const menuItemTextAlign = {
  start: 'left',
  center: 'center',
  end: 'right',
};

export const StyledButton = styled(Button)<{
  align?: MenuItemAlign | undefined;
  selected?: boolean;
}>`
  ${({selected}) =>
    selected && getStylePreset('menuItem', '', {isSelected: selected})}

  ${({align}) =>
    align && {
      justifyContent: menuItemFlexAlign[align],
      textAlign: menuItemTextAlign[align] as TextAlignProperty,
    }}
`;

export const StyledMenuDivider = styled.li<
  Pick<MenuProps, 'vertical'> & Pick<MenuProps, 'overrides'>
>`
  box-sizing: border-box;

  .nk-menu-group + & {
    ${({vertical}) =>
      getResponsiveSpace(
        vertical ? 'marginBottom' : 'marginRight',
        `menuGroup`,
        '',
        'spaceInline',
      )}
  }

  .nk-menu-item + & {
    ${({vertical}) =>
      getResponsiveSpace(
        vertical ? 'marginBottom' : 'marginRight',
        `menu`,
        '',
        'spaceInline',
      )}
  }
`;
