import React from 'react';
import {getSizingCssFromTheme, styled, ThemeProvider} from 'newskit';
import {Separator} from '../../components/separator';
import {ComponentPageCell} from '../../components/layout-cells';
import {HeaderIndex} from '../../components/header-index';
import {patternsThemeDark, patternsThemeLight} from '../../theme/doc-theme';
import Layout, {LayoutProps} from '../../components/layout';
import {Hero} from '../../components/illustrations/patterns/hero';

const WrapperWithPadding = styled.div`
  ${getSizingCssFromTheme('padding-bottom', 'sizing090')};
`;

export default (layoutProps: LayoutProps) => (
  <>
    <Layout {...layoutProps} newPage>
      {({themeMode}) => (
        <ThemeProvider
          theme={themeMode === 'light' ? patternsThemeLight : patternsThemeDark}
        >
          <HeaderIndex title="Patterns" media={Hero}>
            Design patterns provide a framework for solving a particular user
            problem in a consistent, considered way.
          </HeaderIndex>
          <ComponentPageCell>
            <Separator />
          </ComponentPageCell>
          <WrapperWithPadding />
        </ThemeProvider>
      )}
    </Layout>
  </>
);
