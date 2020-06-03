import React from 'react';
import {RenderScripts} from '../utils/render-scripts';
import {ConsentProps} from './consent-interfaces';
import {
  getV1Scripts,
  getV2Scripts,
  isLegacyProps,
  isV1Props,
  isV2Props,
} from './consent-utils';

export const Consent: React.FC<ConsentProps> = ({reactHelmet, ...props}) => {
  if (isLegacyProps(props)) {
    const {accountId, mmsDomain, waitForConsent = false} = props;
    return (
      <RenderScripts
        scripts={getV1Scripts({
          accountId,
          mmsDomain,
          waitForConsent,
        })}
        reactHelmet={reactHelmet}
      />
    );
  }
  if (isV1Props(props)) {
    return (
      <RenderScripts
        scripts={getV1Scripts(props.sourcePointConfig)}
        reactHelmet={reactHelmet}
      />
    );
  }
  if (isV2Props(props)) {
    return (
      <RenderScripts
        scripts={getV2Scripts(props.sourcePointConfigTCFV2)}
        reactHelmet={reactHelmet}
      />
    );
  }

  return null;
};
