import React, {useEffect, useState} from 'react';
import {isNotSafari, isSafari, pathToID} from './utils';

/**
 * Only for Safari. It reads the svg file as raw string and returns it as an inline SVG.
 */
const getSafariSVG = async (
  sanitize: (source: string) => string,
  path: string,
  props?: React.SVGProps<SVGSVGElement>,
) => {
  const rawSVG = sanitize(
    // `!!raw-loader!` would apply the raw-loader only for this usage

    await (
      await import(`!!raw-loader!../../public/static/illustrations/${path}.svg`)
    ).default,
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
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
      if (isNotSafari) {
        setOpacity(1);
      }
    }, []);

    useEffect(() => {
      if (isSafari) {
        // Dynamically importing 'isomorphic-dompurify' only for Safari to avoid bloating the bundle size for other browsers.
        const importSanitizer = async () => {
          const dompurify = await (await import('isomorphic-dompurify'))
            .default;
          const svg = await getSafariSVG(dompurify.sanitize, path, props);
          setSafariSVG(svg);
        };
        importSanitizer();
      }
    }, []);

    const nonSafariSVG = (
      <svg viewBox="0 0 1490 838" width="100%" opacity={opacity} {...props}>
        <use href={`static/illustrations/${path}.svg#${id}`} />
      </svg>
    );

    return safariSVG || nonSafariSVG;
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
