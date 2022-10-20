import React, {useEffect, useRef} from 'react';
import {
  Block,
  InstrumentationProvider,
  Menu,
  MenuDivider,
  MenuItem,
} from 'newskit';
import LinkNext from 'next/link';
import {useRouter} from 'next/router';
import routes from '../../routes';
import {Visible} from '../../../src/grid/visibility';
import {MenuMobileCollapsible} from '../menu-collapsible/menu-collapsible';
import {PageLinkProps, SiteMenuItemProps, SubNavProps} from './types';
import {DesktopNavigationDivider, StyledTitle} from './styled';

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
    <LinkNext href={href} passHref>
      <MenuItem
        href={href}
        data-testid={page}
        selected={active}
        eventContext={{value: children}}
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
    </LinkNext>
  );
};
export const SiteMenuItem: React.FC<SiteMenuItemProps> = ({menuItemList}) => {
  const path = useRouter()?.pathname || '';

  return (
    <>
      {menuItemList &&
        menuItemList.map(({title, id, page, subNav, indexPage}) => (
          <React.Fragment key={id}>
            {page ? (
              <>
                {indexPage ? undefined : (
                  <MenuTitleLinks active={path === id} href={id}>
                    {title}
                  </MenuTitleLinks>
                )}
              </>
            ) : (
              <>
                {title === 'Foundations' ||
                title === 'Actions & Inputs' ||
                title === 'Design' ||
                title === 'Forms' ? (
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
    <InstrumentationProvider context={{area: 'side navigation'}}>
      <Menu
        aria-label="menu-sidebar"
        vertical
        size="small"
        align="start"
        overrides={{spaceInline: 'space000'}}
      >
        {currentSection &&
          currentSection.map(({subNav, id}) => (
            <SiteMenuItem menuItemList={subNav} key={id} />
          ))}
      </Menu>
    </InstrumentationProvider>
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
