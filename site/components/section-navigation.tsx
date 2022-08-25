import * as React from 'react';
import {
  getMediaQueryFromTheme,
  getTypographyPresetFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  styled,
} from 'newskit';
import {Link} from './link';

interface SectionNavigationProps {
  sections: Array<string>;
}

const SectionNavigationContainer = styled.nav`
  width: 100%;
  min-height: 72px;
  margin-bottom: ${getSizingFromTheme('sizing070')};
  border-bottom: 1px solid ${getColorFromTheme('interface040')};
  display: flex;
  position: sticky;
  top: 64px;
  z-index: 1;

  ${getMediaQueryFromTheme('md')} {
    top: 0;
  }
`;

const ListContainer = styled.ul`
  width: 100%;
  margin: 0;
  padding: ${getSizingFromTheme('sizing040')} 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;

  ${getMediaQueryFromTheme('sm')} {
    flex-wrap: nowrap;
    height: 72px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 16px;

  a {
    ${getTypographyPresetFromTheme('utilityBody020')};
  }
`;

type SectionNavigationRef = HTMLElement;

const SectionNavigation = React.forwardRef<
  SectionNavigationRef,
  SectionNavigationProps
>(({sections}, ref) => (
  <SectionNavigationContainer
    data-testid="section-navigation-container"
    ref={ref}
  >
    <ListContainer data-testid="section-navigation">
      {sections.map(section => (
        <ListItem key={section}>
          <Link
            href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
            overrides={{
              stylePreset: 'linkSectionNavigation',
            }}
          >
            {section}
          </Link>
        </ListItem>
      ))}
    </ListContainer>
  </SectionNavigationContainer>
));

export default SectionNavigation;
