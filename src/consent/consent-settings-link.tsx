import * as React from 'react';
import {LinkStandalone} from '../link';
import {LinkProps} from '../link/types';

type SPWindowUnifiedGDPR = Window & {
  _sp_?: {
    gdpr?: {
      loadPrivacyManagerModal: (managerId: string, tabToOpen?: string) => void;
    };
  };
};

type SPWindowUnifiedCCPA = Window & {
  _sp_?: {
    ccpa?: {
      loadPrivacyManagerModal: (managerId: string) => void;
    };
  };
};

type SPWindowUnifiedGPP = Window & {
  _sp_?: {
    gpp?: {
      loadPrivacyManagerModal: (managerId: string) => void;
    };
  };
};

type SPWindowTCF2 = Window & {
  _sp_?: {
    loadPrivacyManagerModal: (managerId?: string) => void;
  };
};

export interface ConsentSettingsLinkProps extends Omit<LinkProps, 'href'> {
  siteId?: string;
  privacyManagerId: string;
  children?: string;
  gdpr?: boolean;
  ccpa?: boolean;
  gpp?: boolean;
  tabToOpen?:
    | 'purposes'
    | 'vendors'
    | 'features'
    | 'purposes-li'
    | 'vendors-li';
}

export const ConsentSettingsLink: React.FC<ConsentSettingsLinkProps> = ({
  siteId,
  privacyManagerId,
  gdpr,
  ccpa,
  gpp,
  tabToOpen,
  children = 'Manage Consent',
  ...props
}) => (
  <LinkStandalone
    {...props}
    href="#"
    role="button"
    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      try {
        if (gdpr) {
          // eslint-disable-next-line no-underscore-dangle
          (window as SPWindowUnifiedGDPR)._sp_!.gdpr!.loadPrivacyManagerModal(
            privacyManagerId,
            tabToOpen,
          );
        } else if (ccpa) {
          // eslint-disable-next-line no-underscore-dangle
          (window as SPWindowUnifiedCCPA)._sp_!.ccpa!.loadPrivacyManagerModal(
            privacyManagerId,
          );
        } else if (gpp) {
          // eslint-disable-next-line no-underscore-dangle
          (window as SPWindowUnifiedGPP)._sp_!.gpp!.loadPrivacyManagerModal(
            privacyManagerId,
          );
        } else {
          // eslint-disable-next-line no-underscore-dangle
          (window as SPWindowTCF2)._sp_!.loadPrivacyManagerModal(
            privacyManagerId,
          );
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(
          'Error occurred attempting to open privacy manager modal. Is Sourcepoint CMP present on this page?',
          e,
        );
      }

      if (props.onClick) {
        props.onClick(event);
      }
    }}
  >
    {children}
  </LinkStandalone>
);
