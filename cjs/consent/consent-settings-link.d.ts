import * as React from 'react';
import { LinkProps } from '../link/types';
export interface ConsentSettingsLinkProps extends Omit<LinkProps, 'href'> {
    siteId?: string;
    privacyManagerId: string;
    children?: string;
    gdpr?: boolean;
    ccpa?: boolean;
    usnat?: boolean;
    tabToOpen?: 'purposes' | 'vendors' | 'features' | 'purposes-li' | 'vendors-li';
}
export declare const ConsentSettingsLink: React.FC<ConsentSettingsLinkProps>;
//# sourceMappingURL=consent-settings-link.d.ts.map