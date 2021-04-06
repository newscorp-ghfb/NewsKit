import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const Sun: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24">
    <path
      fill="#0A68C1"
      fillRule="nonzero"
      d="M6.76 5.309589l-1.8-1.798173-1.41 1.416438 1.79 1.798173L6.76 5.30959zM4 10.995434H1v2.009132h3v-2.009132zM13 1h-2v2.96347h2V1zm7.45 3.927854l-1.41-1.416438-1.79 1.798173 1.41 1.416438 1.79-1.798173zM17.24 18.69041l1.79 1.80822 1.41-1.41644-1.8-1.798173-1.4 1.406393zM20 10.995434v2.009132h3v-2.009132h-3zm-8-5.022831c-3.31 0-6 2.702283-6 6.027397 0 3.325114 2.69 6.027397 6 6.027397S18 15.325114 18 12c0-3.325114-2.69-6.027397-6-6.027397zM11 23h2v-2.96347h-2V23zm-7.45-3.927854l1.41 1.416439 1.79-1.80822-1.41-1.416438-1.79 1.80822z"
    />
  </Svg>
);

Sun.displayName = 'SunIcon';

export const SunIcon = withDefaultProps(toNewsKitIcon(Sun), {
  title: 'Sun icon',
  overrides: {size: 'iconSize020'},
});
