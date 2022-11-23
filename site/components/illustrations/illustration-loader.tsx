import React from 'react';
import dompurify from 'isomorphic-dompurify';
import {isSafari, pathToID} from './utils';

/**
 * Only for Safari. It reads the svg file as raw string and returns the problematic <defs> .. </defs> part as additional svg which solves the problem. If the browser is not Safari then all of this is skipped.
 */
const loadSVGFiltersForSafari = (path: string) => {
  if (!isSafari) return null;
  const {sanitize} = dompurify;

  const rawSVG = sanitize(
    // eslint-disable-next-line import/no-dynamic-require, global-require
    require(`../../public/static/illustrations/${path}.svg`).default,
  );

  const defsStart = '<defs>';
  const defsEnd = '</defs>';
  const startIndex = rawSVG.indexOf(defsStart);
  const endIndex = rawSVG.indexOf(defsEnd);
  const result = rawSVG.substring(startIndex, endIndex + defsEnd.length);

  return startIndex > -1 ? (
    <svg
      width="0"
      height="0"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: result}}
    />
  ) : null;
};

export const getIllustrationComponent = (
  path: string,
  props?: React.SVGProps<SVGSVGElement>,
) => {
  const id = pathToID(path);

  const Component = () => (
    <>
      {/* А Safari workaround for not rendering the svg filters / shadows from external svg using <use href="..." /> */}
      {loadSVGFiltersForSafari(path)}
      <svg viewBox="0 0 1490 838" width="100%" {...props}>
        <use href={`static/illustrations/${path}.svg#${id}`} />
      </svg>
    </>
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
