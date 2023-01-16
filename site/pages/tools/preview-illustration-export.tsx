import React from 'react';
import {SvgPreviewer} from '../../components/svg-previewer/svg-previewer';
import Layout, {LayoutProps} from '../../components/layout';

const PreviewIllustrationExport = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar>
    <SvgPreviewer />
  </Layout>
);

export default PreviewIllustrationExport;
