import React, {useEffect, useState} from 'react';
import { Menu, MenuGroup, MenuItem } from '../../src/menu';
import { MenuGroupProps } from '../../src/menu/types';
import { Flow, Stack } from '../../src/stack';
import {
  getBorderCssFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  getSpacingCssFromTheme,
  styled,
} from '../../src/utils/style';
import { IconExpandLess, IconExpandMore } from './icons';
import { H2 } from './markdown-elements';

const StyledMenuCollapsable = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledMenuCollapsableItem = styled.li<any>`
  ${getSpacingCssFromTheme('marginTop', 'space030')};
  ${getSpacingCssFromTheme('marginBottom', 'space000')};
  & .nk-menu-group {
    ${getSpacingCssFromTheme('marginTop', 'space030')};
  }
  & h2 {
    ${getSpacingCssFromTheme('marginBottom', 'space030')};
  }
  &.collapsed > nav {
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.8s cubic-bezier(0, 1, 0, 1) -0.1s;
  }
  &.expanded > nav {
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

type NavProps = {
  title: string;
  id: string;
  description?: string;
  page?: boolean;
};

type SubNavProps = {
  subNav?: NavProps[];
};

type SubNavItemProps = NavProps & SubNavProps;

export const MenuNav = ({
  path,
  menu,
}: {
  path: string;
  menu: SubNavItemProps[];
}) => {
    const [openPanelIds, setOpenPanelIds] = useState<Array<number>>([]);
    useEffect(() => {
      const index = menu.findIndex(obj => path.includes(obj.id)) || 0;
      setOpenPanelIds([index]);
    }, []);

    const createMenuItem = (list: SubNavItemProps[]) => (
        <>
          {list &&
            list.map(({title, id, subNav, page}) => (
              <>
                {page ? (
                  <>
                    <MenuItem
                      href={id}
                      overrides={{
                        typographyPreset: 'utilityButton020',
                        spaceInset: 'space030',
                        stylePreset: 'sideNavItemHorizontal',
                      }}
                      selected={path.includes(id)}
                      size="small"
                      className={path.includes(id) ? 'selected' : undefined}
                    >
                      {title}
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuGroup
                      title={title}
                      overrides={{
                        title: {
                          typographyPreset: 'utilityButton030',
                          stylePreset: 'inkContrast',
                          spaceInset: 'space030',
                          spaceInline: 'space040',
                        },
                      }}
                    >
                      {subNav && createMenuItem(subNav)}
                    </MenuGroup>
                  </>
                )}
              </>
            ))}
        </>
      );
      return (
        <StyledMenuCollapsable>
          {/* {menu.map(({title, subNav}, index) => (
            <StyledMenuCollapsableItem
              className={openPanelIds.includes(index) ? 'expanded' : 'collapsed'}
            >
              <H2
                // overrides={{typographyPreset: 'utilityHeading020'}}
                onClick={() =>
                  openPanelIds.includes(index)
                    ? setOpenPanelIds([])
                    : setOpenPanelIds([index])
                }
              >
                <Stack
                  flow={Flow.HorizontalCenter}
                  stackDistribution="space-between"
                >
                  <span>{title}</span>
                  {openPanelIds.includes(index) ? (
                    <IconExpandLess />
                  ) : (
                    <IconExpandMore />
                  )}
                </Stack>
              </H2> */}
              <Menu
                aria-label="menu"
                vertical
                size="small"
                align="start"
                overrides={{spaceInline: 'space000'}}
              >
                   {menu.map(({title, subNav}, index) => (
            <StyledMenuCollapsableItem
              className={openPanelIds.includes(index) ? 'expanded' : 'collapsed'}
            >
              <H2
                // overrides={{typographyPreset: 'utilityHeading020'}}
                onClick={() =>
                  openPanelIds.includes(index)
                    ? setOpenPanelIds([])
                    : setOpenPanelIds([index])
      
                }
                
              >
                <Stack
                  flow={Flow.HorizontalCenter}
                  stackDistribution="space-between"
                >
                  <span>{title}</span>
                  {openPanelIds.includes(index) ? (
                    <IconExpandLess />
                  ) : (
                    <IconExpandMore />
                  )}
                </Stack>
              </H2>
                {subNav && createMenuItem(subNav)}
                </StyledMenuCollapsableItem>
         
           
          ))}
               </Menu>
        </StyledMenuCollapsable>
      );




};
