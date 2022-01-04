import * as React from 'react';
import {Link} from '../link';

type SPWindow = Window & {
  _sp_: {
    loadPrivacyManagerModal: (siteId: string, managerId: string) => void;
  };
};

export interface ConsentSettingsLinkProps {
  siteId: string;
  privacyManagerId: string;
  children?: string;
}

export const ConsentSettingsLink: React.FC<ConsentSettingsLinkProps> = ({
  siteId,
  privacyManagerId,
  children = 'Manage Consent',
}) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link
    href="#"
    role="button"
    onClick={() => {
      try {
        // eslint-disable-next-line no-underscore-dangle
        (window as SPWindow)._sp_.loadPrivacyManagerModal(
          siteId,
          privacyManagerId,
        );
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(
          'Error occurred attempting to open privacy manager modal. Is Sourcepoint CMP present on this page?',
          e,
        );
      }
    }}
  >
    {children}
  </Link>
);
