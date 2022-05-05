import React, {useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {Block, Label, Menu, MenuDivider, MenuGroup} from 'newskit';
import routes from '../../routes';
import {Visible} from '../../../src/grid/visibility';
import {MenuNavCollapsible} from '../menu-collapsible/menu-collapsible';
import {PageLinkProps, SiteMenuItemProps, SubNavProps} from './types';
import {DesktopNavigationDivider, Indicator, MenuItemStyled} from './styled';

const PageMenuLinks: React.FC<PageLinkProps> = ({
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
    <div ref={ref}>
      <MenuItemStyled
        href={href}
        data-testid={page}
        $selected={active}
        overrides={{
          typographyPreset: 'utilityButton020',
          // tier 1
          // add minHeight to make sure indicator and container remain same height
          minHeight: '40px',
        }}
        size="small"
      >
        {children}
      </MenuItemStyled>
    </div>
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
                title.includes('Getting started') ? (
                  <Block spaceStack="space060" />
                ) : (
                  <>
                    <Indicator
                      className={path.includes(id) ? 'selected' : undefined}
                    />
                    <PageMenuLinks active={path.includes(id)} href={id}>
                      <Label
                        overrides={{
                          stylePreset: 'interactivePrimary030',
                          typographyPreset: 'utilityButton020',
                          spaceStack: 'space000',
                          marginInline: 'space040',
                        }}
                      >
                        {title}
                      </Label>
                    </PageMenuLinks>
                  </>
                )}
              </>
            ) : (
              <>
                {/* I cant get the first item in the array
              as this returns each title individually  */}
                {title === 'Foundation' ||
                title === 'Actions & Inputs' ||
                title === 'Design' ? undefined : (
                  <DesktopNavigationDivider>
                    <MenuDivider />
                  </DesktopNavigationDivider>
                )}
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
                  <SiteMenuItem menuItemList={subNav as SubNavProps} />
                  {/* added this cause last item needs space */}
                  <Block spaceStack="space045" />
                </MenuGroup>
              </>
            )}
          </React.Fragment>
        ))}
    </>
  );
};

const MenuNavDesktop = () => {
  const path = useRouter()?.pathname || '';
  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const currentSection =
    currentRoute && routes.filter(({id}) => id === currentRoute[0]);

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
            <div key={title}>
              <SiteMenuItem menuItemList={subNav} />
            </div>
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
