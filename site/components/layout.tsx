import * as React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {
  Grid,
  getMediaQueryFromTheme,
  Cell,
  styled,
  getSpacingCssFromTheme,
  getColorCssFromTheme,
  ThemeProvider,
} from 'newskit';

import {docsThemeDark, docsThemeLight} from '../theme/doc-theme';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import Sidebar from './sidebar';
import SectionNavigation from './section-navigation';
import markdownElements from './markdown-elements';
import {Playground} from './playground';
import {DebugDropdown} from './debug-dropdown';
import {ThemeModeContext} from '../helpers/use-theme-mode';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Container = styled.div<Pick<LayoutProps, 'hideSidebar'>>`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${getSpacingCssFromTheme('paddingTop', 'space050')};
  ${getMediaQueryFromTheme('lg')} {
    padding-left: ${({hideSidebar}) => !hideSidebar && '276px'};
    ${getSpacingCssFromTheme('paddingTop', 'space100')};
  }
`;

const BodyWrapper = styled.main`
  flex: 1 0 auto;
  ${getColorCssFromTheme('backgroundColor', 'interfaceBackground')};
  ${getSpacingCssFromTheme('paddingTop', {xs: 'space060', lg: 'space030'})};
  overflow: hidden;
`;

export interface LayoutProps {
  path: string;
  newPage?: boolean; // Temporary property until "new" pages are the only pages.
  toggleTheme: () => void;
  themeMode: string;
  hideSidebar?: boolean;
  children: React.ReactNode | ((props: {themeMode: string}) => React.ReactNode);
}
interface LayoutState {
  sidebarOpen: boolean;
  headerHeight: number;
  sectionNavHeight: number;
  debugDropdownVisible: boolean;
}

interface Heading {
  children: React.ReactNode;
}

type PageSection = React.ReactElement<{
  children: React.ReactNode;
  mdxType: string;
}>[];

const WrapperWithPadding = styled.div`
  ${getSpacingCssFromTheme('paddingTop', 'space060')};
  ${getSpacingCssFromTheme('paddingBottom', 'space060')};
`;

class Layout extends React.Component<LayoutProps, LayoutState> {
  private headerRef: React.RefObject<HTMLElement>;

  private sectionNavRef: React.RefObject<HTMLElement>;

  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      sidebarOpen: false,
      headerHeight: 0,
      sectionNavHeight: 0,
      debugDropdownVisible: false,
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
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', event => {
        if (event.keyCode === 192) {
          this.toggleDebugDropdown();
        }
      });
    }
  }

  toggleSidebar = () => {
    this.setState(({sidebarOpen}) => ({sidebarOpen: !sidebarOpen}));
  };

  toggleDebugDropdown = () => {
    this.setState(({debugDropdownVisible}) => ({
      debugDropdownVisible: !debugDropdownVisible,
    }));
  };

  renderNavigation = () => {
    const DEFAULT_SECTIONS = [/Overview/, /Props/, /Playground/, /Rationale/];
    const {path, children} = this.props;

    if (!path.startsWith('/components')) return null;

    const pageSections = this.getPageSections(children as PageSection);
    const filteredSections: string[] = pageSections.filter((section: string) =>
      DEFAULT_SECTIONS.some(def => def.test(section)),
    );

    return (
      <SectionNavigation sections={filteredSections} ref={this.sectionNavRef} />
    );
  };

  // eslint-disable-next-line class-methods-use-this
  getPageSections = (children: PageSection): string[] => {
    const sections: string[] = [];
    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.props.mdxType === 'h2') {
        sections.push(child.props.children as string);
      }
    });
    return sections;
  };

  updatePropsForMarkdownElements = () => {
    const {headerHeight, sectionNavHeight} = this.state;

    const H2 = markdownElements.h2;
    const updatedComponents = {
      ...markdownElements,
      h2: ({children}: Heading) => (
        <H2 offset={sectionNavHeight + headerHeight}>{children}</H2>
      ),
    };

    return updatedComponents;
  };

  render() {
    const {sidebarOpen, debugDropdownVisible} = this.state;
    const {
      hideSidebar,
      path,
      newPage,
      toggleTheme,
      themeMode,
      children,
    } = this.props;

    return (
      <LayoutWrapper>
        <ThemeModeContext.Provider value={themeMode}>
          {debugDropdownVisible && <DebugDropdown />}
          <Sidebar
            sidebarOpen={sidebarOpen}
            handleSidebarClick={this.toggleSidebar}
            hideSidebar={hideSidebar}
            themeMode={themeMode}
            toggleTheme={toggleTheme}
          />
          <SiteHeader
            handleSidebarClick={this.toggleSidebar}
            toggleTheme={toggleTheme}
            themeMode={themeMode}
            ref={this.headerRef}
            path={path}
            data-test-id="siteHeader"
            sidebarOpen={sidebarOpen}
          />
          <Container hideSidebar={hideSidebar}>
            {/* This is a hack to fix stalling builds from NextJS trying to optimise the page, it won't render anything */}
            <Playground componentName={false} />

            <BodyWrapper>
              {newPage ? (
                <ThemeProvider
                  theme={themeMode === 'light' ? docsThemeLight : docsThemeDark}
                >
                  {typeof children === 'function'
                    ? children({themeMode})
                    : children}
                </ThemeProvider>
              ) : (
                <Grid>
                  <Cell xs={12} lg={10} lgOffset={1}>
                    <WrapperWithPadding>
                      {this.renderNavigation()}
                      <MDXProvider
                        components={this.updatePropsForMarkdownElements()}
                      >
                        {children}
                      </MDXProvider>
                    </WrapperWithPadding>
                  </Cell>
                </Grid>
              )}
            </BodyWrapper>

            {path === '/index' ? (
              <SiteFooter
                cellProps={{
                  xs: 12,
                  xl: 10,
                  xlOffset: 1,
                }}
              />
            ) : (
              <SiteFooter />
            )}
          </Container>
        </ThemeModeContext.Provider>
      </LayoutWrapper>
    );
  }
}

export default Layout;
