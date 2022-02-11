import React, {useRef, useEffect} from 'react';
import {createPortal} from 'react-dom';

// https://medium.com/trabe/reusable-react-portals-17dead20232b
export const Portal = ({rootId, children}) => {
  const target = useRef(null);

  useEffect(() => {
    let container = document.getElementById(rootId);
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', rootId);
      document.body.appendChild(container);
    }

    container.appendChild(target.current);

    return () => {
      target.current.remove();
      if (container.childNodes.length === 0) {
        container.remove();
      }
    };
  }, [rootId]);

  if (!target.current) {
    target.current = document.createElement('div');
  }

  return createPortal(children, target.current);
};
