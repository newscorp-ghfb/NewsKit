import * as React from 'react';
import {
  RenderScriptsReactHelmetProp,
  RenderScripts,
} from '../utils/render-scripts';

export interface TealiumProps extends RenderScriptsReactHelmetProp {
  accountId: string;
  profileId: string;
  env: string;
}

export const Tealium: React.FC<TealiumProps> = ({
  accountId,
  profileId,
  env,
  reactHelmet,
}) => (
  <RenderScripts
    reactHelmet={reactHelmet}
    scripts={[
      {
        content: `(function(a,b,c,d){
              a='//tags.tiqcdn.com/utag/${accountId}/${profileId}/${env}/utag.js';
              b=document;
              c='script';
              d=b.createElement(c);
              d.src=a;
              d.type='text/java'+c;
              d.async=true;
              window.utag_queue = []
              if (d.addEventListener) {
                d.addEventListener(
                  'load',
                  function () {
                    for (var i = 0; i < utag_queue.length; i++) {
                      event = utag_queue[i];
                      utag.track(event.event, event.data);
                    }
                  },
                  false
                );
              } else {
                d.onreadystatechange = function () {
                  if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    this.onreadystatechange = null;
                    for (var i = 0; i < utag_queue.length; i++) {
                      event = utag_queue[i];
                      utag.track(event.event, event.data);
                    }
                  }
                };
              }
              a = b.getElementsByTagName(c)[0];
              a.parentNode.insertBefore(d, a);
            })();`,
      },
    ]}
  />
);
