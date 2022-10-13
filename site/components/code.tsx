import React, {useState, useEffect, HTMLAttributes} from 'react';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import {
  useTheme,
  styled,
  getColorCssFromTheme,
  getBorderCssFromTheme,
} from 'newskit';
import {generateCodeHighlighterTheme} from './code-highlighter-theme';
import {toKebabCase} from '../utils/to-kabab-case';
import {useTabIndexWhenScroll} from './hooks';

interface CodeProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  language?: string;
}

interface CodeFromFileProps extends HTMLAttributes<HTMLDivElement> {
  path: string;
  language?: string;
}
interface CodeFromDefaultPresetsProps {
  componentName: string;
}

SyntaxHighlighter.registerLanguage('jsx', jsx);

const StyledDiv = styled.div`
  border: solid 1px;
  ${getColorCssFromTheme('borderColor', 'interface040')};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  ${getColorCssFromTheme('backgroundColor', 'interface020')};
`;

export const Code: React.FC<CodeProps> = ({language = 'jsx', children}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const tabIndex = useTabIndexWhenScroll(containerRef, {firstChild: true});

  const {colors} = useTheme();
  const highlighterTheme = generateCodeHighlighterTheme(colors);

  return (
    <StyledDiv ref={containerRef}>
      <SyntaxHighlighter
        data-testid="sample-code"
        codeTagProps={{tabIndex}}
        language={language}
        style={highlighterTheme}
        showLineNumbers
        showInlineLineNumbers
        customStyle={{
          overflow: 'auto',
          marginLeft: '0.5em',
          marginRight: '0.5em',
          marginBottom: '0.5em',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </StyledDiv>
  );
};

export const CodeFromFile: React.FC<CodeFromFileProps> = ({language, path}) => {
  const [source, setSource] = useState('');

  useEffect(() => {
    (async () => {
      const sourcePath = `static/${path}`;
      const res = await fetch(sourcePath);
      if (res.status !== 200) {
        setSource('An error occurred loading this code example. 😢');
      } else {
        setSource(await res.text());
      }
    })();
  }, [path]);

  return <Code language={language}>{source}</Code>;
};

export const CodeFromDefaultPresets: React.FC<CodeFromDefaultPresetsProps> = ({
  componentName,
}) => {
  const [codeExample, setCodeExample] = useState('');

  useEffect(() => {
    // dynamically load componentDefaults from newskit
    const dynamicallyImportDefaults = async () => {
      const kebabComponentName = toKebabCase(componentName);
      const code = (await import(`newskit/${kebabComponentName}/defaults`))
        .default;

      setCodeExample(code);
    };
    dynamicallyImportDefaults();
  }, [componentName, setCodeExample]);

  if (componentName && codeExample) {
    const defaultPresetsExample = JSON.stringify(codeExample, null, 2).replace(
      /"([^"]+)":/g,
      '$1:',
    );
    return <Code>{defaultPresetsExample}</Code>;
  }
  return <p>An error occurred loading this code example.</p>;
};
