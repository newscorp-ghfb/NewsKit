import React, {useState, useEffect} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import { tomorrow, coy } from 'react-syntax-highlighter/styles/prism';
import {useTheme} from 'newskit';

export const Code = ({
  language = 'jsx',
  children,
}: {
  language?: string;
  children?: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <div>
      <SyntaxHighlighter
        tabIndex={0}
        language={language}
        // style={coy}
        customStyle={{
          overflow: 'auto',
          padding: '1em',
          margin: 0,
          borderRadius: theme.borders.borderRadiusRounded010,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export const CodeFromFile = ({
  language = 'js',
  path,
}: {
  language?: string;
  path: string;
}) => {
  const [source, setSource] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const sourcePath = `/static/demo/${path}`;
      try {
        const res = await fetch(sourcePath, {
          signal: controller.signal,
        });

        if (res.status !== 200) {
          setSource('An error occurred loading this code snippet. 😢');
        } else {
          const src = await res.text();
          setSource(src.replace(/\${/g, `$\\{`));
        }
      } catch (error) {
        console.log('Fetch error: ', error);
      }
    })();
    return () => controller?.abort();
  }, [path]);

  return <Code language={language}>{source}</Code>;
};
