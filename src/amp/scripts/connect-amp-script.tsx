import React, {createContext} from 'react';
import {ScriptsKey} from './scripts';
import {MaybeArray, map, toArray} from '../../utils/array';

export type AmpScriptsObject = Record<ScriptsKey, true>;

export const createAmpScriptsObject = () => ({} as AmpScriptsObject);

export const {
  Provider: AmpScriptsProvider,
  Consumer: AmpScriptsConsumer,
} = createContext<AmpScriptsObject | undefined>(undefined);

export const connectAmpScript = <T extends {}>(
  scriptsToAdd: MaybeArray<ScriptsKey>,
) => (Component: React.ComponentType<T>) => (props: T) => (
  <AmpScriptsConsumer>
    {scriptIds => {
      if (!scriptIds) {
        // eslint-disable-next-line no-console
        console.warn(
          `No script context available. Cannot add ${toArray(scriptsToAdd).join(
            ', ',
          )} scripts`,
        );
      } else {
        map(scriptsToAdd, scriptName => {
          // eslint-disable-next-line no-param-reassign
          scriptIds[scriptName] = true;
        });
      }
      return <Component {...props} />;
    }}
  </AmpScriptsConsumer>
);
