import React from 'react';
import {addons, types} from '@storybook/addons';
import {STORY_CHANGED, STORY_SPECIFIED} from '@storybook/core-events';
import Helmet from 'react-helmet';
import {
  Consent,
  Tealium,
  ConsentSettingsLink,
  newskitLightTheme,
  NewsKitProvider,
} from '../../../src';

const sendEvent = api => {
  const {path} = api.getUrlState();

  const event = {
    context: {url: path},
    originator: 'page-load',
    trigger: 'load',
  };

  if (window && window.utag) {
    console.log('SEND_EVENT', event);
    console;
    window.tealiumTrack(event);
    //window.utag.view(e);
  }
};

const ADDON_ID = 'storybook/tealium';
const TOOL_ID = `${ADDON_ID}/tool`;

const Tool = () => {
  const isSiteEnvProduction = false;

  return (
    <NewsKitProvider theme={newskitLightTheme}>
      <ConsentSettingsLink privacyManagerId="407619" gdpr>
        Privacy policy
      </ConsentSettingsLink>

      <Tealium
        accountId="newsinternational"
        profileId="thetimes.newskit"
        env={isSiteEnvProduction ? 'prod' : 'dev'}
      />
      {/* <Consent
        sourcePointConfigUnified={{
          accountId: 259,
          propertyHref: 'https://storybook.newskit.co.uk',
          gdpr: {},
        }}
        reactHelmet={Helmet}
      /> */}
    </NewsKitProvider>
  );
};

addons.register(ADDON_ID, api => {
  // The addon only sets the

  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Tracking',
    render: Tool,
  });

  // send initial page view event, since storybook doesn't do it via STORY_CHANGED
  // When the preview boots, the first story is chosen via a selection specifier
  api.on(STORY_SPECIFIED, () => {
    console.log('STORY_SPECIFIED');
    sendEvent(api);
  });

  // send event every time user navigates to a new story
  api.on(STORY_CHANGED, () => {
    console.log('STORY_CHANGED');
    sendEvent(api);
  });
});
