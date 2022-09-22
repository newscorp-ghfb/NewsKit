import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {NewsKitProvider} from 'newskit';
import config from '../cms/config';
import InlineMessage from '../cms/editor-components/inline-message';
import getMDXComponents from '../cms/utils/get-mdx-components';
import getMDXScope from '../cms/utils/get-mdx-scope';
import {docsThemeLight} from '../theme/doc-theme';

function StyleComponentsInjector({children}) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem =
      iframe.contentDocument && iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <NewsKitProvider theme={docsThemeLight} target={iframeRef}>
        {children}
      </NewsKitProvider>
    )
  );
}

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
      CMS.registerPreviewStyle('/_next/static/css/styles.chunk.css');

      CMS.registerPreviewTemplate('components', ({widgetFor}) =>
        widgetFor('body'),
      );
      CMS.registerWidget('mdx', WidgetMdx.MdxControl, args => (
        <StyleComponentsInjector>
          {WidgetMdx.setupPreview({
            components: getMDXComponents(),
            scope: {...getMDXScope(), ...getMDXComponents()},
            allowedImports: {
              newskit: {
                ImportDefault: InlineMessage,
              },
            },
          })(args)}
        </StyleComponentsInjector>
      ));
      CMS.registerEditorComponent(InlineMessage);
    }),
  {ssr: false, loading: () => <p>Loading Admin...</p>},
);

export default Admin;
