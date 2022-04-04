import React, {useLayoutEffect, useState} from 'react';
import {LayerOganizerContextProvider} from './context';

interface LayerOrganizerProps {
  children?: React.ReactNode;
  zIndex?: number;
}

const LAYER_ORGANIZER_CLASSNAME = 'nk-layer-organizer';

export const LayerOrganizer: React.FC<LayerOrganizerProps> = ({
  children,
  zIndex,
}) => {
  // const hostRef = useRef<HTMLDivElement | null>(null);
  const [host, setHost] = useState<HTMLDivElement | null>(null);

  // Create host when additional layers
  // Otherwise don't add div to DOM ??
  // Remove host when needed
  useLayoutEffect(() => {
    if (!host) {
      const container = document.createElement('div');
      container.setAttribute('class', LAYER_ORGANIZER_CLASSNAME);
      if (zIndex) {
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.right = '0';
        container.style.zIndex = zIndex.toString();
      }

      document.body.appendChild(container);
      setHost(container);
    }

    return () => {
      if (host && document.body.contains(host)) {
        document.body.removeChild(host);
        setHost(null);
      }
    };
  }, [host, zIndex]);

  const layerOrganizerCtx = {
    // host: hostRef.current,
    host,
  };

  return (
    <LayerOganizerContextProvider value={layerOrganizerCtx}>
      {children}
    </LayerOganizerContextProvider>
  );
};
