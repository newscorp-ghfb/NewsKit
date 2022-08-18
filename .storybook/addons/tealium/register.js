import {addons} from '@storybook/addons';
import {STORY_CHANGED, STORY_SPECIFIED} from '@storybook/core-events';

const initTealium = (accountId, profileId, env) => {
  const url = `//tags.tiqcdn.com/utag/${accountId}/${profileId}/${env}/utag.js`;
  console.log(`Loading Tealium from ${url}`);

  (function (a, b, c, d) {
    a = url;
    b = document;
    c = 'script';
    d = b.createElement(c);
    d.src = a;
    d.type = 'text/java' + c;
    d.async = true;
    window.utag_queue = [];
    if (d.addEventListener) {
      d.addEventListener(
        'load',
        function () {
          for (var i = 0; i < utag_queue.length; i++) {
            event = utag_queue[i];
            utag.track(event.event, event.data);
          }
        },
        false,
      );
    } else {
      d.onreadystatechange = function () {
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
          this.onreadystatechange = null;
          for (var i = 0; i < utag_queue.length; i++) {
            event = utag_queue[i];
            utag.track(event.event, event.data);
          }
        }
      };
    }

    a = b.getElementsByTagName(c)[0];
    a.parentNode.insertBefore(d, a);
  })();
};

const sendEvent = api => {
  const {path} = api.getUrlState();

  const event = {
    context: {url: path},
    originator: 'page-load',
    trigger: 'load',
  };

  if (window && window.utag) {
    console.log('SEND_EVENT', event);
    //window.utag.view(e);
  }
};

addons.register('storybook/tealium', api => {
  if (process.env.NODE_ENV === 'production') {
    console.log('PROD');
  } else {
    console.log('DEV');
  }

  const accountId = 'newsinternational';
  const profileId = 'thetimes.newskit';
  const env = 'dev';

  initTealium(accountId, profileId, env);

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
