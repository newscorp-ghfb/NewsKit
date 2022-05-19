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
import {MenuNavCollapsible} from '../menu-collapsible/menu-collapsible';
import {PageLinkProps, SiteMenuItemProps, SubNavProps} from './types';
import {DesktopNavigationDivider} from './styled';

const StyledTitle = styled(TextBlock)`
  ${getSpacingCssFromTheme('marginLeft', 'space060')};
  ${getSpacingCssFromTheme('marginBottom', 'space040')};
`;

const MenuItemStyled = styled(MenuItem)`
  ${({selected}) =>
    selected ? getSpacingCssFromTheme('paddingInline', '12px') : undefined}
  width: 100vw;
`;

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
    <MenuItemStyled
      href={href}
      data-testid={page}
      selected={active}
      overrides={{
        stylePreset: 'sideBarNavigation',

        minHeight: '40px',
      }}
      size="small"
    >
      <div ref={ref}>{children}</div>
    </MenuItemStyled>
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
                    <PageMenuLinks active={path.includes(id)} href={id}>
                      <TextBlock
                        stylePreset="interactivePrimary030"
                        typographyPreset="utilityButton020"
                        marginInline="space040"
                      >
                        {title}
                      </TextBlock>
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
                title === 'Design' ? (
                  <Block spaceStack="space060" />
                ) : (
                  <DesktopNavigationDivider>
                    <MenuDivider />
                  </DesktopNavigationDivider>
                )}

                <StyledTitle
                  typographyPreset="utilityHeading030"
                  stylePreset="sidebarHeader"
                >
                  {title}
                </StyledTitle>

                <SiteMenuItem menuItemList={subNav as SubNavProps} />
                <Block marginBlock="space045" />
                {/* added this cause last item needs space */}
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
        <MenuNavCollapsible path={path} menu={routes} />
      </Visible>
      <Visible lg xl>
        <MenuNavDesktop />
      </Visible>
    </>
  );
};
