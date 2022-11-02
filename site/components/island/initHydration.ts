import React from 'react';
import {render, hydrate} from 'react-dom';

const getName = (marker: HTMLElement): string | null => {
  const name = marker.getAttribute('name');
  if (!name) {
    console.error(
      `🚨 Error - no name attribute supplied. We need name to know what component to import 🚨`,
    );
  }
  return name;
};

const getProps = (marker: HTMLElement): {[key: string]: unknown} => {
  const serialised = marker.getAttribute('props');
  let props: {[key: string]: unknown};
  try {
    props = serialised && JSON.parse(serialised);
  } catch (error: unknown) {
    console.error(
      `🚨 Error parsing props. Is this data serialisable? ${String(
        serialised,
      )} 🚨`,
    );
    throw error;
  }
  return props;
};

const doHydration = async (
  name: string,
  data: {[key: string]: unknown} | null,
  element: HTMLElement,
): Promise<void> => {
  const alreadyHydrated = element.dataset.nkReady;
  if (alreadyHydrated) return;

  await import(
    /* webpackInclude: /\.importable\.tsx$/ */
    /* webpackChunkName: "[request]" */
    `../../components/${name}.importable`
  )
    .then(module => {
      const clientOnly = element.getAttribute('clientOnly') === 'true';
      if (clientOnly) {
        element.querySelector('[data-name="placeholder"]')?.remove();
        render(React.createElement(module[name], data), element);
      } else {
        // TODO: test later
        hydrate(React.createElement(module[name], data), element);
      }

      element.setAttribute('data-nk-ready', 'true');
    })
    .catch(error => {
      if (name && error.message.includes(name)) {
        console.error(
          `🚨 Error importing ${name}. Components must live in the root of /components and follow the [MyComponent].importable.tsx naming convention 🚨`,
        );
      }
      throw error;
    });
};

const initHydration = (elements: NodeListOf<Element>): void => {
  console.log('initHydration');
  elements.forEach(element => {
    if (element instanceof HTMLElement) {
      const name = getName(element);
      const props = getProps(element);

      if (!name) return;

      doHydration(name, props, element);
    }
  });
};

const init = () => {
  console.log('init island');
  const elements = document.querySelectorAll('nk-island');
  initHydration(elements);

  return Promise.resolve();
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom ready');
  init();
});
