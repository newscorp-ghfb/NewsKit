"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentSettingsLink = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var link_1 = require("../link");
var ConsentSettingsLink = function (_a) {
    var siteId = _a.siteId, privacyManagerId = _a.privacyManagerId, gdpr = _a.gdpr, ccpa = _a.ccpa, usnat = _a.usnat, tabToOpen = _a.tabToOpen, _b = _a.children, children = _b === void 0 ? 'Manage Consent' : _b, props = tslib_1.__rest(_a, ["siteId", "privacyManagerId", "gdpr", "ccpa", "usnat", "tabToOpen", "children"]);
    return (React.createElement(link_1.LinkStandalone, tslib_1.__assign({}, props, { href: "#", role: "button", onClick: function (event) {
            event.preventDefault();
            try {
                if (gdpr) {
                    // eslint-disable-next-line no-underscore-dangle
                    window._sp_.gdpr.loadPrivacyManagerModal(privacyManagerId, tabToOpen);
                }
                else if (ccpa) {
                    // eslint-disable-next-line no-underscore-dangle
                    window._sp_.ccpa.loadPrivacyManagerModal(privacyManagerId);
                }
                else if (usnat) {
                    // eslint-disable-next-line no-underscore-dangle
                    window._sp_.usnat.loadPrivacyManagerModal(privacyManagerId);
                }
                else {
                    // eslint-disable-next-line no-underscore-dangle
                    window._sp_.loadPrivacyManagerModal(privacyManagerId);
                }
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.warn('Error occurred attempting to open privacy manager modal. Is Sourcepoint CMP present on this page?', e);
            }
            if (props.onClick) {
                props.onClick(event);
            }
        } }), children));
};
exports.ConsentSettingsLink = ConsentSettingsLink;
//# sourceMappingURL=consent-settings-link.js.map