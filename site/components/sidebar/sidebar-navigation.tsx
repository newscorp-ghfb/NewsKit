import React, {useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {Visible, Divider, styled, getSpacingCssFromTheme} from 'newskit';
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
import {Accordion} from '../accordion';

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
    <StyledSidebarNav>
      <Visible xs sm md>
        <Accordion path={path} menu={routes} />
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
