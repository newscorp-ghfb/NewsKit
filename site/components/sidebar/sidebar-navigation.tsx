import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {
  Block,
  Visible,
  UnorderedList,
  Menu,
  MenuItem,
  MenuGroup,
  Divider,
  styled,
  Stack,
  Flow,
  H2,
  getSpacingCssFromTheme,
  getBorderCssFromTheme,
  getColorFromTheme,
} from 'newskit';
import {Link} from '../link';
import routes from '../../routes';
import {
  StyledSectionContainer,
  StyledNavigationWrapper,
  StyledLinkItem,
  StyledSidebarNav,
  StyledSecondLevelHeader,
  StyledNavigationSection,
} from './styled';
import {
  PageLinkProps,
  NavigationSectionProps,
  SectionProps,
  NavigationSectionType,
  PageType,
} from './types';
import {IconExpandLess, IconExpandMore} from '../icons';

const NavigationDivider = styled.div`
  ${getSpacingCssFromTheme('marginTop', 'space050')};
  ${getSpacingCssFromTheme('marginBottom', 'space050')};
`;

const MobileSideNavigation = styled.div`
  width: 225px;
  ${getSpacingCssFromTheme('marginTop', 'space040')};
  ${getSpacingCssFromTheme('marginBottom', 'space010')};
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
  &.expanded .nk-menu-item {
    position: relative;
  }
  &.expanded .menu-item,
  &.collapsed .menu-item {
    border: none !important;
  }
  &.expanded .menu-item[aria-current='page'] {
    ::after {
      content: '';
      background: ${getColorFromTheme('blue060')};
      height: 40px;
      width: 10px;
      ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
      display: block;
      position: absolute;
      top: 5px;
      left: -30px;
    }
  }
`;

const PageLink: React.FC<PageLinkProps> = ({page, active}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && ref && ref.current) {
      ref.current.scrollIntoView({block: 'center'});
    }
  });

  return (
    <div ref={ref}>
      <Link
        type="standalone"
        href={page.id}
        overrides={{stylePreset: 'linkNoUnderline'}}
      >
        <StyledLinkItem data-testid={page.id} $selected={active}>
          {page.title}
        </StyledLinkItem>
      </Link>
    </div>
  );
};

const NavigationSection: React.FC<NavigationSectionProps> = ({
  navigationSection,
  activePagePath,
}) => (
  <>
    <StyledSecondLevelHeader id={navigationSection.id}>
      {navigationSection.title}
    </StyledSecondLevelHeader>
    {navigationSection.subNav.map(page => (
      <PageLink
        key={page.id}
        page={page}
        active={activePagePath.includes(page.id)}
      />
    ))}
    <NavigationDivider>
      <Divider />
    </NavigationDivider>
  </>
);

const Section: React.FC<SectionProps> = ({section, activePagePath}) => (
  <StyledSectionContainer>
    <StyledNavigationSection>
      {section.subNav.map(subNav => {
        if ((subNav as NavigationSectionType).subNav) {
          return (
            <NavigationSection
              key={subNav.id}
              navigationSection={subNav as NavigationSectionType}
              activePagePath={activePagePath}
            />
          );
        }
        return (
          <PageLink
            key={subNav.id}
            page={subNav as PageType}
            active={activePagePath.includes(subNav.id)}
          />
        );
      })}
    </StyledNavigationSection>
  </StyledSectionContainer>
);

type NavProps = {
  title: string;
  id: string;
  description?: string;
  page?: boolean;
};

type SubNav = {
  subNav?: NavProps[];
};

type SubNavItemProps = NavProps & SubNav;

const menuItemOverrides = {
  typographyPreset: 'utilityButton020',
  spaceInset: 'space030',
  spaceStack: 'space000',
  stylePreset: 'sideNavItemHorizontal',
};

const RenderMobileNavigation = ({
  path,
  menu,
}: {
  menu: SubNavItemProps[];
  path: string;
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
                  overrides={menuItemOverrides}
                  selected={path.includes(id)}
                  size="small"
                  className="menu-item"
                >
                  {title}
                </MenuItem>
              </>
            ) : (
              <>
                <Block spaceStack="space030" />
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
    <UnorderedList>
      {menu.map(({title, subNav}, index) => (
        <MobileSideNavigation
          className={openPanelIds.includes(index) ? 'expanded' : 'collapsed'}
        >
          <H2
            overrides={{typographyPreset: 'utilityHeading020'}}
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
          <Menu
            aria-label="menu"
            vertical
            size="small"
            align="start"
            overrides={{spaceInline: 'space000'}}
          >
            <Block spaceStack="space030" />
            {subNav && createMenuItem(subNav)}
          </Menu>
        </MobileSideNavigation>
      ))}
    </UnorderedList>
  );
};

export const SidebarNav: React.FC = () => {
  const path = useRouter().pathname;
  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const currentSection =
    currentRoute && routes.filter(({id}) => id === currentRoute[0]);
  return (
    <StyledSidebarNav role="navigation" aria-label="Sidebar">
      <Visible xs sm md>
        <RenderMobileNavigation path={path} menu={routes} />
      </Visible>
      <Visible lg xl>
        <StyledNavigationWrapper role="list">
          {currentSection &&
            currentSection.map(section => (
              <Section
                key={section.id}
                section={section}
                activePagePath={path}
              />
            ))}
        </StyledNavigationWrapper>
      </Visible>
    </StyledSidebarNav>
  );
};
