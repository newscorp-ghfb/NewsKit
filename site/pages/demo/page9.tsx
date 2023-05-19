import {
  getShadowCssFromTheme,
  getSpacingCssFromTheme,
  styled,
  ThemeChecker,
} from 'newskit';
import CodeTemplate from '../../components/demo/code-template';

export const pageTitle = 'Theme Checker';

const MainContainer = styled.div`
  width: 100%;
  ${getSpacingCssFromTheme('padding', 'spaceInset020')}
  ${getShadowCssFromTheme('boxShadow', 'shadow030')}
`;

const Content = () => (
  <MainContainer>
    <ThemeChecker />
  </MainContainer>
);

export default function DemoPage9() {
  return (
    <CodeTemplate
      title={pageTitle}
      prevPage="page8"
      PageComponent={Content}
      showThemeSwitcher
    />
  );
}
