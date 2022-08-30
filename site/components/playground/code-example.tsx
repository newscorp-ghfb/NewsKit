import React from 'react';
import CodeSandboxer from 'react-codesandboxer';
import {Button} from 'newskit';
import {Code} from '../code';
import {LegacyBlock} from '../legacy-block';
import {ErrorMessageContainer} from './error-boundary';

// TODO: reinstate proper version when stable.
const newskitVersion = 'unstable'; // packageJson.version;

const index = `
import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider, newskitLightTheme } from "newskit";

import Example from "./example";

function App() {
  return <Example />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={newskitLightTheme}>
    <App />
  </ThemeProvider>,
  rootElement
);
`;

export interface CodeExampleProps {
  componentName: string;
  source: string;
  error?: boolean;
}

export const CodeExample: React.FC<CodeExampleProps> = ({
  componentName,
  source,
  error,
}) => (
  <LegacyBlock
    display="flex"
    flexDirection="column"
    alignItems="space-between"
    justify-content="center"
    height="100%"
    width="100%"
    justifyContent="space-between"
    font="utilityCode030"
  >
    {source && (
      <LegacyBlock
        overflow="scrollX"
        padding="sizing050"
        paddingTop="sizing040"
      >
        {error && (
          <ErrorMessageContainer>Source code invalid!</ErrorMessageContainer>
        )}
        <Code>{source}</Code>
      </LegacyBlock>
    )}
    <CodeSandboxer
      examplePath="/"
      example={source}
      name={componentName}
      dependencies={{
        newskit: newskitVersion,
        react: '16.8.6',
        'react-dom': '16.8.6',
      }}
      providedFiles={{'index.js': {content: index}}}
      template="create-react-app"
    >
      {() => (
        <LegacyBlock alignSelf="flex-end" padding="sizing060">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Button size="medium" data-testid="code-sandbox">
              Edit on CodeSandbox
            </Button>
          </a>
        </LegacyBlock>
      )}
    </CodeSandboxer>
  </LegacyBlock>
);
