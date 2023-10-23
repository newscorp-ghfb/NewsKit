export interface SourcePointConfigTCFV2 {
  accountId: number;
  privacyManagerId?: string;
  /**
   * @deprecated Use `propertyHref` instead.
   */
  siteHref?: string;
  /**
   * @deprecated Use `propertyId` instead.
   */
  siteId?: string;
  targetingParams?: object;
  /**
   * @deprecated Use `baseEndpoint` instead.
   */
  mmsDomain?: string;
  /**
   * @deprecated
   */
  waitForConsent?: boolean;
  /**
   * @deprecated Use `baseEndpoint` instead.
   */
  wrapperAPIOrigin?: string;
  propertyHref?: string;
  baseEndpoint?: string;
  isSPA?: boolean;
  groupPmId?: number;
  propertyId?: string;
  events?: object;
  consentLanguage?: string;
}

export interface SourcePointConfigUnified {
  accountId: number;
  baseEndpoint?: string;
  authId?: number;
  authCookie?: string;
  campaignEnv?: string;
  isSPA?: boolean;
  joinHref?: boolean;
  targetingParams?: object;
  propertyHref?: string;
  propertyId?: number;
  events?: object;
  gdpr?: {
    consentLanguage?: string;
    groupPmId?: number;
    targetingParams?: object;
  };
  ccpa?: {
    alwaysDisplayDNS?: boolean;
    groupPmId?: number;
    targetingParams?: object;
    includeGppApi?: boolean | MSPATransactions;
  };
  gpp?: boolean;
}

export interface SourcePointConfigNonTCFV1 {
  accountId: number;
  baseEndpoint?: string;
  isSPA?: boolean;
  groupPmId?: number;
  propertyHref?: string;
  propertyId?: string;
  targetingParams?: object;
  events?: object;
  consentLanguage?: string;
}

export interface BaseConsentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactHelmet?: React.ComponentType<{script?: Array<any>}>;
}
export interface ConsentPropsTCFV2 extends BaseConsentProps {
  sourcePointConfigTCFV2: SourcePointConfigTCFV2;
}

export interface ConsentPropsUnified extends BaseConsentProps {
  sourcePointConfigUnified: SourcePointConfigUnified;
}

export interface ConsentPropsNonTCFV1 extends BaseConsentProps {
  sourcePointConfigNonTCFV1: SourcePointConfigNonTCFV1;
}

export type ConsentProps =
  | ConsentPropsTCFV2
  | ConsentPropsNonTCFV1
  | ConsentPropsUnified;

export interface MSPATransactions {
  MspaCoveredTransaction: string;
  MspaOptOutOptionMode: string;
  MspaServiceProviderMode: string;
}
