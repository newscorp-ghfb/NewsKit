import React, {useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {
  Divider,
  getSizingFromTheme,
  getSpacingCssFromTheme,
  styled,
} from 'newskit';

import {MenuNav} from '../menu-collapsable/menu-collapsable';
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
import {Visible} from '../../../src/grid/visibility';

export const DesktopNavigationDivider = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  ${getSpacingCssFromTheme('marginTop', 'space045')};
  ${getSpacingCssFromTheme('marginBottom', 'space060')};
`;

const StyledHeightDiv = styled.div`
  height: ${getSizingFromTheme('sizing070')};
`;
const PageLink: React.FC<PageLinkProps> = ({page, active}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && ref && ref.current) {
      ref.current.scrollIntoView({block: 'center'});
    }
  });

  return (
    <StyledHeightDiv ref={ref}>
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
    </StyledHeightDiv>
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
    <Visible lg xl>
      <DesktopNavigationDivider>
        <Divider />
      </DesktopNavigationDivider>
    </Visible>
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
            // TODO: can rollback to subNav.id === activePagePath after https://nidigitalsolutions.jira.com/browse/PPDSE-312
            active={activePagePath.includes(subNav.id)}
          />
        );
      })}
    </StyledNavigationSection>
  </StyledSectionContainer>
);

export const SidebarNav = () => {
  const path = useRouter().pathname;

  const currentRoute = path.match(/\/[A-z\d-]*/g);
  const currentSection =
    currentRoute && routes.filter(({id}) => id === currentRoute[0]);

  return (
    <>
      <StyledSidebarNav role="navigation" aria-label="Sidebar">
        <>
          <Visible xs sm md>
            <MenuNav path={path} menu={routes} />
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
        </>
      </StyledSidebarNav>
    </>
  );
};
