import React, {useState, useEffect} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {Block} from './block';

interface CodeProps {
  children: string;
  language?: string;
}

interface CodeFromFileProps {
  path: string;
  language?: string;
}

export const Code: React.FC<CodeProps> = ({language = 'jsx', children}) => (
  <Block>
    <SyntaxHighlighter language={language} useInlineStyles={false}>
      {children}
    </SyntaxHighlighter>
  </Block>
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
