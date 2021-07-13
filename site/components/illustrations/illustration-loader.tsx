import React from 'react';
import dynamic from 'next/dynamic';
import {PlaceholderIllustration} from './components/placeholder-illustration';

const cache: Record<string, React.ComponentType> = {};

export const getIllustrationComponent = (path: string) => {
  if (cache[path]) {
    return cache[path];
  }
  const Component = dynamic(() => import(`./${path}`), {
    ssr: false,
    loading: () => <PlaceholderIllustration />,
  });
  Component.displayName = 'IllustrationLoaderComponent';
  cache[path] = Component;
  return Component;
};

export const Illustration: React.FC<{path: string}> = ({path}) => {
  const Component = getIllustrationComponent(path);
  return <Component />;
};
