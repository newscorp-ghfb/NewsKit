import React from 'react';
import {addons, types} from '@storybook/addons';
import {STORY_CHANGED, STORY_SPECIFIED} from '@storybook/core-events';
import Helmet from 'react-helmet';
import {IconButton, Icons} from '@storybook/components';

import {
  Tealium,
  ConsentSettingsLink,
  newskitLightTheme,
  NewsKitProvider,
  Tooltip,
} from '../../../src';

const sendEvent = api => {
  const {path} = api.getUrlState();
  const storyData = api.getCurrentStoryData();
  let pageName = '';
  if (storyData) {
    const {title, story} = storyData;
    pageName = `${title.replace('NewsKit Light/', '')} : ${story}`;
  }

  if (!pageName) return;

  const [component, object] = pageName.split(':').map(s => s.trim());

  const event = {
    context: {
      url: path,
      component,
      object,
    },
    originator: 'page-load',
    trigger: 'load',
  };

  if (window && window.tealiumTrack) {
    // Un-comment when want to see the data
    // console.log('SEND_EVENT', event);
    window.tealiumTrack(event);
  }
};

const ADDON_ID = 'storybook/tealium';
const TOOL_ID = `${ADDON_ID}/tool`;

const isProduction = process.env.NODE_ENV === 'production';

const CONFIG = {
  privacyManagerId: '407619',
  tealium: {
    accountId: 'newsinternational',
    profileId: 'thetimes.storybook',
    env: isProduction ? 'prod' : 'dev',
  },
};

const Tool = () => {
  const handleOnClick = React.useCallback(() => {
    const link = document.querySelector('.privacy-policy-link');
    if (link) {
      link.click();
    }
  });

  return (
    <>
      <NewsKitProvider theme={newskitLightTheme}>
        <ConsentSettingsLink
          privacyManagerId={CONFIG.privacyManagerId}
          gdpr
          className="privacy-policy-link"
        >
          {''}
        </ConsentSettingsLink>
        <Tealium {...CONFIG.tealium} reactHelmet={Helmet} />
        <Tooltip content="Privacy Manager" asLabel placement="left">
          <span>
            <IconButton
              key={TOOL_ID}
              title="Show Privacy Manager"
              onClick={handleOnClick}
            >
              <Icons icon="shield" />
            </IconButton>
          </span>
        </Tooltip>
      </NewsKitProvider>
    </>
  );
};

addons.register(ADDON_ID, api => {
  addons.add(TOOL_ID, {
    type: types.TOOLEXTRA,
    title: 'Privacy',
    render: Tool,
  });

  // send initial page view event, since storybook doesn't do it via STORY_CHANGED
  // When the preview boots, the first story is chosen via a selection specifier
  api.on(STORY_SPECIFIED, () => {
    sendEvent(api);
  });

  // send event every time user navigates to a new story
  api.on(STORY_CHANGED, () => {
    sendEvent(api);
  });
});
