import * as React from 'react';
import {
  RenderScriptsReactHelmetProp,
  RenderScripts,
} from '../utils/render-scripts';

export interface ExperimentationWebProps extends RenderScriptsReactHelmetProp {
  optimizelyCdn: string;
}

export const ExperimentationWeb: React.FC<ExperimentationWebProps> = ({
  optimizelyCdn,
  reactHelmet,
}) => (
  <RenderScripts
    scripts={[
      {
        content: `(function() {
            if (window.location === window.parent.location) {
              window["optimizely_cdn"] = "${optimizelyCdn}";

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
