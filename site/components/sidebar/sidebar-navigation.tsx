import React from 'react';
import {useRouter} from 'next/router';
import {
  Block,
  getColorFromTheme,
  getSizingFromTheme,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  Label,
  Menu,
  MenuDivider,
  MenuGroup,
  MenuItem,
  styled,
} from 'newskit';

import routes from '../../routes';
import {Visible} from '../../../src/grid/visibility';
import {MenuNavCollapsible} from '../menu-collapsible/menu-collapsible';

export const DesktopNavigationDivider = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  ${getSpacingCssFromTheme('marginTop', 'space045')};
  ${getSpacingCssFromTheme('marginBottom', 'space060')};
`;

const Indicator = styled.div`
  &.selected {
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

const MenuItemStyled = styled(MenuItem)`
  width: 276px;
`;

const MenuNavDesktop = () => {
  const path = useRouter().pathname;
  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const currentSection =
    currentRoute && routes.filter(({id}) => id === currentRoute[0]);

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

  const createMenuItem = (list: SubNavItemProps[]) => (
    <>
      {list &&
        list.map(({title, id, subNav, page}) => (
          <React.Fragment key={id}>
            {page ? (
              <>
                <Indicator
                  id="hello"
                  className={path.includes(id) ? 'selected' : undefined}
                />

                <MenuItemStyled
                  href={id}
                  overrides={{
                    typographyPreset: 'utilityButton020',
                    // tier 1
                    // add minHeight to make sure indicator and container remain same height
                    minHeight: '40px',
                  }}
                  size="small"
                  className={path.includes(id) ? 'selected' : undefined}
                >
                  <Label
                    overrides={{
                      stylePreset: 'interactivePrimary030',
                      typographyPreset: 'utilityButton020',
                      spaceStack: 'space000',

                      marginInline: 'space045',
                    }}
                  >
                    {title}
                    <Block
                      spaceStack={
                        // The row spacing between multiple flags in the cell
                        title === 'Hooks' ? 'space045' : undefined
                      }
                    />
                  </Label>
                </MenuItemStyled>
              </>
            ) : (
              <>
                <DesktopNavigationDivider>
                  <MenuDivider />
                </DesktopNavigationDivider>
                {/* <SideBarNavigationWrapper id="wrapper test"> */}
                <MenuGroup
                  title={title}
                  overrides={{
                    title: {
                      typographyPreset: 'utilityHeading030',
                      stylePreset: ' menuItemVertical',
                      spaceInline: 'space040',
                      spaceInset: 'space060',
                    },
                  }}
                >
                  {subNav && createMenuItem(subNav)}
                  {/* added this cause last item needs space */}
                  <Block spaceStack="space045" />
                </MenuGroup>
              </>
            )}
          </React.Fragment>
        ))}
    </>
  );

  return (
    <>
      <Menu
        aria-label="menu"
        vertical
        size="small"
        align="start"
        overrides={{spaceInline: 'space000'}}
      >
        {currentSection &&
          currentSection.map(({title, subNav}) => (
            <div key={title}> {subNav && createMenuItem(subNav)}</div>
          ))}
      </Menu>
    </>
  );
};
export const SidebarNav = () => {
  const path = useRouter().pathname;

  return (
    <>
      <Visible xs sm md>
        <MenuNavCollapsible path={path} menu={routes} />
      </Visible>
      <Visible lg xl>
        <MenuNavDesktop />
      </Visible>
    </>
  );
};
