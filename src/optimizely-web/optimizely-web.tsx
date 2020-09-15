import * as React from 'react';
import {
  RenderScriptsReactHelmetProp,
  RenderScripts,
} from '../utils/render-scripts';

export interface OptimizelyWebProps extends RenderScriptsReactHelmetProp {
  optimizelyCdn: string;
}

export const OptimizelyWeb: React.FC<OptimizelyWebProps> = ({
  optimizelyCdn,
  reactHelmet,
}) => (
  <RenderScripts
    scripts={[
      {
        content: `(function() {
            window["optimizely_cdn"] = "${optimizelyCdn}";

            if (window.location === window.parent.location) {
              window['optimizely'] = window['optimizely'] || [];
              if (document.cookie.indexOf('nuk-consent-personalisation=1') === -1) {
                window['optimizely'].push({
                  type: 'disable',
                });
              }
            }
          })();`,
      },
      {
        src: optimizelyCdn,
      },
    ]}
    reactHelmet={reactHelmet}
  />
);
