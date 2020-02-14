import * as React from 'react';
import {
  Link,
  getMediaQueryFromTheme,
  getTypePresetFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  styled,
} from 'newskit';

interface SectionNavigationProps {
  sections: Array<string>;
}

const SectionNavigationContainer = styled.nav`
  width: 100%;
  min-height: 64px;
  margin-bottom: ${getSizingFromTheme('sizing070')};
  border-bottom: 1px solid ${getColorFromTheme('interface040')};
  background-color: ${getColorFromTheme('interface010')};
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
  padding: ${getSizingFromTheme('sizing040')};
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  ${getMediaQueryFromTheme('sm')} {
    flex-wrap: nowrap;
    height: ${getSizingFromTheme('sizing080')};
    height: 64px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  display: block;
  margin: 0 16px;

  a {
    ${getTypePresetFromTheme('body020')};
    font-weight: normal;
    color: ${getColorFromTheme('inkSubtle')};
  }

  a:visited {
    color: ${getColorFromTheme('inkSubtle')};
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
        <ListItem>
          <Link href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}>
            {section}
          </Link>
        </ListItem>
      ))}
    </ListContainer>
  </SectionNavigationContainer>
));

export default SectionNavigation;
