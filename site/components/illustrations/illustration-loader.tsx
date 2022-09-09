import React from 'react';
import {pathToID} from './utils';
import {CSSVarsProvider} from '../css-vars-provider';

export const getIllustrationComponent = (path: string) => {
  const id = pathToID(path);

  const Component = () => (
    <CSSVarsProvider>
      <svg viewBox="0 0 1490 838">
        <use xlinkHref={`/static/illustrations/${path}.svg#${id}`} />
      </svg>
    </CSSVarsProvider>
  );

  return Component;
};

export const Illustration: React.FC<{path: string}> = ({path}) => {
  const Component = getIllustrationComponent(path);
  return <Component />;
};
