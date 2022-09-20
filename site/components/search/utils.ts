import {DocSearchHit} from '@docsearch/react/dist/esm/types';

export const ignoreFilter = (item: DocSearchHit): boolean => {
  // this includes components overview from results
  if (item.url.includes('components/overview')) {
    return false;
  }

  /*
    Remove introduction result 
    because these 2 results are the same:
    .../components/radio-button/
    .../components/radio-button/#introduction
  */
  if (item.url.endsWith('#introduction')) {
    return false;
  }

  // other filters in the future

  return true;
};

export const mapPathname = (item: DocSearchHit): DocSearchHitExtended => {
  const parseUrl = document.createElement('a');
  parseUrl.href = item.url;

  const canonicalAs = parseUrl.pathname + parseUrl.hash;
  const canonicalPathname = canonicalAs
    .replace(/^\/api/, '/api-docs')
    .replace(/#(.*)$/, '')
    .replace(/\/$/, '');

  return {
    ...item,
    as: canonicalAs,
    pathname: canonicalPathname,
  };
};
