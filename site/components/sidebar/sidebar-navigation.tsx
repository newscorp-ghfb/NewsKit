import React, {useEffect, useRef} from 'react';
import {Divider} from 'newskit';
import {Link} from '../link';
import routes from '../../routes.json';
import {
  StyledSectionContainer,
  StyledNavigationWrapper,
  StyledLinkItem,
  StyledSidebarNav,
  StyledFirstLevelHeader,
  StyledSecondLevelHeader,
  StyledNavigationSection,
} from './styled';
import {
  SidebarNavProps,
  PageLinkProps,
  NavigationSectionProps,
  SectionProps,
  NavigationSectionType,
  PageType,
} from './types';

const PageLink: React.FC<PageLinkProps> = ({page, active}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && ref && ref.current) {
      ref.current.scrollIntoView({block: 'center'});
    }
  });

  return (
    <div ref={ref}>
      <Link href={page.id} overrides={{stylePreset: 'linkNoUnderline'}}>
        <StyledLinkItem data-testid={page.id} active={active}>
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
      <PageLink key={page.id} page={page} active={page.id === activePagePath} />
    ))}
  </>
);

const Section: React.FC<SectionProps> = ({
  section,
  activePagePath,
  lastSection,
}) => {
  const mainSectionHeader = section.title;

  return (
    <StyledSectionContainer>
      <StyledFirstLevelHeader data-testid={section.id}>
        {mainSectionHeader}
      </StyledFirstLevelHeader>
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
              active={subNav.id === activePagePath}
            />
          );
        })}
      </StyledNavigationSection>
      {lastSection ? null : <Divider />}
    </StyledSectionContainer>
  );
};

export const SidebarNav: React.FC<SidebarNavProps> = ({path}) => (
  <StyledSidebarNav role="navigation" aria-label="Sidebar">
    <StyledNavigationWrapper role="list">
      {routes.map((section, index) => (
        <Section
          key={section.id}
          section={section}
          activePagePath={path}
          lastSection={index === routes.length - 1}
        />
      ))}
    </StyledNavigationWrapper>
  </StyledSidebarNav>
);
