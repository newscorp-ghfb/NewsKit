import React from 'react';
import dynamic from 'next/dynamic';
import config from '../cms/config';
import InlineMessage from '../cms/editor-components/inline-message';

// Netlify admin needs to be imported dynamically because it's dependant on the window
const Admin = dynamic(
  // @ts-ignore
  () =>
    Promise.all([
      import('netlify-cms-app'),
      // @ts-ignore
      import('netlify-cms-widget-mdx'),
    ]).then(([{default: CMS}, WidgetMdx]) => {
      // @ts-ignore
      window.CMS_MANUAL_INIT = true;
      // @ts-ignore
      CMS.init({config});
      CMS.registerWidget('mdx', WidgetMdx.MdxControl, args => (
        <>
          {WidgetMdx.setupPreview({
            components: get,
            scope: {...getMDXScope(), ...getMDXComponents()},
          })(args)}
        </>
      ));
      CMS.registerEditorComponent(InlineMessage);
    }),
  {ssr: false, loading: () => <p>Loading Admin...</p>},
);

export default Admin;
