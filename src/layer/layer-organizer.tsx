import React, {useState} from 'react';
import {useIsomorphicLayoutEffect} from '../utils/hooks';
import {LayerOrganizerContextProvider, useLayerOrganizer} from './context';

export interface LayerOrganizerProps {
  children?: React.ReactNode;
  zIndex?: number;
}

const LAYER_ORGANIZER_CLASSNAME = 'nk-layer-organizer';

export const LayerOrganizer: React.FC<LayerOrganizerProps> = ({
  children,
  zIndex,
}) => {
  // host is a container for all layers
  const [host, setHost] = useState<HTMLDivElement | null>(null);

  // parent layer organizer is used for nesting multiple layer-organizers
  const parentLayerOrganizer = useLayerOrganizer();
  // The parent container that the new layer-organizer(host) will be attached
  const parentHost = parentLayerOrganizer.host;

  // Create a host element which hold all layers
  const hostElement = React.useMemo(
    () => typeof document !== 'undefined' && document.createElement('div'),
    [],
  );

  useIsomorphicLayoutEffect(() => {
    // Ignore that on SSR
    /* istanbul ignore next */
    if (!hostElement || typeof document === 'undefined') return;

    // target: is the place where we attach the current layer-organizer(host)
    const target = parentHost || document.body;
    hostElement.setAttribute('class', LAYER_ORGANIZER_CLASSNAME);

    if (zIndex) {
      hostElement.style.position = 'absolute';
      hostElement.style.top = '0';
      hostElement.style.left = '0';
      hostElement.style.right = '0';
      hostElement.style.zIndex = zIndex.toString();
    }

    target.appendChild(hostElement);
    setHost(hostElement);

    // eslint-disable-next-line consistent-return
    return () => {
      if (host && target.contains(host)) {
        target.removeChild(host);
        setHost(null);
      }
    };
  }, [hostElement, host, parentLayerOrganizer.host, zIndex]);

  const layerOrganizerCtx = {
    host,
  };

  return (
    <LayerOrganizerContextProvider value={layerOrganizerCtx}>
      {children}
    </LayerOrganizerContextProvider>
  );
};
