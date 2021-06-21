import {TextAlignProperty} from 'csstype';
import {Button} from '../button';
import {getStylePreset, getResponsiveSpace, styled} from '../utils/style';
import {MenuItemAlign, MenuItemDistribution, MenuProps} from './types';

const getFlexFromTabsDistribution = (
  distribution: MenuItemDistribution,
  vertical: boolean,
) => {
  switch (distribution) {
    case MenuItemDistribution.Grow:
      return 'flex: 1 0 auto';
    case MenuItemDistribution.Equal:
      return `${vertical ? 'height' : 'width'}: 100%`;
    case MenuItemDistribution.Start:
    default:
      return 'flex: 0 0 auto';
  }
};

export const StyledMenuContainer = styled.nav<MenuProps>`
  box-sizing: border-box;
  ${({vertical}) => (vertical ? 'height: 100%;' : 'width: 100%;')}

  ul {
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    ${({vertical}) => vertical && 'flex-direction: column;'}

    ${({vertical}) => (vertical ? 'height: 100%;' : 'width: 100%;')}
  }

  ${getStylePreset('menu', '')};
`;

export const StyledMenuItem = styled.li<
  Pick<MenuProps, 'vertical' | 'distribution'> & Pick<MenuProps, 'overrides'>
>`
  box-sizing: border-box;

  ${({vertical}) =>
    getResponsiveSpace(
      vertical ? 'marginBottom' : 'marginRight',
      `menu`,
      '',
      'spaceInline',
    )}

  display: flex;
  // align-items: stretch;
  width: ${({vertical}) => (vertical ? '100%' : '')};
  overflow: hidden;
  ${({distribution, vertical}) =>
    getFlexFromTabsDistribution(
      distribution as MenuItemDistribution,
      vertical as boolean,
    )};
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
