export interface SourcePointConfig {
  accountId: string;
  privacyManagerId?: string;
  siteHref?: string;
  siteId?: string;
  targetingParams?: object;
  mmsDomain?: string;
  waitForConsent?: boolean;
  cmpOrigin?: string;
}

export interface SourcePointConfigTCFV2 {
  accountId: number;
  privacyManagerId?: string;
  siteHref?: string;
  siteId?: string;
  targetingParams?: object;
  mmsDomain?: string;
  waitForConsent?: boolean;
  wrapperAPIOrigin?: string;
  propertyHref?: string;
}

export interface BaseConsentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactHelmet?: React.ComponentType<{script?: Array<any>}>;
}

// This interface is deprecated
export interface LegacyConsentProps extends BaseConsentProps {
  accountId: string;
  mmsDomain?: string;
  waitForConsent?: boolean;
}

export interface ConsentPropsV1 extends BaseConsentProps {
  sourcePointConfig: SourcePointConfig;
}

export interface ConsentPropsTCFV2 extends BaseConsentProps {
  sourcePointConfigTCFV2: SourcePointConfigTCFV2;
}

export type ConsentProps =
  | LegacyConsentProps
  | ConsentPropsV1
  | ConsentPropsTCFV2;
