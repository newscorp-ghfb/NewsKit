import React, {useState, useEffect, HTMLAttributes} from 'react';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import {
  useTheme,
  newskitLightTheme,
  styled,
  getColorCssFromTheme,
  getBorderCssFromTheme,
} from 'newskit';
import {generateCodeHighlighterTheme} from './code-highlighter-theme';

interface CodeProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
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
  ${getBorderCssFromTheme('border-radius', 'borderRadiusRounded020')};
  ${getColorCssFromTheme('backgroundColor', 'interface020')};
`;
export const Code: React.FC<CodeProps> = ({
  language = 'jsx',
  children,
  tabIndex,
}) => {
  const {colors} = useTheme();
  const highlighterTheme = generateCodeHighlighterTheme(colors);
  return (
    <StyledDiv>
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

export const CodeFromFile: React.FC<CodeFromFileProps> = ({
  language,
  path,
  tabIndex,
}) => {
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

  return (
    <Code language={language} tabIndex={tabIndex}>
      {source}
    </Code>
  );
};

export const CodeFromDefaultPresets: React.FC<CodeFromDefaultPresetsProps> = ({
  componentName,
}) => {
  if (componentName) {
    const presets = newskitLightTheme.componentDefaults[componentName];
    if (presets) {
      const defaultPresetsExample = JSON.stringify(presets, null, 2).replace(
        /"([^"]+)":/g,
        '$1:',
      );
      return <Code>{defaultPresetsExample}</Code>;
    }
    return <p>An error occurred loading this code example.</p>;
  }
  return <p>An error occurred loading this code example.</p>;
};
