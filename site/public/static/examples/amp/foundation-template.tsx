import React from 'react';
import {
  Head,
  Body,
  renderToStaticMarkup,
  createAmpScriptsObject,
} from 'newskit/amp';

const ampScriptsObject = createAmpScriptsObject();

const body = (
  <Body ampScriptsObject={ampScriptsObject}>
    {/* AMP page components go here */}
  </Body>
);

const head = (
  <Head
    title="My AMP Page"
    canonical="http://example.com/my-amp-page/"
    ampScriptsObject={ampScriptsObject}
  >
    {/* Optional custom head content */}
  </Head>
);

const html = renderToStaticMarkup(body, head);
