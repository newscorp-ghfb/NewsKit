/* eslint-disable react/no-danger */
import * as React from 'react';

export interface TealiumProps {
  account: string;
  profile: string;
  env: string;
}

export const Tealium: React.FC<TealiumProps> = ({account, profile, env}) => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `(function(a,b,c,d){
                a='//tags.tiqcdn.com/utag/${account}/${profile}/${env}/utag.js';
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
    }}
  />
);
