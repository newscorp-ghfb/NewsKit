import React from 'react';
import {pathToID} from './utils';

export const getIllustrationComponent = (
  path: string,
  props?: React.SVGProps<SVGSVGElement>,
) => {
  const id = pathToID(path);

  const Component = () => (
    <svg viewBox="0 0 1490 838" width="100%" {...props}>
      <use href={`static/illustrations/${path}.svg#${id}`} />
    </svg>
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
