import React, {useEffect, useState} from 'react';
import {isNotSafari, isSafari, pathToID} from './utils';

/**
 * Only for Safari. It reads the svg file as raw string and returns it as an inline SVG.
 */
const getSafariSVG = (
  sanitize: (source: string) => string,
  path: string,
  props?: React.SVGProps<SVGSVGElement>,
) => {
  const rawSVG = sanitize(
    // eslint-disable-next-line import/no-dynamic-require, global-require
    require(`../../public/static/illustrations/${path}.svg`).default,
  );

  return (
    <svg
      viewBox="0 0 1490 838"
      width="100%"
      {...props}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: rawSVG}}
    />
  );
};

export const getIllustrationComponent = (
  path: string,
  props?: React.SVGProps<SVGSVGElement>,
) => {
  const id = pathToID(path);

  const Component = () => {
    const [safariSVG, setSafariSVG] = useState<JSX.Element | null>(null);

    useEffect(() => {
      if (isSafari && safariSVG === null) {
        // Dynamically importing 'isomorphic-dompurify' only for Safari to avoid bloating the bundle size for other browsers.
        const importSanitizer = async () => {
          const dompurify = await (await import('isomorphic-dompurify'))
            .default;
          const svg = getSafariSVG(dompurify.sanitize, path, props);
          setSafariSVG(svg);
        };
        importSanitizer();
      }
    }, [safariSVG]);

    // If the browser is Safari we render an inline svg.
    const renderSafariSVG = isSafari ? safariSVG : null;

    // If the browser is not Safari we will render an load an external SVG using <use> tag.
    // There is an explicit isNotSafari call because of the server side nature of the component we have to handle a race condition where the window object is not loaded yet.
    const nonSafariSVG = isNotSafari ? (
      <svg viewBox="0 0 1490 838" width="100%" {...props}>
        <use href={`static/illustrations/${path}.svg#${id}`} />
      </svg>
    ) : null;

    return safariSVG === null ? nonSafariSVG : renderSafariSVG;
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
