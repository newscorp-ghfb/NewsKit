import React from 'react';
import {RenderScripts} from '../utils/render-scripts';
import {ConsentProps} from './types';
import {
  getNonTCFScripts,
  getV2Scripts,
  getUnifiedTCFScripts,
  isNonTCFV1Props,
  isV2Props,
  isUnifiedTCFProps,
} from './consent-utils';

export const Consent: React.FC<ConsentProps> = ({reactHelmet, ...props}) => {
  if (isV2Props(props)) {
    return (
      <RenderScripts
        scripts={getV2Scripts(props.sourcePointConfigTCFV2)}
        reactHelmet={reactHelmet}
      />
    );
  }
  if (isUnifiedTCFProps(props)) {
    return (
      <RenderScripts
        scripts={getUnifiedTCFScripts(props.sourcePointConfigUnifiedTCF)}
        reactHelmet={reactHelmet}
      />
    );
  }
  if (isNonTCFV1Props(props)) {
    return (
      <RenderScripts
        scripts={getNonTCFScripts(props.sourcePointConfigNonTCFV1)}
        reactHelmet={reactHelmet}
      />
    );
  }
  return null;
};
