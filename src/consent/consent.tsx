import React from 'react';
import {ConsentTCF1, ConsentTCF1Props} from './consent-tcf1/consent-tcf1';
import {ConsentTCF2, ConsentTCF2Props} from './consent-tcf2/consent-tcf2';

interface ConsentProps {
  accountId?: number | string;
  mmsDomain?: string;
  waitForConsent?: boolean;
  sourcePointConfig: SourcePointConfigProps;
  version?: 'TCFv1' | 'TCFv2';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactHelmet?: React.ComponentType<{script?: Array<any>}>;
}

export interface SourcePointConfigProps {
  accountId: number | string;
  mmsDomain?: string;
  propertyHref?: string;
  privacyManagerId?: string;
  siteHref?: string;
  siteId?: string;
  targetingParams?: object;
  waitForConsent?: boolean;
  wrapperAPIOrigin?: string;
}

export const Consent: React.FC<ConsentProps> = props => {
  const {version = 'TCFv1', waitForConsent = false} = props;

  if (version === 'TCFv2') {
    const tcf2Props = props as ConsentTCF2Props;
    return <ConsentTCF2 {...tcf2Props} waitForConsent={waitForConsent} />;
  }

  const tcf1Props = props as ConsentTCF1Props;
  return <ConsentTCF1 {...tcf1Props} waitForConsent={waitForConsent} />;
};
