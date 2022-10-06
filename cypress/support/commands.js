Cypress.Commands.add('mockConsentAndVisit', url => {
  cy.setCookie('nukt_sp_consent', 'JABCDEFGHI');
  cy.setCookie('consentUUID', '421e3aef-4f3c-4d41-a425-fb9b5f745896_12');
  cy.setCookie('_sp_sampled_user', JSON.stringify(false));
  localStorage.setItem(
    '_sp_local_state',
    JSON.stringify({
      gdpr: {
        mmsCookies: [
          '_sp_v1_ss=1:H4sIAAAAAAAAAItWqo5RKimOUbKKBjLyQAyD2lidGKVUEDOvNCcHyC4BK6iurVWKBQAW54XRMAAAAA%3D%3D',
        ],
        propertyId: 5623,
        messageId: 565423,
      },
    }),
  );
  localStorage.setItem(
    '_sp_user_consent_5623',
    JSON.stringify({
      gdpr: {
        authId: null,
        uuid: '421e3aef-4f3c-4d41-a425-fb9b5f745896_12',
        getMessageAlways: false,
        applies: false,
        actions: [
          {
            _id: '61fa905112228108ab6be61f',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'J';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be627',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'A';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be62f',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'B';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be637',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'C';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be63f',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'D';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be647',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'E';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be64f',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'F';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be657',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'G';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be65f',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'H';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}",
            tagManager: null,
          },
          {
            _id: '61fa905112228108ab6be667',
            type: 'inline',
            url: '',
            js:
              "/*\r\nAIT consent management code.\r\nPlease do not modify.\r\n*/\r\nlet lbl = 'I';\r\nif( typeof window.nonIabPurposeConsents === 'undefined' ) {\r\n  // create the list, if not existing\r\n  window.nonIabPurposeConsents = lbl;\r\n}\r\nelse {\r\n  // add the consent to the list, if not already present\r\n  if( window.nonIabPurposeConsents.indexOf(lbl) === -1 ) {\r\n    window.nonIabPurposeConsents += lbl;\r\n  }\r\n}\r\n\r\n// manage the cookie for Tealium\r\n// update the cookie and set the expiry date for it to THREE YEARS\r\nlet now = new Date();\r\nlet time = now.getTime();\r\ntime += 94608000000;  // three years later\r\nnow.setTime(time);\r\n// drop the cookie\r\ndocument.cookie = 'nukt_sp_consent=' + encodeURIComponent( window.nonIabPurposeConsents ) + ';expires='+now.toGMTString()+';path=/';\r\n// update Tealium data layer, if existing\r\nif( typeof utag_data !== 'undefined' ) { utag_data['cp.nukt_sp_consent'] = window.nonIabPurposeConsents; }\r\nif( ( typeof utag !== 'undefined' ) && ( typeof utag.data !== 'undefined' ) ) { utag.data['cp.nukt_sp_consent'] = window.nonIabPurposeConsents; }\r\n\r\n// clear the queue of Tealium calls, if needed\r\nif( ( typeof window.nukt_cmp !== 'undefined' ) && ( typeof window.nukt_cmp.flushQueue !== 'undefined' ) ) {\r\n  window.nukt_cmp.flushQueue();\r\n}\r\n\r\n\r\n\r\n// code to handle the cookie V2 for new Tealium integration\r\nif( ( typeof _sp_ !== 'undefined' ) && ( typeof _sp_.getCustomVendorConsents === 'function' ) ) {\r\n\r\n  _sp_.getCustomVendorConsents( function( v, success ) {\r\n    if( success ) {\r\n      // consent information is available\r\n\t  // read the data structure and set the flags\r\n\t  var f = '';\r\n\t  if( typeof v.consentedPurposes !== 'undefined' &&\r\n\t      v.consentedPurposes.constructor === Array &&\r\n\t\t  v.consentedPurposes.length > 0 ) {\r\n\t    for( var i = 0; i < v.consentedPurposes.length; i++ ) {\r\n\r\n          switch( v.consentedPurposes[i]._id.toLowerCase() ) {\r\n\t\t    case '5ff72d5ebdf037283e40a4c2': f += 'A'; break; \r\n\t\t    case '5ff72d5ebdf037283e40a4c7': f += 'B'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38c1': f += 'C'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38c6': f += 'D'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38cb': f += 'E'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38d0': f += 'F'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38d5': f += 'G'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38da': f += 'H'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38df': f += 'I'; break;\r\n\t\t\tcase '5ff72d5ebdf037283e40a4bd': f += 'J'; break;\r\n\t\t  }\r\n\r\n\t\t}\r\n\t  }\r\n\t  f = f + '|';\r\n\t  if( typeof v.legIntPurposes !== 'undefined' &&\r\n\t      v.legIntPurposes.constructor === Array &&\r\n\t\t  v.legIntPurposes.length > 0 ) {\r\n\t    for(var j = 0; j < v.legIntPurposes.length; j++ ) {\r\n\t\t\t\r\n          switch( v.legIntPurposes[j]._id.toLowerCase() ) {\r\n\t\t    case '5ff72d5ebdf037283e40a4c2': f += 'N'; break; \r\n\t\t    case '5ff72d5ebdf037283e40a4c7': f += 'O'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38c1': f += 'P'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38c6': f += 'Q'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38cb': f += 'R'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38d0': f += 'S'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38d5': f += 'T'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38da': f += 'U'; break;\r\n\t\t\tcase '6014443f87b0803b0f3e38df': f += 'V'; break;\r\n\t\t  }\r\n\t\t\t\r\n\t\t}\r\n      }\r\n\t  \r\n\t  // update the cookie V2 with the overall consent information\r\n      now = new Date();\r\n      time = now.getTime();\r\n      time += 94608000000; // three years later\r\n      now.setTime(time);\r\n      // drop the cookie\r\n      document.cookie = 'nukt_sp_consent_v2=' + encodeURIComponent(f) + ';expires=' + now.toGMTString() + ';path=/';\r\n\t  \r\n\t  // update Tealium data layer, if existing\r\n      if( typeof utag_data !== 'undefined' ) {\r\n        utag_data['cp.nukt_sp_consent_v2'] = f;\r\n      }\r\n      if( typeof utag !== 'undefined' && typeof utag.data !== 'undefined' ) {\r\n        utag.data['cp.nukt_sp_consent_v2'] = f;\r\n      }\r\n      \r\n\t  // clear the queue of Tealium calls, if needed\r\n      if( ( typeof window.nukt_cmp !== 'undefined' ) && ( typeof window.nukt_cmp.flushQueueV2 !== 'undefined' ) ) {\r\n        window.nukt_cmp.flushQueueV2();\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\n\r\n",
            tagManager: null,
          },
        ],
        euconsent: 'CPgX9oAPgX9oAAGABCENCjCsAAAAAAAAAAwIAAAAAAAA.YAAAAAAAAAAA',
        grants: {
          '5e7f6927b8e05c1c467daa5d': {
            vendorGrant: true,
            purposeGrants: {
              '5ff72d5ebdf037283e40a4bd': true,
              '5ff72d5ebdf037283e40a4c2': true,
              '5ff72d5ebdf037283e40a4c7': true,
              '6014443f87b0803b0f3e38c1': true,
              '6014443f87b0803b0f3e38c6': true,
              '6014443f87b0803b0f3e38cb': true,
              '6014443f87b0803b0f3e38d0': true,
              '6014443f87b0803b0f3e38d5': true,
              '6014443f87b0803b0f3e38da': true,
              '6014443f87b0803b0f3e38df': true,
            },
          },
          '5f745ab96f3aae0163740409': {
            vendorGrant: true,
            purposeGrants: {
              '5ff72d5ebdf037283e40a4bd': true,
              '5ff72d5ebdf037283e40a4c2': true,
              '5ff72d5ebdf037283e40a4c7': true,
              '6014443f87b0803b0f3e38c1': true,
              '6014443f87b0803b0f3e38c6': true,
              '6014443f87b0803b0f3e38cb': true,
              '6014443f87b0803b0f3e38d0': true,
              '6014443f87b0803b0f3e38d5': true,
              '6014443f87b0803b0f3e38da': true,
              '6014443f87b0803b0f3e38df': true,
            },
          },
        },
        addtlConsent: '1~',
        customVendorsResponse: {
          consentedVendors: [
            {
              _id: '5e7f6927b8e05c1c467daa5d',
              name: 'Branch Metrics, Inc.',
              vendorType: 'CUSTOM',
            },
            {
              _id: '5f745ab96f3aae0163740409',
              name: 'Ipsos MORI',
              vendorType: 'CUSTOM',
            },
          ],
          consentedPurposes: [
            {
              _id: '5ff72d5ebdf037283e40a4bd',
              name: 'Store and/or access information on a device',
            },
            {
              _id: '5ff72d5ebdf037283e40a4c2',
              name: 'Select personalised content',
            },
            {_id: '5ff72d5ebdf037283e40a4c7', name: 'Select personalised ads'},
            {_id: '6014443f87b0803b0f3e38c1', name: 'Select basic ads'},
            {
              _id: '6014443f87b0803b0f3e38c6',
              name: 'Create a personalised ads profile',
            },
            {
              _id: '6014443f87b0803b0f3e38cb',
              name: 'Create a personalised content profile',
            },
            {_id: '6014443f87b0803b0f3e38d0', name: 'Measure ad performance'},
            {
              _id: '6014443f87b0803b0f3e38d5',
              name: 'Measure content performance',
            },
            {
              _id: '6014443f87b0803b0f3e38da',
              name: 'Apply market research to generate audience insights',
            },
            {
              _id: '6014443f87b0803b0f3e38df',
              name: 'Develop and improve products',
            },
          ],
          legIntPurposes: [],
        },
        dateCreated: '2022-10-05T11:49:24.241Z',
        consentStatus: {
          rejectedAny: false,
          rejectedLI: false,
          consentedAll: true,
          granularStatus: {
            vendorConsent: 'ALL',
            vendorLegInt: 'EMPTY_VL',
            purposeConsent: 'ALL',
            purposeLegInt: 'EMPTY_VL',
            previousOptInAll: false,
            defaultConsent: false,
          },
          hasConsentData: true,
          consentedToAny: true,
        },
        vendorListId: '5ff72d5fa22863a7f72b9b95',
      },
      version: 1,
    }),
  );
  localStorage.setItem(
    '_sp_non_keyed_local_state',
    JSON.stringify({
      gdpr: {
        _sp_v1_uid: '1:155:e3c16ebd-c53a-4d82-8bdb-44950bfcc0d4',
        _sp_v1_data: '2:405997:1650365980:0:29:0:29:0:0:_:-1',
      },
    }),
  );
  cy.intercept('https://cdn.privacy-mgmt.com/wrapper/v2/meta-data*', {
    fixture: 'consent-meta.json',
  }).as('consentMeta');
  cy.intercept('https://cdn.privacy-mgmt.com/mms/v2/get_site_data*', {
    fixture: 'consent-site-data.json',
  }).as('consentSiteData');
  cy.intercept('https://cdn.privacy-mgmt.com/wrapper/v2/pv-data*', {
    fixture: 'consent-pv-data.json',
  }).as('consentSiteData');
  cy.visit(url);
});

const globalRulesConfig = {
  'page-has-heading-one': {enabled: false},
  // we don't need this rule when testing components, its disabled because our Layer component is attached to body and need a region
  'landmark-one-main': {enabled: false},
};

Cypress.Commands.add('checkA11yWithDefaultRules', () => {
  cy.checkA11y(null, {
    rules: globalRulesConfig,
  });
});

Cypress.Commands.add('checkA11yWithCustomRule', disabledRules => {
  cy.checkA11y(null, {
    rules: disabledRules.reduce((acc, rule) => {
      acc[rule] = {enabled: false};
      return acc;
    }, globalRulesConfig),
  });
});

Cypress.Commands.add('acceptCookieBanner', () => {
  cy.get('body').then(body => {
    if (body.find("iframe[id^='sp_message_iframe']").length > 0) {
      cy.get("iframe[id^='sp_message_iframe']").then(iframe => {
        const innerBody = iframe.contents().find('body');
        cy.wrap(innerBody)
          .find('.message-component.message-button')
          /*
            match case false can be removed once the Non TCF banner PPSC-1504 is rolled out to production
            this was added so e2e tests wouldn't break as part part of the rollout due to the copy change.
          */
          .contains('I Agree', {matchCase: false})
          .click();
      });
    }
  });
  cy.setCookieConsent();
});

Cypress.Commands.add('setCookieConsent', () => {
  cy.setCookie('euconsent-v2', 'testCookieValue');
  cy.setCookie('consentUUID', 'testCookieValue');
});

export const flatRoutes = (routes, routeKey) =>
  routes.reduce((acc, route) => {
    if (route.page) {
      acc.push(route[routeKey]);
      return acc;
    }

    if (route.subNav) {
      return acc.concat(flatRoutes(route.subNav, routeKey));
    }

    throw new Error(
      `Route object has no page or subNav property! ${JSON.stringify(route)}`,
    );
  }, []);
