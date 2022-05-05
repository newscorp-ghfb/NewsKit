import React, {HTMLAttributes, useEffect, useRef} from 'react';
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
import {PageLinkProps} from './types';
import {StyledLinkItem} from './styled';

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
type NavProps = {
  title: string;
  id: string;
  description?: string;
  page?: boolean;
};

type SubNavProps = {
  title: string;
  id: string;
  description?: string | undefined;
  page?: boolean | undefined;
  subNav?: NavProps[] | undefined;
}[];
type SiteMenuItemProps = {
  // @ts-ignore

  // onBackClick?: any;
  menuItemList: Array<{
    title: string;
    id: string;
    description?: string;
    page?: boolean;
    subNav?: NavProps[];
  }>;
};

const PageLink: React.FC<PageLinkProps & HTMLAttributes<HTMLDivElement>> = ({
  page,
  active,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && ref && ref.current) {
      ref.current.scrollIntoView({block: 'center'});
    }
  });

  return (
    <div ref={ref}>
      {/* <Link
        type="standalone"
        href={page.id}
        overrides={{stylePreset: 'linkNoUnderline'}}
      > */}
      <StyledLinkItem data-testid={page} $selected={active}>
        {page}
      </StyledLinkItem>
      {/* </Link> */}
    </div>
  );
};
const SiteMenuItem = React.forwardRef<HTMLDivElement, SiteMenuItemProps>(
  ({menuItemList}) => {
    const path = useRouter()?.pathname || '';

    return (
      <div>
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
                      <PageLink
                        className={path.includes(id) ? 'selected' : undefined}
                        active={path.includes(id)}
                      />
                      <Indicator
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

                            marginInline: 'space040',
                          }}
                        >
                          {/* <PageLink
      //  key={subNav}
      page={(subNav as unknown) as PageType}
      active={path.includes(id) ? 'selected' : undefined}
    > */}
                          {title}
                          {/* </PageLink> */}
                        </Label>
                      </MenuItemStyled>
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
      </div>
    );
  },
);

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
