import React from 'react';
import {createPortal} from 'react-dom';
import {useIsomorphicLayoutEffect} from '../utils/hooks';
import {LayerContextProvider, useLayerOrganizer, useLayer} from './context';

interface LayerProps {
  appendToRef?: React.RefObject<HTMLElement | null>;
  children?: React.ReactNode;
  className?: string;
}

const LAYER_CLASSNAME = 'nk-layer';

export const Layer: React.FC<LayerProps> = ({
  children,
  appendToRef,
  className,
}) => {
  // This is the host set in the parent LayerOrganizer
  const {host: layerOrganizerHost} = useLayerOrganizer();

  // parent layer is used for nesting multiple layers
  const parentLayer = useLayer(); //

  const layerElement = React.useMemo(
    () => typeof document !== 'undefined' && document.createElement('div'),
    [],
  );

  useIsomorphicLayoutEffect(() => {
    // SSR only
    /* istanbul ignore next */
    if (!layerElement || typeof document === 'undefined') return;

    // target: is the element the Layer will be appended to
    // it can be document.body, parent layer-organizer or attache to another element via Ref
    let hostElement = layerOrganizerHost || document.body;
    if (appendToRef && appendToRef.current) {
      hostElement = appendToRef.current;
    } else if (parentLayer) {
      hostElement = parentLayer;
    }

    /* istanbul ignore next */
    if (!hostElement) return;

    // Add default className and user provided classNames to the layer element
    // Which will allow user to style Layer component
    const classList = [LAYER_CLASSNAME];
    if (className) className.split(' ').forEach(item => classList.push(item));
    classList.forEach(item => layerElement.classList.add(item));

    hostElement.appendChild(layerElement);
    // eslint-disable-next-line consistent-return
    return () => {
      if (hostElement) {
        hostElement.removeChild(layerElement);
      }
    };
  }, [layerElement, parentLayer, layerOrganizerHost, appendToRef, className]);

  // On SSR we don't render layers so there is not nesting, because React.Portal needs DOM
  return typeof document === 'undefined' || !layerElement ? (
    /* istanbul ignore next */
    <>{children}</>
  ) : (
    createPortal(
      <LayerContextProvider value={layerElement}>
        {children}
      </LayerContextProvider>,
      layerElement,
    )
  );
};
