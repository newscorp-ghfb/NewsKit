import React from 'react';
import {pathToID} from './utils';
import {CSSVarsProvider} from '../css-vars-provider';

export const getIllustrationComponent = (
  path: string,
  props?: React.SVGProps<SVGSVGElement>,
) => {
  const id = pathToID(path);

  const Component = () => (
    <CSSVarsProvider>
      <svg viewBox="0 0 1490 838" {...props}>
        <use xlinkHref={`/static/illustrations/${path}.svg#${id}`} />
      </svg>
    </CSSVarsProvider>
  );

  return Component;
};

type IllustrationProps = {
  path: string;
} & React.SVGProps<SVGSVGElement>;

export const Illustration: React.FC<IllustrationProps> = ({path, ...props}) => {
  const Component = getIllustrationComponent(path, props);
  return <Component />;
};
