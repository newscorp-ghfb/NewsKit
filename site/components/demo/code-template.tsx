import {CodeFromFile} from './code';
import Template from './template';
import {
  Block,
  H2,
  Tag,
  styled,
  getBorderCssFromTheme,
  P,
  Divider,
  GridLayout,
  ThemeProvider,
} from 'newskit';
import LinkNext from 'next/link';
import useThemeSwitcher from './use-theme-switcher';

const Container = styled(GridLayout)`
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded010')};
  overflow: hidden;
`;

interface CodeTemplateProps {
  PageComponent: React.ElementType;
  codePaths?: string[];
  title: string;
  description?: React.ReactNode;
  nextPage?: string;
  prevPage?: string;
  showThemeSwitcher?: boolean;
}

export default function CodeTemplate({
  PageComponent,
  codePaths,
  title,
  description,
  nextPage,
  prevPage,
  showThemeSwitcher = false,
}: CodeTemplateProps) {
  const hasCode = Boolean(codePaths && codePaths.length);
  const {theme: selectedTheme, select: themeSelect} = useThemeSwitcher();

  const content = (
    <Block stylePreset="interfaceBackground">
      <GridLayout columns={hasCode ? {xs: '1fr', md: '1fr 1fr'} : '1fr'}>
        <Container
          overrides={{paddingInline: 'space020', paddingBlock: 'space020'}}
          justifyContent="center"
          alignItems="start"
        >
          <PageComponent />
        </Container>

        {hasCode && (
          <Container
            overrides={{paddingInline: 'space020', paddingBlock: 'space020'}}
            justifyContent="start"
            rowGap="space030"
          >
            {codePaths &&
              codePaths.map((path, i) => <CodeFromFile key={i} path={path} />)}
          </Container>
        )}
      </GridLayout>
    </Block>
  );

  return (
    <Template title={title}>
      <GridLayout
        columns={{
          xs: 'auto',
          md: showThemeSwitcher ? 'auto auto auto' : 'auto auto',
        }}
        justifyContent={{xs: 'center', md: 'space-between'}}
        alignItems="center"
        overrides={{
          paddingBlock: 'space030',
          paddingInline: 'space020',
        }}
      >
        <Block paddingBlock="space030" paddingInline="space020">
          <H2>{title}</H2>
          <P>{description}</P>
        </Block>
        {showThemeSwitcher && themeSelect}
        <Block>
          {prevPage && (
            <LinkNext href={`/demo/${prevPage}`} legacyBehavior passHref>
              <Tag
                href={`/demo/${prevPage}`}
                size="large"
                overrides={{marginInlineEnd: 'space040'}}
              >
                👈 Previous Step
              </Tag>
            </LinkNext>
          )}
          {nextPage ? (
            <LinkNext href={`/demo/${nextPage}`} legacyBehavior passHref>
              <Tag href={`/demo/${nextPage}`} size="large">
                Next Step 👉
              </Tag>
            </LinkNext>
          ) : (
            <LinkNext href="/demo/" legacyBehavior passHref>
              <Tag href="/demo/" size="large">
                Home 🏡
              </Tag>
            </LinkNext>
          )}
        </Block>
      </GridLayout>
      <Divider overrides={{marginBlockEnd: 'space050'}} />
      {showThemeSwitcher ? (
        <ThemeProvider theme={selectedTheme}>{content}</ThemeProvider>
      ) : (
        content
      )}
    </Template>
  );
}
