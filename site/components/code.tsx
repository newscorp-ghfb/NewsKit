import React, {useState, useEffect} from 'react';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import {useTheme} from 'newskit';
import {LegacyBlock} from './legacy-block';
import {generateCodeHighlighterTheme} from './code-highlighter-theme';

interface CodeProps {
  children: string;
  language?: string;
}

interface CodeFromFileProps {
  path: string;
  language?: string;
}

interface CodeFromDefaultPresets {
  componentName: string;
}
SyntaxHighlighter.registerLanguage('jsx', jsx);

export const Code: React.FC<CodeProps> = ({language = 'jsx', children}) => {
  const {colors} = useTheme();
  const highlighterTheme = generateCodeHighlighterTheme(colors);

  return (
    <LegacyBlock>
      <SyntaxHighlighter
        data-testid="sample-code"
        tabIndex={0}
        language={language}
        style={highlighterTheme}
        customStyle={{overflow: 'auto', padding: '1em'}}
      >
        {children}
      </SyntaxHighlighter>
    </LegacyBlock>
  );
};

export const CodeFromFile: React.FC<CodeFromFileProps> = ({language, path}) => {
  const [source, setSource] = useState('');

  useEffect(() => {
    (async () => {
      const sourcePath = `/static/${path}`;
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

export const CodeFromDefaultPresets: React.FC<CodeFromDefaultPresets> = ({
  componentName,
}) => {
  const theme = useTheme();
  if (componentName) {
    const presets = theme.componentDefaults[componentName];
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
