import React, {useEffect, useState} from 'react';
import {isNotSafari, isSafari, pathToID} from './utils';

/**
 * Only for Safari. It reads the svg file as raw string and returns the problematic <defs> .. </defs> part as additional svg which solves the problem. If the browser is not Safari then all of this is skipped.
 */
const getSafariSVGFilters = (
  sanitize: (source: string) => string,
  path: string,
) => {
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

  const renderInlineSVG = () => (
    <svg viewBox="0 0 1490 838" width="100%" {...props}>
      <use href={`static/illustrations/${path}.svg#${id}`} />
    </svg>
  );

  const Component = () => {
    const [safariSVGFilters, setSafariSVGFilters] = useState<
      JSX.Element | undefined | null
    >(undefined);

    useEffect(() => {
      if (isSafari && safariSVGFilters === undefined) {
        // Dynamically importing 'isomorphic-dompurify' only for Safari to avoid bloating the bundle size for other browsers.
        const importSanitizer = async () => {
          const dompurify = await (await import('isomorphic-dompurify'))
            .default;
          const value = getSafariSVGFilters(dompurify.sanitize, path);
          setSafariSVGFilters(value);
        };
        importSanitizer();
      }
    }, [safariSVGFilters]);

    // If the browser is Safari and there are filters, we render an svg with filters, otherwise we render a clean svg.
    const safariSVG = (
      <>
        {isSafari && safariSVGFilters}
        {renderInlineSVG()}
      </>
    );

    // If the browser is not Safari we will render a clean svg without checking for filters. There is an explicit isNotSafari call because of the server side nature of the component we have to handle a race condition where the window object is not loaded yet.
    const nonSafariSVG = isNotSafari ? renderInlineSVG() : null;

    return safariSVGFilters !== undefined ? safariSVG : nonSafariSVG;
  };

  return Component;
};

type IllustrationProps = {
  path: string;
} & React.SVGProps<SVGSVGElement>;

export const Illustration: React.FC<IllustrationProps> = ({path, ...props}) => {
  const Component = getIllustrationComponent(path, props);
  return <Component />;
};
