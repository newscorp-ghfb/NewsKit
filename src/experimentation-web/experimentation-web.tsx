import * as React from 'react';
import {RenderScripts} from '../utils/render-scripts';
import {ExperimentationWebProps} from './types';

export const ExperimentationWeb: React.FC<ExperimentationWebProps> = ({
  reactHelmet,
  async = false,
  ...props
}) => {
  const {optimizelyWebConfig} = props;

  return (
    <RenderScripts
      scripts={[
        {
          content: `(function() {
            if (window.location === window.parent.location) {
              window.optimizely_feature_flag = true;
              window["optimizely_cdn"] = "${optimizelyWebConfig.scriptCdn}";

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
          src: optimizelyWebConfig.scriptCdn,
          async,
        },
      ]}
      reactHelmet={reactHelmet}
    />
  );
};
