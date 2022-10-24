import React from 'react';
import CodeSandboxer from 'react-codesandboxer';
import {Button} from 'newskit';
import {peerDependencies, version} from '../../../package.json';
import {Code} from '../code';
import {LegacyBlock} from '../legacy-block';
import {ErrorMessageContainer} from './error-boundary';

const newskitVersion = version; // packageJson.version;

const index = `
import React from "react";
import { createRoot } from 'react-dom/client';

import { NewsKitProvider, newskitLightTheme } from "newskit";

import Example from "./example";

function App() {
  return <Example />;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <NewsKitProvider theme={newskitLightTheme}>
    <App />
  </ NewsKitProvider>,
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
}) => {
  const dynamicKeys = Object.keys(peerDependencies).map(k => k.toString());

  const dynamicValues = Object.values(peerDependencies).map(v =>
    v.split(' ').slice(-1).toString(),
  );

  const peerDependenciesObject = Object.fromEntries(
    dynamicKeys.map((_, i) => [dynamicKeys[i], dynamicValues[i]]),
  );

  peerDependenciesObject.newskit = newskitVersion;

  return (
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
        dependencies={peerDependenciesObject}
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
};
