import React, {useState} from 'react';
import {useIsomorphicLayoutEffect} from '../utils/hooks';
import {LayerOganizerContextProvider, useLayerOrganizer} from './context';

interface LayerOrganizerProps {
  children?: React.ReactNode;
  zIndex?: number;
}

const LAYER_ORGANIZER_CLASSNAME = 'nk-layer-organizer';

export const LayerOrganizer: React.FC<LayerOrganizerProps> = ({
  children,
  zIndex,
}) => {
  const [host, setHost] = useState<HTMLDivElement | null>(null);

  const parentLayerOrganizer = useLayerOrganizer(); // Needed for nesting

  // Create host when additional layers
  // Otherwise don't add div to DOM ??
  // Remove host when needed
  const container = React.useMemo(
    () => typeof document !== 'undefined' && document.createElement('div'),
    [],
  );

  useIsomorphicLayoutEffect(() => {
    /* istanbul ignore next */
    if (!container || typeof document === 'undefined') return;

    const target = parentLayerOrganizer.host || document.body;
    container.setAttribute('class', LAYER_ORGANIZER_CLASSNAME);

    if (zIndex) {
      container.style.position = 'absolute';
      container.style.top = '0';
      container.style.left = '0';
      container.style.right = '0';
      container.style.zIndex = zIndex.toString();
    }

    target.appendChild(container);
    setHost(container);

    // eslint-disable-next-line consistent-return
    return () => {
      if (host && target.contains(host)) {
        target.removeChild(host);
        setHost(null);
      }
    };
  }, [container, host, parentLayerOrganizer.host, zIndex]);

  const layerOrganizerCtx = {
    host,
  };

  return (
    <LayerOganizerContextProvider value={layerOrganizerCtx}>
      {children}
    </LayerOganizerContextProvider>
  );
};
