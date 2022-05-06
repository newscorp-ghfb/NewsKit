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

export interface SourcePointConfigUnifiedTCF {
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

export interface ConsentPropsUnifiedTCF extends BaseConsentProps {
  sourcePointConfigUnifiedTCF: SourcePointConfigUnifiedTCF;
}

export interface ConsentPropsNonTCFV1 extends BaseConsentProps {
  sourcePointConfigNonTCFV1: SourcePointConfigNonTCFV1;
}

export type ConsentProps =
  | ConsentPropsTCFV2
  | ConsentPropsNonTCFV1
  | ConsentPropsUnifiedTCF;
