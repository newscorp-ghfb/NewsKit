import React from 'react';
import {ScriptsKey, scriptVersions} from './scripts';
import {AmpScriptsConsumer} from './connect-amp-script';

export const AmpScripts: React.FC = () => (
  <AmpScriptsConsumer>
    {scriptIds => {
      if (scriptIds) {
        return (
          <>
            {(Object.keys(scriptIds) as ScriptsKey[])
              .filter(scriptId => Boolean(scriptVersions[scriptId]))
              .map(scriptId => (
                <script
                  async
                  key={scriptId}
                  custom-element={scriptId}
                  src={`https://cdn.ampproject.org/v0/${scriptId}-${scriptVersions[scriptId]}.js`}
                />
              ))}
          </>
        );
      }
      return null;
    }}
  </AmpScriptsConsumer>
);
