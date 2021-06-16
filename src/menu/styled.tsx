import {TextAlignProperty} from 'csstype';
import {Button} from '../button';
import {getStylePreset, getResponsiveSpace, styled} from '../utils/style';
import {MenuItemAlign, MenuProps} from './types';

export const StyledMenuContainer = styled.nav<MenuProps>`
  box-sizing: border-box;

  ul {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    ${({vertical}) => vertical && 'flex-direction: column;'}
  }

  ${getStylePreset('menu', '')};
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
  end: 'flex-end',
};

const menuItemTextAlign = {
  start: 'left',
  end: 'right',
};

export const StyledButton = styled(Button)<{
  align?: MenuItemAlign;
  selected?: boolean;
}>`
  ${({selected}) =>
    selected && getStylePreset('menuItem', '', {isSelected: selected})}

  ${({align}) =>
    align &&
    align !== MenuItemAlign.Center && {
      justifyContent: menuItemFlexAlign[align],
      textAlign: menuItemTextAlign[align] as TextAlignProperty,
    }}
`;
