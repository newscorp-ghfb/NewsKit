import React, {useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {
  Block,
  getSpacingCssFromTheme,
  Menu,
  MenuDivider,
  MenuItem,
  styled,
  TextBlock,
} from 'newskit';
import routes from '../../routes';
import {Visible} from '../../../src/grid/visibility';
import {MenuMobileCollapsible} from '../menu-collapsible/menu-collapsible';
import {PageLinkProps, SiteMenuItemProps, SubNavProps} from './types';
import {DesktopNavigationDivider} from './styled';

const StyledTitle = styled(TextBlock)`
  ${getSpacingCssFromTheme('marginLeft', 'space060')};
  ${getSpacingCssFromTheme('marginBottom', 'space040')};
`;

const MenuTitleLinks: React.FC<PageLinkProps> = ({
  page,
  active,
  href,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && ref && ref.current) {
      ref.current.scrollIntoView({block: 'center'});
    }
  });

  return (
    <MenuItem
      href={href}
      data-testid={page}
      selected={active}
      overrides={{
        stylePreset: 'sideBarNavigation',
        typographyPreset: 'utilityButton020',
        minHeight: '40px',
        paddingInlineStart: 'space060',
      }}
      size="small"
    >
      {children} <span ref={ref} />
    </MenuItem>
  );
};
export const SiteMenuItem: React.FC<SiteMenuItemProps> = ({menuItemList}) => {
  const path = useRouter()?.pathname || '';

  return (
    <>
      {menuItemList &&
        menuItemList.map(({title, id, page, subNav}) => (
          <React.Fragment key={id}>
            {page ? (
              <>
                {title.includes('Overview') ||
                title.includes('Getting started') ? undefined : (
                  <>
                    <MenuTitleLinks active={path.includes(id)} href={id}>
                      {title}
                    </MenuTitleLinks>
                  </>
                )}
              </>
            ) : (
              <>
                {title === 'Foundation' ||
                title === 'Actions & Inputs' ||
                title === 'Design' ? (
                  <Block spaceStack="space060" />
                ) : (
                  <DesktopNavigationDivider>
                    <MenuDivider overrides={{stylePreset: 'menuDivider'}} />
                  </DesktopNavigationDivider>
                )}

                <StyledTitle
                  typographyPreset="utilityHeading030"
                  stylePreset="sidebarHeader"
                >
                  {title}
                </StyledTitle>

                <SiteMenuItem menuItemList={subNav as SubNavProps} />
              </>
            )}
          </React.Fragment>
        ))}
    </>
  );
};

const MenuDesktop = ({path}: {path: string}) => {
  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const currentSection =
    currentRoute && routes.filter(({id}) => id === currentRoute[0]);

  return (
    <>
      <Menu
        aria-label="menu-sidebar"
        vertical
        size="small"
        align="start"
        overrides={{spaceInline: 'space000'}}
      >
        {currentSection &&
          currentSection.map(({subNav}) => (
            <SiteMenuItem menuItemList={subNav} />
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
        <MenuMobileCollapsible path={path} menu={routes} />
      </Visible>
      <Visible lg xl>
        <MenuDesktop path={path} />
        <Block spaceStack="space060" />
      </Visible>
    </>
  );
};
