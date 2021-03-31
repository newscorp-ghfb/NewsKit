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

export interface ConsentPropsNonTCFV1 extends BaseConsentProps {
  sourcePointConfigNonTCFV1: SourcePointConfigNonTCFV1;
}

export type ConsentProps = ConsentPropsTCFV2 | ConsentPropsNonTCFV1;
