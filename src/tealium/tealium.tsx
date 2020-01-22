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
}) => (
  <RenderScripts
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
               a=b.getElementsByTagName(c)[0];
               a.parentNode.insertBefore(d,a);
             })();
             `,
      },
    ]}
  />
);
