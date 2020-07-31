import React, {useState, useEffect} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow, coy} from 'react-syntax-highlighter/dist/styles/prism';
import {useTheme} from 'newskit';
import {LegacyBlock} from './legacy-block';
import {ThemeMode} from '../context';

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

export const Code: React.FC<CodeProps> = ({language = 'jsx', children}) => (
  <LegacyBlock>
    <ThemeMode.Consumer>
      {(value: string) => (
        <SyntaxHighlighter
          data-testid="sample-code"
          tabIndex={0}
          language={language}
          style={value === 'light' ? coy : tomorrow}
          customStyle={{overflow: 'auto', padding: '1em'}}
        >
          {children}
        </SyntaxHighlighter>
      )}
    </ThemeMode.Consumer>
  </LegacyBlock>
);
export const CodeFromFile: React.FC<CodeFromFileProps> = ({language, path}) => {
  const [source, setSource] = useState('');

  useEffect(() => {
    (async () => {
      const sourcePath = `${String(process.env.STATIC_ROOT)}${path}`;
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
    const presets = theme.defaultPresets[componentName];
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
