import * as React from 'react';
import {MDXProvider} from '@mdx-js/tag';
import {
  Grid,
  Cell,
  getSizingFromTheme,
  getColorFromTheme,
  getMediaQueryFromTheme,
  styled,
} from 'newskit';

import HeaderNavigation from './header-navigation';
import SiteFooter from './site-footer';
import Sidebar from './sidebar';
import SectionNavigation from './section-navigation';
import MarkdownElements from './markdown-elements';
import {Playground} from './playground';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${getMediaQueryFromTheme('md')} {
    padding-left: 276px;
  }
`;

const BodyWrapper = styled.main`
  flex: 1 0 auto;
  background-color: ${getColorFromTheme('interface010')};
`;

const ContentWrapper = styled.div`
  padding-top: ${getSizingFromTheme('spacingSize060')};
  padding-bottom: ${getSizingFromTheme('spacingSize060')};
`;

interface LayoutProps {
  path: string;
  toggleTheme: () => void;
  full?: boolean;
}

interface LayoutState {
  sidebarOpen: boolean;
  headerHeight: number;
  sectionNavHeight: number;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  private headerRef: React.RefObject<HTMLElement>;

  private sectionNavRef: React.RefObject<HTMLElement>;

  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      sidebarOpen: false,
      headerHeight: 0,
      sectionNavHeight: 0,
    };

    this.headerRef = React.createRef<HTMLElement>();
    this.sectionNavRef = React.createRef<HTMLElement>();
  }

  componentDidMount() {
    const headerNode = this.headerRef.current;
    const sectionNavNode = this.sectionNavRef.current;

    if (headerNode) {
      this.setState({headerHeight: headerNode.clientHeight});
    }
    if (sectionNavNode) {
      this.setState({sectionNavHeight: sectionNavNode.clientHeight});
    }
  }

  toggleSidebar = () => {
    this.setState(({sidebarOpen}) => ({sidebarOpen: !sidebarOpen}));
  };

  renderNavigation = () => {
    const DEFAULT_SECTIONS = [/Overview/, /Props/, /Playground/, /Rationale/];
    const {path, children} = this.props;

    if (!path.startsWith('/components')) return null;

    const pageSections = this.getPageSections(children);
    const filteredSections: string[] = pageSections.filter((section: string) =>
      DEFAULT_SECTIONS.some(def => def.test(section)),
    );

    return (
      <SectionNavigation sections={filteredSections} ref={this.sectionNavRef} />
    );
  };

  getPageSections = (
    children: React.ReactElement<{
      children: React.ReactElement<{children: string; name: string}>[];
    }>,
  ): string[] => {
    if (!React.isValidElement(children)) {
      return [];
    }

    const sections: string[] = [];

    React.Children.forEach(children.props.children, child => {
      if (React.isValidElement(child) && child.props.name === 'h2') {
        sections.push(child.props.children);
      }
    });

    return sections;
  };

  updatePropsForMarkdownElements = () => {
    const {headerHeight, sectionNavHeight} = this.state;

    const H2 = MarkdownElements.h2;
    const updatedComponents = {
      ...MarkdownElements,
      h2: ({children}) => (
        <H2 offset={sectionNavHeight + headerHeight}>{children}</H2>
      ),
    };

    return updatedComponents;
  };

  render() {
    const {sidebarOpen} = this.state;
    const {path, toggleTheme, children} = this.props;

    return (
      <LayoutWrapper>
        <Sidebar
          path={path}
          sidebarOpen={sidebarOpen}
          handleSidebarClick={this.toggleSidebar}
        />

        <Container>
          <HeaderNavigation
            handleSidebarClick={this.toggleSidebar}
            toggleTheme={toggleTheme}
            ref={this.headerRef}
          />

          <BodyWrapper>
            <Grid>
              <Cell xs={12}>
                <Playground componentName={false} />
                <ContentWrapper>
                  {this.renderNavigation()}
                  <MDXProvider
                    components={this.updatePropsForMarkdownElements()}
                  >
                    {children}
                  </MDXProvider>
                </ContentWrapper>
              </Cell>
            </Grid>
          </BodyWrapper>

          <SiteFooter />
        </Container>
      </LayoutWrapper>
    );
  }
}

export default Layout;
