import React, {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {
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
  getSizingFromTheme,
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

const MobileSideNavigation = styled.div`
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

type MobileSideNavProps = {
  title: string;
  id: string;
  description?: string;
  page?: boolean;
};

type MobileSideSubNavProps = {
  subNav?: MobileSideNavProps[];
};

type MobileSideSubNavItemProps = MobileSideNavProps & MobileSideSubNavProps;

const RenderMobileNavigation = ({
  path,
  menu,
}: {
  menu: MobileSideSubNavItemProps[];
  path: string;
}) => {
  const [openPanelIds, setOpenPanelIds] = useState<Array<number>>([]);
  useEffect(() => {
    const index = menu.findIndex(obj => path.includes(obj.id)) || 0;
    setOpenPanelIds([index]);
  }, []);
  const createMenuItem = (list: MobileSideSubNavItemProps[]) => (
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
            {subNav && createMenuItem(subNav)}
          </Menu>
        </MobileSideNavigation>
      ))}
    </UnorderedList>
  );
};

const NavigationDivider = styled.div`
  ${getSpacingCssFromTheme('marginTop', 'space050')};
  ${getSpacingCssFromTheme('marginBottom', 'space050')};
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
        <StyledLinkItem
          data-testid={page.id}
          $selected={active}
          className={active ? 'selected' : undefined}
        >
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

export const SidebarNav: React.FC = () => {
  const path = useRouter().pathname;
  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const currentSection =
    currentRoute && routes.filter(({id}) => id === currentRoute[0]);
  return (
    <StyledSidebarNav role="menu" aria-label="sidebar-menu">
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
